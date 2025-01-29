import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Services() {
    const cardVariantsLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };
    const cardVariantsRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const services = [
        {
            title: "Web Development",
            description: "I build modern, responsive websites using technologies like React, Next.js, TailwindCSS, and TypeScript. Whether you're looking for a personal website or a business solution, I can help bring your ideas to life.",
            technologies: ["React", "Next.js", "TailwindCSS", "TypeScript", "HTML", "CSS"],
            github: "https://github.com/mkraekel/web-development",
            weblink: "https://webdev.mathiskraekel.de",
            cardVariant: cardVariantsLeft,
            flex: "justify-start"
        },
        {
            title: "Web Apps",
            description: "I offer development of web apps. This inlcudes backend, frontend and database work and a improved UI",
            technologies: ["Node.js", "Express", "TypeScript", "REST", "GraphQL"],
            github: "https://github.com/mkraekel/api-development",
            weblink: "https://api.mathiskraekel.de",
            cardVariant: cardVariantsRight,
            flex: "justify-end",
        },
        {
            title: "Database Management",
            description: "With experience in MySQL and Firebase, I can help design, manage, and optimize databases for your projects, ensuring high performance and security.",
            technologies: ["MySQL", "Firebase", "Prisma", "SQL", "NoSQL"],
            github: "https://github.com/mkraekel/database-management",
            weblink: "https://database.mathiskraekel.de",
            cardVariant: cardVariantsLeft,
            flex: "justify-start",
        },
    ];

    return (
        <section id="services">
            <div className="container mx-auto px-10 py-16">
                <div className="text-center mb-12">
                    <h1 className="font-bold text-4xl text-foreground">My Services</h1>
                </div>
                <div className="flex flex-col gap-12">
                    {services.map((service) => {
                        return (
                            <motion.div
                                key={service.title}
                                className={`flex ${service.flex} min-h-full`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                variants={service.cardVariant}
                            >
                                <Card className="max-w-5xl bg-white text-primary rounded-lg shadow-xl overflow-hidden min-h-full">
                                    <CardBody className="p-0">
                                        <div className="flex flex-col md:flex-row min-h-full">
                                            {/* Content Section */}
                                            <div className="flex-1 p-8 pb-0 ">
                                                <h4 className="font-bold text-2xl mb-2">
                                                    {service.title}
                                                </h4>
                                                <p className="text-gray-400 mb-6">
                                                    {service.description}
                                                </p>
                                                {/*<ul className="flex flex-wrap gap-2 mb-6">*/}
                                                {/*    {service.technologies.map((tech, index) => (*/}
                                                {/*        <li key={index} className="bg-gray-700 text-center p-2 rounded-lg shadow-md">*/}
                                                {/*            {tech}*/}
                                                {/*        </li>*/}
                                                {/*    ))}*/}
                                                {/*</ul>*/}
                                            </div>
                                            {/*<div className="flex flex-row items-end md:flex-col p-8 pt-0 md:pt-8 justify-between">*/}
                                            {/*    <a href={service.github} target="_blank" rel="noopener noreferrer">*/}
                                            {/*        <GithubIcon className="text-2xl hover:text-primary transition-colors" />*/}
                                            {/*    </a>*/}
                                            {/*    <a href={service.weblink} target="_blank" rel="noopener noreferrer">*/}
                                            {/*        <LinkIcon className="text-3xl hover:text-primary transition-colors" />*/}
                                            {/*    </a>*/}
                                            {/*</div>*/}
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
