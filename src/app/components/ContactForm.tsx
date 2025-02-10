"use client"
import React, {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Mail, Send} from "lucide-react";
import sendEmailFromContactForm from "@/app/actions/contact";

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name") || "",
            email: formData.get("email")|| "",
            message: formData.get("message") || "",
        };
        await sendEmailFromContactForm(data)
        setStatus('Message sent successfully!');
        e.target.reset();
    };

    return (
        <section id="contact" className="py-24 bg-muted/50">
            <div className="container md:px-32 mx-auto">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie mich</h2>
                    <p className="text-muted-foreground mb-8">
                        Haben Sie ein Projekt im Sinn oder möchten Sie zusammenarbeiten? Ich freue mich von Ihnen zu hören.
                    </p>

                    <Card className="bg-[#dbe9f9] ">
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-3">
                                    <Input
                                        name="name"
                                        placeholder="Ihr Name"
                                        required
                                        className={"rounded-sm border-primary p-2"}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Ihre E-Mail"
                                        required
                                        className={"rounded-sm border-primary p-2"}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        name="message"
                                        placeholder="Ihre Nachricht"
                                        className="min-h-[150px] text-black rounded-sm border-primary p-2"
                                        required

                                    />
                                </div>
                                {status && (
                                    <p className="text-sm text-primary">{status}</p>
                                )}
                                {status !== "Message sent successfully!" && (<Button type="submit" className="w-full">
                                    <Send className="w-4 h-4 mr-2" /> Nachricht senden
                                </Button>)}
                            </form>
                        </CardContent>
                    </Card>

                    <div className="mt-12 flex justify-center gap-8">
                        <a
                            href="mailto:mathis@kraekel.com"
                            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            mathis@kraekel.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
