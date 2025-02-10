import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import GithubIcon from "@/app/icons/github";
import LinkIcon from "@/app/icons/link";

export default function Projects() {
    const cardVariantsLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };
    const cardVariantsRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const projects = [
        {
            title: "shopping-list",
            subtitle: "",
            description: "This project was my first big project. I wanted to create a Todo App with shared Lists and User System. I did this project right after my first Udemy course for HTML/PHP/CSS/Bootstrap",
            technologies: ["PHP", "MySQL", "JQuery", "JS", "HTML", "CSS", "Bootstrap"],
            weblink: "https://shoppinglist.mathiskraekel.de",
            github: "https://github.com/mkraekel/einkaufsliste",
            cardVariant: cardVariantsLeft,
            flex: "justify-start"
        },
        {
            title: "SILENT-GEN",
            subtitle: "unreleased",
            description: "I did this project for a customer. It's a fully working React System with backend API",
            technologies: ["React", "NextUI", "TailwindCSS", "TS", "HTML", "CSS", "Express", "NodeJS"],
            weblink: "https://cute-babka-1968ed.netlify.app/",
            github: "https://github.com/mkraekel/silent_gen",
            cardVariant: cardVariantsRight,
            flex: "justify-end",
        },
        {
            title: "Portfolio",
            subtitle: "",
            description: "This is one of my newest projects. It's a NextJS Application with React.",
            technologies: ["React", "NextJS", "NextUI", "TailwindCSS", "TS", "HTML", "CSS"],
            weblink: "https://portfolio-mathiskraekel.netlify.app/",
            github: "https://github.com/mkraekel/new-portfolio",
            cardVariant: cardVariantsLeft,
            flex: "justify-start",
        },
    ];

    return (
        <section id="projects">
            <div className="container mx-auto px-10 py-16">
                <div className="text-center mb-12">
                    <h1 className="font-bold text-4xl text-foreground">My Projects</h1>
                </div>
                <div className="flex flex-col gap-12">
                    {projects.map((project) => {
                        return (
                            <motion.div
                                key={project.title}
                                className={`flex ${project.flex} min-h-full`} // Sicherstellen, dass alle Boxen die gleiche Höhe haben
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                variants={project.cardVariant}
                            >
                                <Card className="max-w-5xl bg-background/60 dark:bg-default-900/50 rounded-lg shadow-xl overflow-hidden min-h-full">
                                    <CardBody className="p-0">
                                        <div className="flex flex-col md:flex-row min-h-full">
                                            {/* Image Section */}
                                            <div className="flex-1 h-full">
                                                <Image
                                                    alt={project.title}
                                                    className="object-cover w-full h-full m-4" // Einheitliche Margin (m-4) hinzugefügt
                                                    src={`${project.title}.png`}
                                                />
                                            </div>
                                            {/* Content Section */}
                                            <div className="flex-1 p-8 pb-0 text-white">
                                                <h4 className="font-bold text-2xl mb-2">
                                                    {project.title}
                                                    {project.subtitle && (
                                                        <span className="text-primary text-sm">{" " + project.subtitle}</span>
                                                    )}
                                                </h4>
                                                <p className="text-gray-400 mb-6">
                                                    {project.description}
                                                </p>
                                                <ul className="flex flex-wrap gap-2 mb-6">
                                                    {project.technologies.map((tech, index) => (
                                                        <li key={index} className="bg-gray-700 text-center p-2 rounded-lg shadow-md">
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-row items-end md:flex-col p-8 pt-0 md:pt-8 justify-between">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <GithubIcon className="text-2xl hover:text-primary transition-colors" />
                                                </a>
                                                <a href={project.weblink} target="_blank" rel="noopener noreferrer">
                                                    <LinkIcon className="text-3xl hover:text-primary transition-colors" />
                                                </a>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
