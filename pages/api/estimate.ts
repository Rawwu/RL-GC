import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  // TODO: wire up email delivery (e.g. SendGrid, Nodemailer, Resend)
  // req.body contains: { services, name, phone, email, zip, message }
  return res.status(200).json({ message: 'ok' });
}
