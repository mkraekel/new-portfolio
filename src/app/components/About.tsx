"use client"
import { motion } from "framer-motion";
import { Button, Card, CardHeader, CardBody, Checkbox } from "@nextui-org/react";
import ScrollLink from "@/app/components/ScrollLink";

export default function AboutMe() {
    const slideInBottom = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    const skillsData = [
        {
            category: "Full Stack Development",
            skills: [
                { name: "HTML", level: "Advanced" },
                { name: "CSS", level: "Advanced" },
                { name: "Typescript", level: "Advanced" },
                { name: "Tailwind CSS", level: "Intermediate" },
                { name: "Node.js", level: "Advanced" },
                { name: "Bootstrap", level: "Intermediate" },
                { name: "Git", level: "Advanced" },
                { name: "React", level: "Advanced" },
                { name: "Express JS", level: "Advanced" },
                { name: "Firebase", level: "Advanced" },
                { name: "SQL", level: "Advanced" },
            ],
        },
    ];
    return (
        <motion.div className="container-fluid mx-auto px-6 md:px-20 dark:bg-default-100/50 py-12 pt-20" id="about">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* About Me Section mit Slide-in und Zoom von links */}
                {/* About Me Section */}
                <motion.div
                    className="text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeInLeft}
                >
                    <h3 className="text-4xl font-bold mb-6">Know About Me!</h3>
                    <p className="text-lg text-gray-300">
                        Hey! I&apos;m Mathis, a <span className="font-bold text-primary-500">dedicated software engineer</span> and a student working toward my Abitur. I currently work at Seibert Group, where I apply my skills in software development while learning something new every day.
                    </p>
                    <p className="mt-6 text-lg text-gray-300">
                        My experience spans working with <strong>Node.js, TypeScript, React, Next.js</strong>, and more. At work, I&apos;ve gained deep insights into systems like <strong>Atlassian tools (Jira, Confluence, Bitbucket)</strong>, Google Cloud, Firebase, and BigQuery. I&apos;ve also built tools like a Telegram bot for managing work hours using the Telegram API.
                    </p>
                    <p className="mt-6 text-lg text-gray-300">
                        Whether it&apos;s building scalable backend systems or crafting smooth frontend user interfaces, I am focused on delivering impactful, efficient, and high-quality solutions.
                    </p>
                    <ScrollLink id="contact"><Button size="lg" className="font-bold mt-8" color="primary" variant="solid">
                        Contact
                    </Button>
                    </ScrollLink>
                </motion.div>

                {/* Skills Section mit Slide-in und Zoom von rechts */}
                <motion.div
                    className="text-white flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    variants={fadeInRight}
                >
                    <h3 className="text-4xl font-bold mb-6 text-left">My Skills</h3>

                    <div className="grid gap-8 w-full max-w-4xl">
                        {skillsData.map((category, index) => (
                            <Card key={index} className="p-6 rounded-lg shadow-md bg-back md:w-8/12 mx-auto">
                                <CardHeader>
                                    <h4 className="text-2xl font-semibold">{category.category}</h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {category.skills.map((skill, i) => (
                                            <div key={i}

                                                 className="flex flex-col items-start rounded-md shadow-sm">
                                                <Checkbox defaultSelected color="secondary" radius="full"></Checkbox>
                                                <span className="text-lg font-medium">{skill.name}</span>
                                                <span className="text-sm text-gray-500">{skill.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
