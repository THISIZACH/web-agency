import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, businessName, email, phone, businessType, goals, needs, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables');
      return NextResponse.json(
        { success: false, error: 'Server email configuration is missing.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const projectGoals = goals || needs || message || 'Not specified';
    const clientBusinessType = businessType || 'Not specified';
    const clientPhone = phone || 'Not provided';
    const clientCompany = businessName || 'Not provided';

    // 1. Admin Notification Email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 32px 24px; text-align: center; }
    .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0 0; color: #d1fae5; font-size: 14px; font-weight: 500; }
    .content { padding: 32px 24px; }
    .badge { display: inline-block; padding: 4px 12px; background: #ecfdf5; color: #065f46; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    th { text-align: left; padding: 12px 16px; background: #f8fafc; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e2e8f0; width: 35%; }
    td { padding: 14px 16px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #f1f5f9; }
    tr:last-child th, tr:last-child td { border-bottom: none; }
    .highlight { font-weight: 700; color: #059669; }
    .message-box { background: #f8fafc; border-left: 4px solid #10b981; padding: 16px; margin-top: 24px; border-radius: 0 8px 8px 0; }
    .message-title { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 6px; }
    .message-text { font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap; margin: 0; }
    .footer { background: #f8fafc; padding: 20px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .footer a { color: #059669; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>NexaWeb Studio</h1>
      <p>New Project Inquiry Submission</p>
    </div>
    <div class="content">
      <span class="badge">🚀 Client Lead Received</span>
      <table>
        <tr>
          <th>Client Name</th>
          <td class="highlight">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <th>Business Name</th>
          <td><strong>${escapeHtml(clientCompany)}</strong></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td><a href="mailto:${escapeHtml(email)}" style="color: #059669; font-weight: 600; text-decoration: none;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <th>Phone / WhatsApp</th>
          <td><a href="tel:${escapeHtml(clientPhone)}" style="color: #1e293b; text-decoration: none;">${escapeHtml(clientPhone)}</a></td>
        </tr>
        <tr>
          <th>Business Sector</th>
          <td>${escapeHtml(clientBusinessType)}</td>
        </tr>
        <tr>
          <th>Project Needs / Goals</th>
          <td>${escapeHtml(projectGoals)}</td>
        </tr>
      </table>

      ${message ? `
      <div class="message-box">
        <div class="message-title">Additional Client Message / Notes:</div>
        <p class="message-text">${escapeHtml(message)}</p>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <p>Sent directly from the <a href="https://nexawebstudio.com">NexaWeb Studio</a> inquiry form.</p>
      <p style="margin-top: 4px;">Reply directly to this email to contact ${escapeHtml(name)}.</p>
    </div>
  </div>
</body>
</html>
`;

    const textContent = `
New Project Inquiry Received - NexaWeb Studio

Client Name: ${name}
Business Name: ${clientCompany}
Email: ${email}
Phone: ${clientPhone}
Business Sector: ${clientBusinessType}
Project Needs / Goals: ${projectGoals}
Additional Notes: ${message || 'None'}
`;

    // 2. Client Confirmation Email (Tri-lingual: EN / PT / AR)
    const clientHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px 12px; color: #0f172a; }
    .card { max-width: 540px; margin: 0 auto; background-color: #ffffff; border: 1px solid #bbf7d0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.08); }
    .badge-header { background-color: #f0fdf4; padding: 32px 24px 22px 24px; text-align: center; border-bottom: 1px solid #dcfce7; }
    .check-icon { display: inline-block; width: 56px; height: 56px; line-height: 56px; border-radius: 50%; background: #10b981; color: #ffffff; font-size: 28px; font-weight: bold; text-align: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35); }
    .brand-name { margin-top: 14px; font-size: 15px; font-weight: 800; letter-spacing: 0.12em; color: #065f46; text-transform: uppercase; }
    .body-content { padding: 28px 28px; }
    .lang-section { margin-bottom: 20px; }
    .lang-section.rtl { direction: rtl; text-align: right; font-family: 'Segoe UI', Tahoma, Arial, sans-serif; }
    .lang-divider { height: 1px; background-color: #e2e8f0; margin: 20px 0; border: none; }
    .title { font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 6px 0; line-height: 1.4; }
    .text { font-size: 14px; color: #475569; margin: 0; line-height: 1.6; }
    .cta-container { text-align: center; padding: 12px 0 6px 0; }
    .whatsapp-btn { display: inline-block; background-color: #25D366; color: #ffffff !important; font-size: 14px; font-weight: 700; text-decoration: none; padding: 13px 28px; border-radius: 12px; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3); letter-spacing: 0.02em; }
    .footer { background-color: #f8fafc; border-top: 1px solid #f1f5f9; padding: 20px 24px; text-align: center; font-size: 12px; color: #64748b; line-height: 1.6; }
    .footer a { color: #059669; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge-header">
      <div class="check-icon">&#10003;</div>
      <div class="brand-name">NexaWeb Studio</div>
    </div>
    
    <div class="body-content">
      <!-- English -->
      <div class="lang-section">
        <h2 class="title">Thank you! Your project request has been received.</h2>
        <p class="text">Our team will review your details and reach out within 2–4 hours.</p>
      </div>

      <hr class="lang-divider" />

      <!-- Português -->
      <div class="lang-section">
        <h2 class="title">Obrigado! O seu pedido de projeto foi recebido.</h2>
        <p class="text">A nossa equipa irá analisar os seus dados e entrar em contacto dentro de 2 a 4 horas.</p>
      </div>

      <hr class="lang-divider" />

      <!-- Français -->
      <div class="lang-section">
        <h2 class="title">Merci ! Votre demande de projet a bien été reçue.</h2>
        <p class="text">Notre équipe examine actuellement vos informations et vous répondra sous 2 à 4 heures.</p>
      </div>

      <hr class="lang-divider" />

      <!-- العربية (RTL) -->
      <div class="lang-section rtl">
        <h2 class="title">شكراً لك! تم استلام طلب مشروعك بنجاح.</h2>
        <p class="text">سيقوم فريقنا بمراجعة التفاصيل والتواصل معك خلال 2 إلى 4 ساعات.</p>
      </div>

      <!-- WhatsApp CTA -->
      <div class="cta-container">
        <a href="https://wa.me/351932020456" target="_blank" class="whatsapp-btn">
          💬 Discussion rapide sur WhatsApp
        </a>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0;">NexaWeb Studio • <a href="mailto:contact.nexawebstudio.uk@gmail.com">contact.nexawebstudio.uk@gmail.com</a></p>
      <p style="margin: 4px 0 0 0;"><a href="https://nexawebstudio.com">https://nexawebstudio.com</a></p>
    </div>
  </div>
</body>
</html>
`;

    const clientTextContent = `
Thank you! Your project request has been received.
Our team will review your details and reach out within 2–4 hours.

Obrigado! O seu pedido de projeto foi recebido.
A nossa equipa irá analisar os seus dados e entrar em contacto dentro de 2 a 4 horas.

Merci ! Votre demande de projet a bien été reçue.
Notre équipe examine actuellement vos informations et vous répondra sous 2 à 4 heures.

شكراً لك! تم استلام طلب مشروعك بنجاح.
سيقوم فريقنا بمراجعة التفاصيل والتواصل معك خلال 2 إلى 4 ساعات.

Discussion rapide sur WhatsApp: https://wa.me/351932020456

NexaWeb Studio
contact.nexawebstudio.uk@gmail.com
https://nexawebstudio.com
`;

    // Send both emails in parallel
    const adminMailPromise = transporter.sendMail({
      from: `"NexaWeb Studio Lead" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `✨ New Inquiry: ${clientCompany !== 'Not provided' ? clientCompany : name} (${name})`,
      text: textContent,
      html: htmlContent,
    });

    const clientMailPromise = transporter.sendMail({
      from: `"NexaWeb Studio" <contact.nexawebstudio.uk@gmail.com>`,
      to: email,
      subject: 'Project Request Received | Pedido Recebido | Demande Reçue | تم استلام طلبك — NexaWeb Studio',
      text: clientTextContent,
      html: clientHtmlContent,
    });

    await Promise.all([adminMailPromise, clientMailPromise]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to send inquiry email.',
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
