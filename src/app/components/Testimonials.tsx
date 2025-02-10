import {motion} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import {Quote} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import React from "react";

export default function Testimonials () {
    const testimonials = [
        {
            name: "Chrisbmental",
            position: "Kunde",
            company: "Fiverr",
            content: "Perfekte Arbeit. Genauso stelle ich mir hervorragende Arbeit vor!",
            tags: ["React", "Node.js", "Next.js", "Express.js", "MySQL",],
        },
        {
            name: "Ehrich Paulsen",
            position: "Kunde",
            company: "",
            content: "Die Zusammenarbeit mit Mathis war eine sehr positive Erfahrung. Eine saubere, effiziente Lösung.",
            tags: ["Next.js", "React", "Node.js", "Mantine UI"]
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-36 bg-[#dbe9f9]">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                        Kundenstimmen
                    </h2>
                    <p className="text-blue-400 max-w-2xl mx-auto">
                        Was meine Kunden über die Zusammenarbeit sagen
                    </p>
                </div>

                <motion.div
                    className="max-w-3xl mx-auto space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="w-full"
                        >
                            <Card
                                className={`group relative bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 border-none
                                ${index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'}`}
                            >
                                <CardContent className="p-6">
                                    <div className="relative">
                                        <Quote className="absolute -left-8 top-0 w-6 h-6 text-gray-300" />

                                        <div className="mb-6">
                                            <p className="text-gray-700 italic ml-4">
                                                "{testimonial.content}"
                                            </p>
                                        </div>

                                        <div className="flex items-center md:justify-between flex-col md:flex-row border-t border-gray-200 pt-4 gap-1">
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-sm text-gray-600 pb-3 md:pb-0">
                                                    {testimonial.position}, {testimonial.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {testimonial.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="secondary"
                                                        className="text-white bg-primary hover:bg-primary-100"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-24 pb-5"
                >
                    {[
                        { label: "Projekte", value: "20+" },
                        { label: "Kunden", value: "10+" },
                        { label: "Jahre", value: "3+" },
                        { label: "Technologien", value: "10+" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center border-none shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-4 bg-white/80 border-none">
                                <h3 className="text-2xl font-bold text-[#3982DC]">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {stat.label}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
