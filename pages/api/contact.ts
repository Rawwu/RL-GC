import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'raulmtzjr7@gmail.com',
      subject: `New RL&G Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service Needed:</strong> ${service}</p>` : ''}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      `,
    });

    return res.status(200).json({ message: 'ok' });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
