"use client"
import { Card, CardBody, Image } from "@nextui-org/react";
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
            title: "Einkaufsliste",
            description: "This project is a web-based music player that showcases various frontend technologies and design principles. It includes a custom audio player, UI design and responsive features.",
            technologies: ["PHP", "MySQL", "JQuery", "JS", "HTML", "CSS"],
            weblink: "",
            github: "https://github.com/mkraekel/einkaufsliste",
            cardVariant: cardVariantsLeft,
            flex: "justify-start"
        },
        {
            title: "SILENT-GEN",
            description: "This project is a web-based music player that showcases various frontend technologies and design principles. It includes a custom audio player, UI design and responsive features.",
            technologies: ["React", "NextUI", "TailwindCSS", "TS", "HTML", "CSS", "Express", "NodeJS"],
            weblink: "",
            github: "https://github.com/mkraekel/silent_gen",
            cardVariant: cardVariantsRight,
            flex: "justify-end",
        }
    ]
    return (
        <div className="container mx-auto px-4 py-16 " id="projects">
            <div className="text-center mb-12">
                <h1 className="font-bold text-4xl text-white">My Projects</h1>
            </div>
            <div className="flex flex-col gap-12">
                {/* Project Card */}
                {projects.map(project => {
                    return (
                        <motion.div
                            key={project.title}
                            className={"flex " + project.flex}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}
                            variants={project.cardVariant}
                        >
                            <Card className="max-w-5xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                                <CardBody className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image Section */}
                                        <div className="flex-1 h-full">
                                            <Image
                                                alt={project.title}
                                                className="object-cover w-full h-full"
                                                src={project.title + ".png"}
                                            />
                                        </div>
                                        {/* Content Section */}
                                        <div className="flex-1 p-8 pb-0 text-white">
                                            <h4 className="font-bold text-2xl mb-2">{project.title}</h4>
                                            <p className="text-gray-400 mb-6">
                                                {project.description}
                                            </p>
                                            <ul className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech, index) => (
                                                    <li
                                                        key={index}
                                                        className="bg-gray-700 text-center p-2 rounded-lg shadow-md"
                                                    >
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div
                                            className="flex flex-row items-end md:flex-col p-8 pt-0 md:pt-8 justify-between">
                                            <a href={project.github} target="_blank">
                                                <GithubIcon className="text-2xl hover:text-gray-400 transition-colors"/>
                                            </a>
                                            <a href={project.weblink} target="_blank">
                                                <LinkIcon
                                                    className="text-3xl"></LinkIcon></a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    );
}
