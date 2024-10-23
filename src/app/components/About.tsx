"use client"
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

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
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.div className="container-fluid mx-auto px-6 md:px-20 dark:bg-default-100/50 py-12" id="about">
            <motion.div className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={slideInBottom}>
                <h2 className="text-5xl font-extrabold text-white">ABOUT ME</h2>
                <p className="mt-4 text-lg text-gray-400">
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* About Me Section mit Slide-in und Zoom von links */}
                <motion.div
                    className="text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeInLeft}
                >
                    <h3 className="text-4xl font-bold mb-6">Know About me!</h3>
                    <p className="text-lg text-gray-300">
                        Greetings! I'm Mathis, a <span className="font-bold text-primary-500">
                            dedicated software engineer
                        </span> focused on building impactful projects. My expertise spans TypeScript, JavaScript, Node.js, React.js, and Next.js, encompassing both frontend and backend development.
                    </p>
                    <p className="mt-6 text-lg text-gray-300">
                        I have a proven track record of crafting high-quality digital solutions, from creating seamless user interfaces with React.js to architecting robust backend systems using Node.js. My focus is always on delivering clean, efficient, and scalable code that exceeds expectations.
                    </p>
                    <p className="mt-6 text-lg text-gray-300">
                        Throughout my career, I've worked on a variety of projects, each presenting unique challenges and opportunities for growth.
                    </p>
                    <Button size="lg" className="font-bold mt-8" color="primary" variant="solid">
                        Contact
                    </Button>
                </motion.div>

                {/* Skills Section mit Slide-in und Zoom von rechts */}
                <motion.div
                    className="text-white flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeInRight}
                >
                    <h3 className="text-4xl font-bold mb-6">My Skills</h3>
                    <div className="flex flex-col gap-10 w-full">
                        {/* Frameworks */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-3">Frameworks</h4>
                            <div className="flex flex-wrap gap-4">
                                {["Next.js", "React.js", "TailwindCSS"].map((skill) => (
                                    <div key={skill} className="bg-gray-800 text-white text-sm px-6 py-2 rounded-lg shadow-md">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Programming Languages */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-3">Programming Languages</h4>
                            <div className="flex flex-wrap gap-4">
                                {["JavaScript", "TypeScript", "HTML", "CSS"].map((skill) => (
                                    <div key={skill} className="bg-gray-800 text-white text-sm px-6 py-2 rounded-lg shadow-md">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Systems */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-3">Systems</h4>
                            <div className="flex flex-wrap gap-4">
                                {["Node.js", "MySQL"].map((skill) => (
                                    <div key={skill} className="bg-gray-800 text-white text-sm px-6 py-2 rounded-lg shadow-md">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-4">
                                {["Google Cloud", "Jira", "Confluence", "Bitbucket", "Trello"].map((skill) => (
                                    <div key={skill} className="bg-gray-800 text-white text-sm px-6 py-2 rounded-lg shadow-md">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
