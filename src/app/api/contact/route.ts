import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const SENDER_EMAIL = '"NexaWeb Studio" <contact@nexawebstudio.uk>';
const ADMIN_EMAIL = 'contact.nexawebstudio.uk@gmail.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, businessName, email, phone, businessType, goals, needs, message, locale } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { success: false, error: 'Server email configuration is missing.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const projectGoals = goals || needs || message || 'Not specified';
    const clientBusinessType = businessType || 'Not specified';
    const clientPhone = phone || 'Not provided';
    const clientCompany = businessName || 'Not provided';
    const userLocale = (locale || 'en').toLowerCase();

    // 1. Clean, single-language client confirmation subject matching user's locale
    const clientSubjects: Record<string, string> = {
      en: 'Your Project Request Has Been Received — NexaWeb Studio',
      pt: 'O Seu Pedido de Proposta Foi Recebido — NexaWeb Studio',
      fr: 'Votre Demande de Projet a Bien Été Reçue — NexaWeb Studio',
      ar: 'تم استلام طلب مشروعك بنجاح — NexaWeb Studio',
    };
    const clientSubject = clientSubjects[userLocale] || clientSubjects.en;

    // 2. Admin Notification Email Template
    const adminHtmlContent = `<!DOCTYPE html>
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
        <tr>
          <th>Language / Locale</th>
          <td>${escapeHtml(userLocale.toUpperCase())}</td>
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
      <p>Sent directly from the <a href="https://www.nexawebstudio.uk">NexaWeb Studio</a> inquiry form.</p>
      <p style="margin-top: 4px;">Reply directly to this email to contact ${escapeHtml(name)}.</p>
    </div>
  </div>
</body>
</html>`;

    const adminTextContent = `New Project Inquiry Received - NexaWeb Studio

Client Name: ${name}
Business Name: ${clientCompany}
Email: ${email}
Phone: ${clientPhone}
Business Sector: ${clientBusinessType}
Project Needs / Goals: ${projectGoals}
Language / Locale: ${userLocale.toUpperCase()}
Additional Notes: ${message || 'None'}
`;

    // 3. Client Confirmation Email Template (Single-language based on locale)
    const { html: clientHtmlContent, text: clientTextContent } = getClientConfirmationTemplate(name, userLocale);

    // 4. Send both emails concurrently via Resend SDK
    const adminMailPromise = resend.emails.send({
      from: SENDER_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `✨ New Inquiry: ${clientCompany !== 'Not provided' ? clientCompany : name} (${name})`,
      text: adminTextContent,
      html: adminHtmlContent,
    });

    const clientMailPromise = resend.emails.send({
      from: SENDER_EMAIL,
      to: email,
      replyTo: 'contact@nexawebstudio.uk',
      subject: clientSubject,
      text: clientTextContent,
      html: clientHtmlContent,
    });

    const [adminResult, clientResult] = await Promise.all([adminMailPromise, clientMailPromise]);

    if (adminResult.error) {
      console.error('Resend admin email error:', adminResult.error);
    }
    if (clientResult.error) {
      console.error('Resend client email error:', clientResult.error);
    }

    if (adminResult.error && clientResult.error) {
      return NextResponse.json(
        {
          success: false,
          error: adminResult.error.message || 'Failed to send inquiry email.',
        },
        { status: 500 }
      );
    }

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

function getClientConfirmationTemplate(name: string, locale: string): { html: string; text: string } {
  let greetingTitle = 'Thank you! Your project request has been received.';
  let mainMessage = 'Our team will review your project details and reach out within 2–4 business hours.';
  let whatsappButtonText = '💬 Quick Chat on WhatsApp';
  let isRtl = false;

  if (locale === 'pt') {
    greetingTitle = 'Obrigado! O seu pedido de proposta foi recebido.';
    mainMessage = 'A nossa equipa irá analisar os seus dados e entrar em contacto dentro de 2 a 4 horas úteis.';
    whatsappButtonText = '💬 Conversar no WhatsApp';
  } else if (locale === 'fr') {
    greetingTitle = 'Merci ! Votre demande de projet a bien été reçue.';
    mainMessage = 'Notre équipe examine actuellement vos informations et vous répondra sous 2 à 4 heures ouvrées.';
    whatsappButtonText = '💬 Discussion rapide sur WhatsApp';
  } else if (locale === 'ar') {
    greetingTitle = 'شكراً لك! تم استلام طلب مشروعك بنجاح.';
    mainMessage = 'سيقوم فريقنا بمراجعة تفاصيل مشروعك والتواصل معك خلال 2 إلى 4 ساعات عمل.';
    whatsappButtonText = '💬 محادثة سريعة عبر واتساب';
    isRtl = true;
  }

  const html = `<!DOCTYPE html>
<html lang="${locale}" ${isRtl ? 'dir="rtl"' : ''}>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px 12px; color: #0f172a; }
    .card { max-width: 540px; margin: 0 auto; background-color: #ffffff; border: 1px solid #bbf7d0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.08); }
    .badge-header { background-color: #f0fdf4; padding: 32px 24px 22px 24px; text-align: center; border-bottom: 1px solid #dcfce7; }
    .check-icon { display: inline-block; width: 56px; height: 56px; line-height: 56px; border-radius: 50%; background: #10b981; color: #ffffff; font-size: 28px; font-weight: bold; text-align: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35); }
    .brand-name { margin-top: 14px; font-size: 15px; font-weight: 800; letter-spacing: 0.12em; color: #065f46; text-transform: uppercase; }
    .body-content { padding: 32px 28px; ${isRtl ? 'direction: rtl; text-align: right;' : 'text-align: left;'} }
    .title { font-size: 18px; font-weight: 700; color: #0f172a; margin: 0 0 8px 0; line-height: 1.4; }
    .text { font-size: 14px; color: #475569; margin: 0 0 24px 0; line-height: 1.6; }
    .cta-container { text-align: center; padding: 8px 0; }
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
      <h2 class="title">${greetingTitle}</h2>
      <p class="text">${mainMessage}</p>
      <div class="cta-container">
        <a href="https://wa.me/351932020456" target="_blank" class="whatsapp-btn">
          ${whatsappButtonText}
        </a>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">NexaWeb Studio • <a href="mailto:contact@nexawebstudio.uk">contact@nexawebstudio.uk</a></p>
      <p style="margin: 4px 0 0 0;"><a href="https://www.nexawebstudio.uk">https://www.nexawebstudio.uk</a></p>
    </div>
  </div>
</body>
</html>`;

  const text = `${greetingTitle}\n${mainMessage}\n\nWhatsApp: https://wa.me/351932020456\n\nNexaWeb Studio\ncontact@nexawebstudio.uk\nhttps://www.nexawebstudio.uk`;

  return { html, text };
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
