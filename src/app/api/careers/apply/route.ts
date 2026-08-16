import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = (formData.get('phone') as string) || 'Not Provided';
    const role = (formData.get('role') as string) || (formData.get('jobTitle') as string) || 'General Application';
    const portfolio = (formData.get('portfolio') as string) || 'Not Provided';
    const linkedin = (formData.get('linkedin') as string) || 'Not Provided';
    const coverNote = formData.get('coverNote') as string;
    const resumeFile = formData.get('resume') as File | null;

    if (!fullName || !email || !coverNote) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields (Full Name, Email, and Cover Note).' },
        { status: 400 }
      );
    }

    let attachments: any[] = [];

    if (resumeFile) {
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExt = resumeFile.name.substring(resumeFile.name.lastIndexOf('.')).toLowerCase();
      if (!allowedExtensions.includes(fileExt)) {
        return NextResponse.json(
          { success: false, error: 'Invalid file format. Please upload a PDF, DOC, or DOCX resume.' },
          { status: 400 }
        );
      }

      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      });
    }

    const notificationEmail = process.env.CAREERS_EMAIL || process.env.CAREERS_NOTIFICATION_EMAIL || 'cd6464400@gmail.com';
    const smtpUser = process.env.SMTP_USER || notificationEmail;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    console.log(`[MyAdSphere Recruitment] Processing application for role: ${role}`);
    console.log(`Candidate: ${fullName} (${email}) -> Notification email: ${notificationEmail}`);

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"MyAdSphere Careers" <${smtpUser}>`,
        to: notificationEmail,
        subject: `NEW MYADSPHERE CAREER APPLICATION — ${role.toUpperCase()}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #000000; color: #ffffff; padding: 30px; border-radius: 12px;">
            <h2 style="color: #FF4A17; margin-top: 0; text-transform: uppercase; letter-spacing: 1px;">NEW MYADSPHERE CAREER APPLICATION</h2>
            <hr style="border-color: #333333; margin-bottom: 20px;" />
            <p><strong>Applied Role:</strong> <span style="color: #FF4A17; font-weight: bold;">${role}</span></p>
            <p><strong>Applicant Name:</strong> ${fullName}</p>
            <p><strong>Email Address:</strong> <a style="color: #FF4A17;" href="mailto:${email}">${email}</a></p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Portfolio / Website:</strong> <a style="color: #FF4A17;" href="${portfolio}">${portfolio}</a></p>
            <p><strong>LinkedIn Profile:</strong> <a style="color: #FF4A17;" href="${linkedin}">${linkedin}</a></p>
            <div style="margin-top: 20px; padding: 18px; background-color: #111111; border-left: 4px solid #FF4A17; border-radius: 6px;">
              <p style="margin-top: 0; color: #888888; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Cover Note:</p>
              <p style="white-space: pre-wrap; margin-bottom: 0; line-height: 1.6;">${coverNote}</p>
            </div>
            ${resumeFile ? `<p style="margin-top: 20px; font-size: 13px; color: #aaaaaa;">📎 Attached Resume: <strong>${resumeFile.name}</strong></p>` : ''}
          </div>
        `,
        attachments,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[MyAdSphere Recruitment] Application notification email delivered to ${notificationEmail}`);
    }

    return NextResponse.json({
      success: true,
      message: 'APPLICATION RECEIVED. Thank you for your interest in MyAdSphere. Our team will review your profile and get back to you if there is a fit.',
    });
  } catch (error) {
    console.error('Error submitting career application:', error);
    return NextResponse.json(
      { success: false, error: 'We could not submit your application. Please check your information and try again.' },
      { status: 500 }
    );
  }
}
