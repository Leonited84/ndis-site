import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message, language } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Graceful fallback: log the submission and return success
      // The client can also fall back to mailto: link
      console.log("Contact form submission (no Resend key configured):", {
        name,
        phone,
        email,
        message,
        language,
      });
      return NextResponse.json({
        success: true,
        fallback: true,
        message: "Message received. I'll be in touch within 24 hours.",
      });
    }

    // Dynamic import to avoid build-time error when key is missing
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "NDIS Site <onboarding@resend.dev>",
      to: "leohoussami@gmail.com",
      subject: `New enquiry from ${name} (${language === "ar" ? "Arabic" : "English"})`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Preferred language:</strong> ${language === "ar" ? "Arabic" : "English"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
