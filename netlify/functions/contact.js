import nodemailer from 'nodemailer';

const SMTP_HOST = 'smtp-relay.brevo.com';
const SMTP_PORT = 587;
const SMTP_USER = '9ce7e0001@smtp-brevo.com';

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return new Response('Missing required fields', { status: 400 });
    }

    const apiKey = process.env.BREV_API_KEY;
    if (!apiKey) {
      console.error('Missing BREV_API_KEY in server environment');
      return new Response('Server configuration error', { status: 500 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'sachin@bluepanda.in';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'no-reply@bluepanda.in';

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: apiKey,
      },
    });

    const safeMessage = message && message.trim() ? message.trim() : 'No details provided.';

    await transporter.sendMail({
      from: `Blue Panda <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New contact request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${safeMessage}`,
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact function error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
