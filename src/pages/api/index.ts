import { sendMail } from "../../lib/mailService"
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case 'POST': {
        const { subject, toEmail, otpText } = req.body;
        console.log(subject)
        console.log(toEmail)
        console.log(otpText)
        if (!subject || !toEmail || !otpText) {
          return res.status(400).json({ error: 'Missing required data in request body' });
        }
        await sendMail({
          subject,
          toEmail,
          otpText,
        });
        res.status(200).send('Success');
        break;
      }
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error: 'Error sending Email',
    });
  }
};

export default handler;
