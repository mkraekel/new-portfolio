"use server"
import nodemailer from 'nodemailer';

interface EmailData {
    name: string;
    email: string;
    message: string;
}

export default async function sendEmailFromContactForm(formData: EmailData) {
        const { name, email, message }: EmailData = formData
        // Nodemailer konfigurieren
    console.log(process.env.EMAIL_PASS)
        const transporter = nodemailer.createTransport({
            auth: {
                user: process.env.EMAIL_USER, // Deine E-Mail-Adresse
                pass: process.env.EMAIL_PASS, // Dein Passwort
            },
        });

        // E-Mail-Inhalt definieren
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Neue Kontaktanfrage von ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            // E-Mail senden
            await transporter.sendMail(mailOptions);
            return {
                ok: true,
                message: "Email successfully sent"
            }
        } catch (error) {
            // console.error('Fehler beim Senden der E-Mail:', error);
            return {
                ok: false,
                message: "Error sending the email" + error
            }
        }
}
