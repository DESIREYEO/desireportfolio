// Créez ce fichier dans : pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Vérifier que c'est bien une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, service, message } = req.body;

  // Validation des champs
  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  try {
    // Configuration de Nodemailer avec Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Votre email Gmail
        pass: process.env.EMAIL_PASSWORD // Mot de passe d'application
      }
    });

    // Déterminer le nom du service
    const serviceName = service === 'web' ? 'Développement Web' : 'Développement Mobile';

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'desireyeo348@gmail.com', // Votre email de réception
      subject: `🚀 Nouveau message de ${name} - ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #f97316 0%, #22c55e 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #ffffff;
              border: 2px solid #f0f0f0;
              border-top: none;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .info-box {
              background: #f9fafb;
              border-left: 4px solid #f97316;
              padding: 15px 20px;
              margin: 20px 0;
              border-radius: 5px;
            }
            .info-box p {
              margin: 8px 0;
            }
            .info-label {
              font-weight: bold;
              color: #f97316;
              display: inline-block;
              min-width: 80px;
            }
            .message-box {
              background: #ffffff;
              border: 2px solid #e5e7eb;
              padding: 20px;
              margin: 20px 0;
              border-radius: 8px;
              min-height: 100px;
            }
            .message-label {
              font-weight: bold;
              color: #374151;
              margin-bottom: 10px;
              display: block;
              font-size: 16px;
            }
            .message-text {
              color: #4b5563;
              line-height: 1.8;
            }
            .footer {
              text-align: center;
              color: #9ca3af;
              font-size: 12px;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
            }
            .badge {
              display: inline-block;
              background: #22c55e;
              color: white;
              padding: 5px 15px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: bold;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✉️ Nouveau Message Portfolio</h1>
            <div class="badge">${serviceName}</div>
          </div>
          
          <div class="content">
            <div class="info-box">
              <p><span class="info-label">Nom:</span> ${name}</p>
              <p><span class="info-label">Email:</span> <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></p>
              <p><span class="info-label">Service:</span> ${serviceName}</p>
            </div>
            
            <div class="message-box">
              <span class="message-label">💬 Message:</span>
              <p class="message-text">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #f97316 0%, #22c55e 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                📧 Répondre à ${name}
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio</p>
            <p>Date: ${new Date().toLocaleString('fr-FR', { 
              dateStyle: 'full', 
              timeStyle: 'short' 
            })}</p>
          </div>
        </body>
        </html>
      `,
      replyTo: email // Permet de répondre directement au client
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Réponse de succès
    return res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
    });
  }
}