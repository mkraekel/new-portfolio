import {Github, Linkedin, Mail} from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Link from "next/link";

export default function Footer () {

    const ImpressumContent = () => (
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>Impressum</DialogTitle>
            </DialogHeader>
            <DialogDescription>
                <h3 className="text-lg font-semibold mb-4">Angaben gemäß § 5 TMG</h3>
                <p className="mb-4">
                    Mathis Kräkel
                    <br />
                    Softwareentwickler
                    <br />
                    [Straße]
                    <br />
                    [PLZ Ort]
                </p>

                <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                <p className="mb-4">
                    E-Mail: mathis@kraekel.com
                </p>

                <h3 className="text-lg font-semibold mb-4">Haftungsausschluss</h3>
                <p className="mb-4">
                    Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>
            </DialogDescription>
        </DialogContent>
    );

    const DatenschutzContent = () => (
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>Datenschutzerklärung</DialogTitle>
            </DialogHeader>
            <DialogDescription>
                <h3 className="text-lg font-semibold mb-4">1. Datenschutz auf einen Blick</h3>
                <p className="mb-4">
                    Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf dieser Website auf.
                </p>

                <h3 className="text-lg font-semibold mb-4">2. Datenerfassung auf dieser Website</h3>
                <p className="mb-4">
                    Diese Website nutzt keine Tracking-Cookies oder sammelt personenbezogene Daten,
                    es sei denn, Sie stellen diese freiwillig über das Kontaktformular zur Verfügung.
                </p>

                <h3 className="text-lg font-semibold mb-4">3. Kontaktformular</h3>
                <p className="mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                    aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                    zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
            </DialogDescription>
        </DialogContent>
    );

    return (
        <footer className="py-12 border-t">
            <div className="container md:px-32 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-lg font-medium mb-4">Mathis Kräkel</h3>
                        <p className="text-muted-foreground">
                            Softwareentwickler mit Fokus auf innovative digitale Lösungen.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Schnelle Links</h3>
                        <nav className="space-y-2">
                            {[
                                { label: 'Start', link: 'home' },
                                { label: 'Über mich', link: 'about' },
                                { label: 'Leistungen', link: 'services' },
                                { label: 'Projekte', link: 'projects' },
                                { label: 'Kontakt', link: 'contact' }
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={`#${item.link}`}
                                    className="block text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Verbinden</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/mkraekel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mathis-kräkel-b286b325a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:mathis@kraekel.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Mathis Kräkel. Alle Rechte vorbehalten.</p>
                    <div className="flex justify-center gap-4">
                            <Link className="hover:text-primary transition-colors" href={"/impressum"}>Impressum</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
