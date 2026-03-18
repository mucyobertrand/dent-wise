import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const body = await req.json();

        const {userEmail, appointmentType, appointmentDate, appointmentTime, duration, price, doctorName} = body;

        if(!userEmail || !appointmentType || !appointmentDate || !appointmentTime || !duration || !price){
            return new NextResponse("Missing required fields", {status: 400});
        }

        const {data, error} = await resend.emails.send({
            from:  "DentWise <no-reply@resend.dev>",
            to: [userEmail],
            subject:"Appointment Confirmation - DentWise",
            react : AppointmentConfirmationEmail({
                doctorName,
                appointmentDate,
                appointmentTime,
                duration,
                price,
                appointmentType,
            })
        })

        if(error){
            console.log("Resend error",error);
            return new NextResponse("Failed to send email", {status: 500});
        }

        return NextResponse.json({
            message:"Email sent successfully",
            emailId: data?.id
        },{status:200})
    } catch (error) {
        console.log("Error sending email",error);
        return new NextResponse("Failed to send email", {status: 500});
        
    }
}