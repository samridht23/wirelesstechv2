const nodemailer = require("nodemailer")

type SendMailParams = {
  subject: string;
  toEmail: string;
  otpText: string;
};
export async function sendMail({ subject, toEmail, otpText }: SendMailParams) {
  try {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PW,
      },
    });

    var mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: toEmail,
      subject: subject,
      text: otpText,
    };

    await transporter.sendMail(mailOptions);
    // remove console
    console.log('Email Sent');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('An error occurred while sending the email');
  }
}
