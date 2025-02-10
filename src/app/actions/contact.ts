"use server"
import nodemailer from 'nodemailer';


export default async function sendEmailFromContactForm(formData: {
    name: FormDataEntryValue ;
    email: FormDataEntryValue ;
    message: FormDataEntryValue
}) {
        const { name, email, message } = formData
        // Nodemailer konfigurieren
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Deine E-Mail-Adresse
                pass: process.env.EMAIL_PASS, // Dein Passwort
            },
        });

        // E-Mail-Inhalt definieren
        const mailOptions:any = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Neue Kontaktanfrage von ${name.toString()}`,
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
            console.error('Fehler beim Senden der E-Mail:', error);
            return {
                ok: false,
                message: "Error sending the email" + error
            }
        }
}
