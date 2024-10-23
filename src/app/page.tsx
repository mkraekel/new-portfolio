"use client";
import { Button } from '@nextui-org/react';
import Navigation from "@/app/components/Navbar";
import AboutMe from "@/app/components/About";
import Projects from "@/app/components/Projects";
import ScrollLink from "@/app/components/ScrollLink";
import { motion } from "framer-motion";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

export default function Home() {
    // Define animation effects
    const textVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const buttonVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
    };

    return (
        <>
            <Navigation />
            <div className="container mx-auto pb-0 h-screen flex flex-col pt-20 items-center">
                <div className="flex flex-col justify-center items-center text-center gap-8 mb-20 mt-20">
                    {/* Text animation */}
                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        animate="visible"
                        variants={textVariant}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                            HEY, I&apos;M <span className="text-blue-500">MATHIS</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-400 max-w-xl">
                            A skilled developer focused on building impactful projects and creating beautiful, functional web experiences.
                        </p>
                    </motion.div>
                </div>
                {/* Button animation */}
                <motion.div
                    className="mt-10"
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariant}
                >
                    <Button size={"lg"} className="font-bold" color="primary" >
                        <ScrollLink id="about">Learn More</ScrollLink>
                    </Button>
                </motion.div>
            </div>
            <AboutMe />
            <Projects />
            <ContactForm />
            <Footer />
        </>
    );
}
