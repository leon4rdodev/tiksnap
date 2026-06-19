import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Configurar el transporter de Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL, // tiksnap.es@gmail.com
        pass: process.env.CONTACT_EMAIL_PASSWORD, // App Password de Gmail
      },
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[TikSnap Contacto] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000; color: #d1d5db;">
          <table role="presentation" style="width: 100%;">
            <tr>
              <td style="padding: 40px 24px;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto;">
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <p style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">Tik<span style="color: #E11D48;">Snap</span></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 8px; color: #9ca3af; font-size: 13px;">Nombre &mdash; <span style="color: #ffffff;">${name}</span></td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 8px; color: #9ca3af; font-size: 13px;">Email &mdash; <span style="color: #E11D48;">${email}</span></td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 24px; color: #9ca3af; font-size: 13px;">Asunto &mdash; <span style="color: #ffffff;">${subject}</span></td>
                  </tr>
                  <tr>
                    <td style="padding-top: 24px; border-top: 1px solid #1f2937; padding-bottom: 24px;">
                      <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 24px; border-top: 1px solid #1f2937; font-size: 11px; color: #6b7280;">
                      <a href="https://www.tiksnap.es" style="color: #E11D48; text-decoration: none;">TikSnap.es</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Enviar email de confirmación al usuario
    const confirmationMailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: email,
      subject: "Gracias por contactar a TikSnap",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000; color: #d1d5db;">
          <table role="presentation" style="width: 100%;">
            <tr>
              <td style="padding: 40px 24px;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto;">
                  <tr>
                    <td style="padding-bottom: 32px;">
                      <p style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">Tik<span style="color: #E11D48;">Snap</span></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 24px;">
                      <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">Gracias por contactarnos</h2>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 24px; line-height: 1.7;">
                      Hola <strong style="color: #ffffff;">${name}</strong>, hemos recibido tu mensaje. Te responderemos en 24-48 horas.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 8px; color: #9ca3af; font-size: 13px;">Asunto &mdash; <span style="color: #ffffff;">${subject}</span></td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 32px; color: #6b7280; font-size: 12px;">
                      ${new Date().toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 32px;">
                      <a href="https://www.tiksnap.es" style="display: inline-block; background: #E11D48; color: #ffffff; text-decoration: none; padding: 12px 28px; font-weight: 600; font-size: 14px;">Volver a TikSnap</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 24px; border-top: 1px solid #1f2937; padding-bottom: 24px; font-size: 11px; color: #6b7280; line-height: 1.5;">
                      <a href="https://www.tiksnap.es" style="color: #E11D48; text-decoration: none;">www.tiksnap.es</a><br>
                      Este es un correo automático. Si no solicitaste este contacto, ignóralo.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Enviar email de confirmación
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Mensaje enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor, intenta más tarde." },
      { status: 500 }
    );
  }
}
