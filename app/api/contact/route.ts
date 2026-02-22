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
      to: process.env.CONTACT_EMAIL, // tiksnap.es@gmail.com
      replyTo: email, // Email del usuario para poder responder
      subject: `[TikSnap Contacto] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FE2C55;">Nuevo mensaje de contacto</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de TikSnap.es
          </p>
        </div>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Enviar email de confirmación al usuario
    const confirmationMailOptions = {
      from: process.env.CONTACT_EMAIL,
      to: email, // Email del usuario
      subject: "Gracias por contactar a TikSnap 🎉",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación de Contacto - TikSnap</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(254, 44, 85, 0.15);">
                  
                  <!-- Header con gradiente -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #FE2C55 0%, #FF1744 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                        Tik<span style="color: #ffffff; opacity: 0.95;">Snap</span>
                      </h1>
                      <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; letter-spacing: 0.5px;">
                        DESCARGADOR DE TIKTOK
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Contenido principal -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="text-align: center; margin-bottom: 30px;">
                        <div style="display: inline-block; background: rgba(254, 44, 85, 0.1); border: 2px solid #FE2C55; border-radius: 50%; width: 80px; height: 80px; line-height: 76px; font-size: 40px; margin-bottom: 20px;">
                          ✓
                        </div>
                      </div>
                      
                      <h2 style="margin: 0 0 20px 0; color: #ffffff; font-size: 24px; font-weight: 600; text-align: center;">
                        ¡Gracias por contactarnos!
                      </h2>
                      
                      <p style="margin: 0 0 20px 0; color: #d1d5db; font-size: 16px; line-height: 1.6; text-align: center;">
                        Hola <strong style="color: #ffffff;">${name}</strong>,
                      </p>
                      
                      <p style="margin: 0 0 25px 0; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                        Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y nos pondremos en contacto contigo lo antes posible.
                      </p>
                      
                      <!-- Detalles del mensaje -->
                      <div style="background: rgba(255, 255, 255, 0.03); border-left: 4px solid #FE2C55; border-radius: 8px; padding: 20px; margin: 25px 0;">
                        <p style="margin: 0 0 12px 0; color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                          Resumen de tu mensaje
                        </p>
                        <p style="margin: 0 0 8px 0; color: #d1d5db; font-size: 14px;">
                          <strong style="color: #ffffff;">Asunto:</strong> ${subject}
                        </p>
                        <p style="margin: 0; color: #9ca3af; font-size: 13px;">
                          Fecha: ${new Date().toLocaleDateString('es-ES', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      
                      <!-- Tiempo de respuesta estimado -->
                      <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 8px; padding: 16px; margin: 25px 0; text-align: center;">
                        <p style="margin: 0; color: #86efac; font-size: 14px;">
                          ⏱️ <strong>Tiempo de respuesta:</strong> 24-48 horas
                        </p>
                      </div>
                      
                      <!-- CTA Button -->
                      <div style="text-align: center; margin: 35px 0 25px 0;">
                        <a href="https://www.tiksnap.es" style="display: inline-block; background: linear-gradient(135deg, #FE2C55 0%, #FF1744 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 15px rgba(254, 44, 85, 0.3);">
                          Volver a TikSnap
                        </a>
                      </div>
                      
                      <!-- Enlaces útiles -->
                      <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 25px; margin-top: 30px;">
                        <p style="margin: 0 0 15px 0; color: #9ca3af; font-size: 14px; text-align: center;">
                          Mientras tanto, también puedes:
                        </p>
                        <table role="presentation" style="width: 100%;">
                          <tr>
                            <td style="text-align: center; padding: 8px;">
                              <a href="https://www.tiksnap.es/#faq" style="color: #FE2C55; text-decoration: none; font-size: 13px; font-weight: 500;">
                                📚 Ver FAQ
                              </a>
                            </td>
                            <td style="text-align: center; padding: 8px;">
                              <a href="https://www.tiksnap.es/blog" style="color: #FE2C55; text-decoration: none; font-size: 13px; font-weight: 500;">
                                📝 Leer Blog
                              </a>
                            </td>
                            <td style="text-align: center; padding: 8px;">
                              <a href="https://www.tiksnap.es/como-usar" style="color: #FE2C55; text-decoration: none; font-size: 13px; font-weight: 500;">
                                🎯 Guías
                              </a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background: #000000; padding: 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                      <p style="margin: 0 0 12px 0; color: #ffffff; font-size: 18px; font-weight: 600;">
                        Tik<span style="color: #FE2C55;">Snap</span>
                      </p>
                      <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 12px;">
                        Descarga videos de TikTok sin marca de agua
                      </p>
                      <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 12px;">
                        <a href="https://www.tiksnap.es" style="color: #FE2C55; text-decoration: none;">www.tiksnap.es</a>
                      </p>
                      <p style="margin: 0; color: #6b7280; font-size: 11px;">
                        © ${new Date().getFullYear()} TikSnap. Todos los derechos reservados.
                      </p>
                      
                      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                        <p style="margin: 0; color: #6b7280; font-size: 10px; line-height: 1.5;">
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
