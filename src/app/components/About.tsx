import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Code2, Bot, Database, Globe } from "lucide-react";
import React from "react";

export default function About() {
    const skills = [
        {
            category: "Frontend",
            items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
            icon: <Code2 className="w-4 h-4 text-[#3982dc]" />
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "REST APIs", "GraphQL"],
            icon: <Bot className="w-4 h-4 text-[#3982dc]" />
        },
        {
            category: "Database & Cloud",
            items: ["Firebase", "BigQuery", "Google Cloud", "MySQL"],
            icon: <Database className="w-4 h-4 text-[#3982dc]" />
        },
        {
            category: "Tools & Others",
            items: ["Git", "Jira", "Confluence", "Bitbucket"],
            icon: <Globe className="w-4 h-4 text-[#3982dc]" />
        }
    ];

    return (
        <section id="about" className="py-24 bg-[#dbe9f9]">
            <div className="container md:px-32 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 text-[#1f5cab]">Über mich</h2>
                            <div className="h-1 w-20 bg-[#75aae7] rounded-full" />
                        </div>

                        <div className="space-y-4 text-[#3982dc]">
                            <p className="text-lg">
                                Hey! Ich bin Mathis, ein <span className="text-[#1f5cab] font-medium">engagierter Softwareentwickler</span> und
                                Schüler auf dem Weg zum Abitur. Derzeit arbeite ich bei der Seibert Group, wo ich
                                meine Fähigkeiten in der Softwareentwicklung kontinuierlich erweitere.
                            </p>
                            <p className="text-lg">
                                Meine Expertise umfasst die Arbeit mit <span className="text-[#1f5cab] font-medium">Node.js, TypeScript,
                                React und Next.js</span>. Ich habe wertvolle Erfahrungen mit Atlassian-Tools, Google Cloud,
                                Firebase und BigQuery gesammelt.
                            </p>
                            <p className="text-lg">
                                Ob bei der Entwicklung skalierbarer Backend-Systeme oder der Gestaltung intuitiver Benutzeroberflächen -
                                ich konzentriere mich darauf, qualitativ hochwertige und effiziente Lösungen zu liefern, die einen echten Mehrwert schaffen.
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button
                                variant="outline"
                                asChild
                                className="bg-[#1f5cab] hover:bg-[#3982dc] text-white px-4 h-10"
                            >
                                <a
                                    href="https://github.com/mkraekel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <Github className="w-4 h-4 mr-2" /> GitHub
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                asChild
                                className="bg-[#1f5cab] hover:bg-[#3982dc] text-white px-8 h-10"

                            >
                                <a
                                    href="https://www.linkedin.com/in/mathis-kräkel-b286b325a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center"
                                >
                                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((category, index) => (
                            <Card key={index} className="bg-white border-2 border-[#b9d4f3] hover:border-[#3982dc] transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        {category.icon}
                                        <h3 className="font-semibold text-[#1f5cab]">
                                            {category.category}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="secondary"
                                                className="bg-[#dbe9f9] hover:bg-[#b9d4f3] text-[#1f5cab]"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
