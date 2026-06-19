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
          <title>Nuevo mensaje - TikSnap</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #111827 0%, #000000 100%); border-radius: 16px; overflow: hidden; border: 1px solid #1f2937;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 32px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        Tik<span style="color: #E11D48;">Snap</span>
                      </h1>
                      <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 13px;">
                        Nuevo mensaje de contacto
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Detalles del remitente -->
                  <tr>
                    <td style="padding: 0 30px;">
                      <div style="border: 1px solid #1f2937; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                        <table role="presentation" style="width: 100%;">
                          <tr>
                            <td style="padding: 6px 0; color: #9ca3af; font-size: 13px; width: 80px;">Nombre</td>
                            <td style="padding: 6px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${name}</td>
                          </tr>
                          <tr>
                            <td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Email</td>
                            <td style="padding: 6px 0; color: #E11D48; font-size: 14px;">${email}</td>
                          </tr>
                          <tr>
                            <td style="padding: 6px 0; color: #9ca3af; font-size: 13px;">Asunto</td>
                            <td style="padding: 6px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${subject}</td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Mensaje -->
                  <tr>
                    <td style="padding: 0 30px 30px;">
                      <div style="border-left: 3px solid #E11D48; padding: 4px 0 4px 16px;">
                        <p style="margin: 0 0 8px 0; color: #d1d5db; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje</p>
                        <p style="margin: 0; color: #d1d5db; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #000000; padding: 24px 30px; text-align: center; border-top: 1px solid #1f2937;">
                      <p style="margin: 0; color: #6b7280; font-size: 11px;">
                        Enviado desde el formulario de contacto de <a href="https://www.tiksnap.es" style="color: #E11D48; text-decoration: none;">TikSnap.es</a>
                      </p>
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
          <title>Confirmación de Contacto - TikSnap</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #111827 0%, #000000 100%); border-radius: 16px; overflow: hidden; border: 1px solid #1f2937;">
                  
                  <!-- Header con gradiente -->
                  <tr>
                    <td style="padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                        Tik<span style="color: #E11D48;">Snap</span>
                      </h1>
                      <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 13px; letter-spacing: 0.5px;">
                        DESCARGADOR DE TIKTOK
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Contenido principal -->
                  <tr>
                    <td style="padding: 0 30px 30px;">
                      <div style="text-align: center; margin-bottom: 32px;">
                        <div style="display: inline-flex; align-items: center; justify-content: center; background: rgba(225, 29, 72, 0.1); border: 2px solid #E11D48; border-radius: 9999px; width: 72px; height: 72px; font-size: 32px; color: #E11D48; font-weight: bold;">
                          ✓
                        </div>
                      </div>
                      
                      <h2 style="margin: 0 0 16px 0; color: #ffffff; font-size: 24px; font-weight: 700; text-align: center;">
                        ¡Gracias por contactarnos!
                      </h2>
                      
                      <p style="margin: 0 0 24px 0; color: #d1d5db; font-size: 16px; line-height: 1.7; text-align: center;">
                        Hola <strong style="color: #ffffff;">${name}</strong>,
                      </p>
                      
                      <p style="margin: 0 0 24px 0; color: #d1d5db; font-size: 15px; line-height: 1.7;">
                        Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y te responderemos lo antes posible.
                      </p>
                      
                      <!-- Detalles del mensaje -->
                      <div style="border: 1px solid #1f2937; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                        <p style="margin: 0 0 12px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                          Resumen de tu mensaje
                        </p>
                        <p style="margin: 0 0 8px 0; color: #d1d5db; font-size: 14px;">
                          <strong style="color: #ffffff;">Asunto:</strong> ${subject}
                        </p>
                        <p style="margin: 0; color: #6b7280; font-size: 13px;">
                          ${new Date().toLocaleDateString('es-ES', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      
                      <!-- Tiempo de respuesta -->
                      <div style="background: rgba(225, 29, 72, 0.08); border: 1px solid rgba(225, 29, 72, 0.2); border-radius: 10px; padding: 16px; margin-bottom: 28px; text-align: center;">
                        <p style="margin: 0; color: #fb7185; font-size: 14px;">
                          <strong>Tiempo de respuesta estimado:</strong> 24-48 horas
                        </p>
                      </div>
                      
                      <!-- CTA Button -->
                      <div style="text-align: center; margin-bottom: 32px;">
                        <a href="https://www.tiksnap.es" style="display: inline-block; background: #E11D48; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 9999px; font-weight: 700; font-size: 15px;">
                          Volver a TikSnap
                        </a>
                      </div>
                      
                      <!-- Enlaces útiles -->
                      <div style="border-top: 1px solid #1f2937; padding-top: 24px;">
                        <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 14px; text-align: center;">
                          Mientras tanto, explora:
                        </p>
                        <table role="presentation" style="width: 100%;">
                          <tr>
                            <td style="text-align: center; padding: 6px; width: 33.33%;">
                              <a href="https://www.tiksnap.es/#faq" style="color: #9ca3af; text-decoration: none; font-size: 13px; border: 1px solid #1f2937; border-radius: 9999px; display: block; padding: 8px 0;">FAQ</a>
                            </td>
                            <td style="text-align: center; padding: 6px; width: 33.33%;">
                              <a href="https://www.tiksnap.es/blog" style="color: #9ca3af; text-decoration: none; font-size: 13px; border: 1px solid #1f2937; border-radius: 9999px; display: block; padding: 8px 0;">Blog</a>
                            </td>
                            <td style="text-align: center; padding: 6px; width: 33.33%;">
                              <a href="https://www.tiksnap.es/como-usar" style="color: #9ca3af; text-decoration: none; font-size: 13px; border: 1px solid #1f2937; border-radius: 9999px; display: block; padding: 8px 0;">Guías</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #000000; padding: 28px 30px; text-align: center; border-top: 1px solid #1f2937;">
                      <p style="margin: 0 0 8px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                        Tik<span style="color: #E11D48;">Snap</span>
                      </p>
                      <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 12px;">
                        Descarga videos de TikTok sin marca de agua
                      </p>
                      <p style="margin: 0 0 4px 0; color: #9ca3af; font-size: 12px;">
                        <a href="https://www.tiksnap.es" style="color: #E11D48; text-decoration: none;">www.tiksnap.es</a>
                      </p>
                      <p style="margin: 0; color: #6b7280; font-size: 11px;">
                        © ${new Date().getFullYear()} TikSnap
                      </p>
                      <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #1f2937;">
                        <p style="margin: 0; color: #4b5563; font-size: 10px; line-height: 1.5;">
                          Este es un correo automático de confirmación. Por favor, no respondas a este mensaje.<br/>
                          Si no solicitaste este contacto, puedes ignorar este correo de forma segura.
                        </p>
                      </div>
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
