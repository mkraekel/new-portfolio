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
    return (
        <>
        <div className="container mx-auto " id="projects">
            <div className="flex justify-center items-center my-16">
                <h1 className="font-bold text-3xl">My Projects</h1>
            </div>
            {/* Erste Karte von links */}
            <motion.div
                className="flex justify-start mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                variants={cardVariantsLeft}
            >
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1110px] mb-20"
                    shadow="sm"
                >
                    <CardBody className="p-0">
                        <a target="_blank" href="https://github.com/mkraekel/einkaufsliste">
                            <GithubIcon className="absolute right-4 bottom-4"></GithubIcon>
                        </a>
                        <div className="flex flex-col gap-4 md:flex-row  ">
                            {/* Linke Seite mit Bild */}
                            <div className="flex-1 relative md:w-1/2"> {/* Flex-1 für flexible Breite */}
                                <Image
                                    alt="Einkaufsliste"
                                    className="object-cover rounded-none"
                                    height={300}
                                    shadow="md"
                                    src="/Einkaufsliste.png"
                                    width="100%"
                                />
                            </div>
                            {/* Rechte Seite mit Beschreibung, GitHub-Link und Technologien */}
                            <div className="flex flex-1  flex-col md:w-1/2 p-2">
                                <h4 className="font-extrabold text-xl">Einkaufsliste</h4>
                                <p className="text-gray-300 w-9/12 mt-2 mb-10">This project is a web-based music
                                    player that showcases
                                    various frontend technologies and design principles. It includes a custom audio
                                    player, UI design, and responsive features.</p>
                                <h4 className="font-bold mt-10">Technologies Used</h4>
                                <ul className="flex-wrap flex gap-2 ">
                                    <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">PHP</li>
                                    <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">MySQL</li>
                                    <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">JQuery</li>
                                    <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">JS</li>
                                    <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">HTML</li>
                                    <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">CSS</li>
                                </ul>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
            <motion.div
                className="flex justify-end mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                variants={cardVariantsRight}
            ><Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1110px] mb-20"
                shadow="sm"
            >
                <CardBody className="p-0">
                    <a target="_blank" href="https://cute-babka-1968ed.netlify.app/"><LinkIcon
                        className="absolute top-4 text-3xl right-4"></LinkIcon></a>
                    <a target="_blank" href="https://github.com/mkraekel/silent_gen"><GithubIcon
                        className="absolute bottom-4 right-4"></GithubIcon></a>
                    <div className="flex flex-col gap-4 md:flex-row  ">
                        {/* Linke Seite mit Bild */}
                        <div className="flex-1 relative md:w-1/2"> {/* Flex-1 für flexible Breite */}
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={300}
                                shadow="md"
                                src="/silentgen-front.png"
                                width="100%"
                            />
                        </div>
                        {/* Rechte Seite mit Beschreibung, GitHub-Link und Technologien */}
                        <div className="flex flex-1  flex-col md:w-1/2 p-2">
                            <h4 className="font-extrabold text-xl">SILENT GEN</h4>
                            <p className="text-gray-300 w-9/12 mt-2 mb-10">This project is a web-based music
                                player that showcases
                                various frontend technologies and design principles. It includes a custom audio
                                player, UI design, and responsive features.</p>
                            <h4 className="font-bold mt-10">Technologies Used</h4>
                            <ul className="flex-wrap flex gap-2 ">
                                <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">React</li>
                                <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">NextUI</li>
                                <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">Tailwind
                                    CSS
                                </li>
                                <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">JavaScript</li>
                            </ul>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </motion.div>
            <motion.div
                className="flex justify-start mb-8"
                initial="hidden"
                whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    variants={cardVariantsLeft}
                >
                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1110px] mb-20"
                        shadow="sm"
                    >
                        <CardBody className="p-0">
                            <a href="https://github.com/mkraekel/silent_gen"><GithubIcon
                                className="absolute top-4 right-4"></GithubIcon></a>

                            <div className="flex flex-col gap-4 md:flex-row  ">
                                {/* Linke Seite mit Bild */}
                                <div className="flex-1 relative md:w-1/2"> {/* Flex-1 für flexible Breite */}
                                    <Image
                                        alt="Album cover"
                                        className="object-cover"
                                        height={300}
                                        shadow="md"
                                        src="https://nextui.org/images/album-cover.png"
                                        width="100%"
                                    />
                                </div>
                                {/* Rechte Seite mit Beschreibung, GitHub-Link und Technologien */}
                                <div className="flex flex-1  flex-col md:w-1/2 p-2">
                                    <h4 className="font-extrabold text-xl">Project Description</h4>
                                    <p className="text-gray-300 w-9/12 mt-2 mb-10">This project is a web-based music
                                        player that showcases
                                        various frontend technologies and design principles. It includes a custom audio
                                        player, UI design, and responsive features.</p>
                                    <h4 className="font-bold mt-10">Technologies Used</h4>
                                    <ul className="flex-wrap flex gap-2 ">
                                        <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">React</li>
                                        <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">NextUI</li>
                                        <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">Tailwind
                                            CSS
                                        </li>
                                        <li className="bg-gray-700 text-center p-3 py-2 rounded-lg shadow-lg">JavaScript</li>
                                    </ul>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
            </motion.div>
        </div>
        </>
    );
}
