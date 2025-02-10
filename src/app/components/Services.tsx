import {AppWindow, Database, Github, Globe, Link2} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React from "react";

export default function Services() {
    const services = [
        {
            title: "Web Development",
            description: "Ich entwickle moderne, responsive Websites mit den neuesten Technologien. Von persönlichen Portfolios bis hin zu komplexen Business-Lösungen - gemeinsam bringen wir Ihre Vision zum Leben.",
            technologies: ["React", "Next.js", "TailwindCSS", "TypeScript", "HTML", "CSS"],
            github: "https://github.com/mkraekel/web-development",
            weblink: "https://webdev.mathiskraekel.de",
            icon: <Globe />
        },
        {
            title: "Web Apps",
            description: "Full-Stack Entwicklung moderner Web-Anwendungen mit Fokus auf Benutzerfreundlichkeit, Performance und Skalierbarkeit. Von der Datenbankarchitektur bis zum Frontend-Design.",
            technologies: ["Node.js", "Express", "TypeScript", "REST", "GraphQL"],
            github: "https://github.com/mkraekel/api-development",
            weblink: "https://api.mathiskraekel.de",
            icon: <AppWindow />
        },
        {
            title: "Database Management",
            description: "Professionelles Datenbank-Design und -Optimierung für höchste Performance und Sicherheit. Expertise in SQL und NoSQL Lösungen für verschiedenste Anwendungsfälle.",
            technologies: ["MySQL", "Firebase", "Prisma", "SQL", "NoSQL"],
            github: "https://github.com/mkraekel/database-management",
            weblink: "https://database.mathiskraekel.de",
            icon: <Database  />
        }
    ];

    return (
        <section id="services" className="bg-white py-24">
            <div className="container md:px-32 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Meine Services
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Professionelle Lösungen für Ihre digitalen Herausforderungen
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className="group relative overflow-hidden transition-all duration-500 bg-gray-50 shadow-sm hover:-translate-y-3 hover:bg-[#b9d4f3] border-none"
                        >
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-4xl text-gray-700 transform transition-transform duration-500 group-hover:scale-110">
                                        {service.icon}
                                    </span>
                                </div>
                                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                                <CardDescription className="text-gray-600 mt-2">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors duration-300"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                        {/*<a*/}
                                        {/*    href={service.github}*/}
                                        {/*    target="_blank"*/}
                                        {/*    rel="noopener noreferrer"*/}
                                        {/*    className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"*/}
                                        {/*>*/}
                                        {/*    <Github className="w-5 h-5" />*/}
                                        {/*</a>*/}
                                        {/*<a*/}
                                        {/*    href={service.weblink}*/}
                                        {/*    target="_blank"*/}
                                        {/*    rel="noopener noreferrer"*/}
                                        {/*    className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"*/}
                                        {/*>*/}
                                        {/*    <Link2 className="w-5 h-5" />*/}
                                        {/*</a>*/}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
