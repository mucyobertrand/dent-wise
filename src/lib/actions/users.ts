"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser (){
  const user = await currentUser();
  if (!user) return null;

  const email =
    user.primaryEmailAddress?.emailAddress ??
    user.emailAddresses[0]?.emailAddress;

  if (!email) {
    throw new Error("Clerk user has no email address");
  }

  const phone = user.phoneNumbers[0]?.phoneNumber;

  return prisma.user.upsert({
    where: {
      clerkId: user.id,
    },
    create: {
      clerkId: user.id,
      email,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
      phone: phone ?? undefined,
    },
    update: {
      email,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
      phone: phone ?? undefined,
    },
  });
}