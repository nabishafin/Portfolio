import { NextResponse } from 'next/server';
import dbConnect, { Message } from '../../../lib/db';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please provide name, email, and message.' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // 1. Save to Database
    const newMessage = await Message.create({ name, email, message });

    // 2. Send Email Notification via Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER, // Send to yourself
          subject: `🚀 New Message from ${name} via Portfolio`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
              <h2 style="color: #00F2FE;">New Contact Form Submission</h2>
              <p><strong>From:</strong> ${name} (${email})</p>
              <p><strong>Message:</strong></p>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
              <p style="font-size: 0.8rem; color: #888;">This message was sent from your Portfolio website.</p>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('📧 Email notification sent!');
      } catch (mailError) {
        console.error('❌ Nodemailer Error:', mailError.message);
        // We don't return an error here so the user still gets a success message
        // since the database save was successful.
      }
    }
    
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
