import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ReqBody = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
};

export async function HEAD() {
  return new Response(null, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReqBody;

    if (!body.firstName || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const subject = `New message from ${body.firstName} ${body.lastName || ""}`.trim();
    const text = `Name: ${body.firstName} ${body.lastName || ""}\nEmail: ${body.email}\n\n${body.message}`;
    const html = `<p><strong>Name:</strong> ${body.firstName} ${body.lastName || ""}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p style="white-space:pre-wrap;">${body.message}</p>`;

    // 1) Try SMTP if configured
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const toEnv = process.env.TO_EMAIL;
    const fromEnv = process.env.FROM_EMAIL;

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      const to = toEnv || user;
      const from = fromEnv || user;
      await transporter.sendMail({ from, to, subject, text, html, replyTo: body.email });
      return NextResponse.json({ ok: true, method: "smtp" });
    }

    // 2) Fallback to Resend if API key provided
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const to = toEnv || process.env.RESEND_TO || process.env.TO_EMAIL;
      const from = fromEnv || "Portfolio Contact <onboarding@resend.dev>"; // Resend requires a verified sender in prod

      if (!to) {
        return NextResponse.json(
          { error: "Missing TO_EMAIL (or RESEND_TO). Set a recipient email." },
          { status: 500 }
        );
      }

      const { error } = await resend.emails.send({
        from,
        to,
        subject,
        text,
        html,
        replyTo: body.email,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: "Failed to send email (Resend)" }, { status: 500 });
      }

      return NextResponse.json({ ok: true, method: "resend" });
    }

    // 3) Fallback: log message locally and succeed
    // (Email service not configured - this is OK for development)
    console.log("📧 [CONTACT FORM] Message logged locally:", {
      from: body.email,
      name: `${body.firstName} ${body.lastName || ""}`.trim(),
      message: body.message,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ 
      ok: true, 
      method: "local-log",
      message: "Message logged locally. Configure SMTP or Resend to send real emails."
    });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
