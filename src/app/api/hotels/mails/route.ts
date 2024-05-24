import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      to: process.env.EMAIL_USER,
      subject: `We have received a message about a hotel called ${formData.hotelName}`,
      text: `Phone Number: ${formData.phoneNumber}\nMessage: ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message successfully sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Error sending email, please try again' }, { status: 500 });
  }
}
