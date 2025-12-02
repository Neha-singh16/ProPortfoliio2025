import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ReqBody = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReqBody;

    if (!body.firstName || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("SMTP credentials are missing in environment variables.");
      return NextResponse.json({ error: "Server not configured to send email" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const to = process.env.TO_EMAIL || user;
    const from = process.env.FROM_EMAIL || user;

    const subject = `New message from ${body.firstName} ${body.lastName || ""}`.trim();
    const text = `Name: ${body.firstName} ${body.lastName || ""}\nEmail: ${body.email}\n\n${body.message}`;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      replyTo: body.email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
