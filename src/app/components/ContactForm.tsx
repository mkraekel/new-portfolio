"use client";
import { Input, Textarea, Button } from '@nextui-org/react';
import { motion } from "framer-motion";
import {FormEvent, useState} from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}
export default function ContactForm() {
    const [status, setStatus] = useState<string | null>(null);

    const formVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData: FormData = {
            name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
            email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
            message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
        };
        console.log(formData)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('E-Mail wurde erfolgreich gesendet!');
                e.currentTarget.reset(); // Formular zurücksetzen
            } else {
                setStatus('Fehler beim Senden der E-Mail');
            }
        } catch (error) {
            console.error('Fehler:', error);
            setStatus('Fehler beim Senden der E-Mail');
        }
    }


    return (
        <motion.div
            className="container mx-auto py-16 px-6 md:px-20 bg-background/60 dark:bg-default-100/50"
            initial="hidden"
            animate="visible"
            variants={formVariant}
        >
            <div className="text-center mb-12">
                <h2 className="text-5xl font-extrabold text-white">Contact Me</h2>
                <p className="mt-4 text-lg text-gray-400">
                    Feel free to reach out if you have any questions or want to work together.
                    {status?.toString()}
                </p>
            </div>
            <div className="max-w-2xl mx-auto bg-background p-8 rounded-lg shadow-lg text-white">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <Input
                            name="name"
                            fullWidth
                            label="Name"
                            variant="flat"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <Input
                            name="email"
                            label="Email"
                            type="email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <Textarea
                            name="message"
                            fullWidth
                            label="Message"
                            placeholder="Write your message"
                            minRows={4}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <Button type="submit" size="lg" color="secondary" variant="solid">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
