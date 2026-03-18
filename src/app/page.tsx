import CTA from "@/components/landing/CTA";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import WhatToAsk from "@/components/landing/WhatToAsk";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { SignedOut, SignUpButton ,SignedIn, SignOutButton} from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser();
    if(user) return redirect("/dashboard");
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <Hero/>
      <HowItWorks/>
      <WhatToAsk/>
      <PricingSection />
      <CTA/>
      <Footer/>
    </div>
  );
}
