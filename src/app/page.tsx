"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    ChevronUp,
} from 'lucide-react';
import Contact from "./components/ContactForm"
import Services from "./components/Services"
import Footer from "./components/Footer"
import About from "./components/About"
import Navigation from "@/app/components/Navbar";
import Testimonials from "./components/Testimonials";
import { motion } from 'framer-motion';
//
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-[#dbe9f9] border-2 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute w-48 h-48 bg-[#b9d4f3] rounded-full -top-24 -left-24
            md:-top-24 md:-left-24
            sm:w-36 sm:h-36
            xs:w-24 xs:h-24 xs:-top-12 xs:-left-12" />
                <div className="absolute w-64 h-64 bg-[#75aae7] rounded-full
            top-1/2 -right-32
            md:-right-32
            sm:w-48 sm:h-48 sm:-right-24
            xs:w-36 xs:h-36 xs:-right-16" />
                <div className="absolute w-32 h-32 bg-[#b9d4f3] rounded-full
            bottom-24 left-24
            md:bottom-24 md:left-24
            sm:w-24 sm:h-24 sm:bottom-16 sm:left-16
            xs:w-16 xs:h-16 xs:bottom-12 xs:left-8" />
            </div>

            {/* Content Container */}
            <motion.div className=" z-10 container text-center overflow-hidden">
                <motion.span
                    className="text-sm font-medium text-[#1f5cab] mb-4 block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    Softwareentwickler
                </motion.span>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1f5cab] mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Mathis Kräkel
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-[#3982dc] max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    Ein erfahrener Softwareentwickler, der elegante Lösungen entwickelt und beeindruckende digitale Erlebnisse schafft.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <Button
                        size="lg"
                        className="bg-[#1f5cab] hover:bg-[#3982dc] text-white px-8 h-12"
                        asChild
                    >
                        <a href="#about">Erfahre mehr</a>
                    </Button>

                    {/*<Button*/}
                    {/*    size="lg"*/}
                    {/*    variant="outline"*/}
                    {/*    className="border-2 border-[#75aae7] hover:border-[#3982dc] hover:bg-[#b9d4f3] h-12 px-8 text-[#1f5cab]"*/}
                    {/*    asChild*/}
                    {/*>*/}
                    {/*    <a href="#contact">Kontakt</a>*/}
                    {/*</Button>*/}
                </motion.div>
            </motion.div>

        </section>
    );
};

const ScrollToTop = ({ isVisible }:{isVisible: boolean}) => {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            <ChevronUp className="w-6 h-6" />
        </button>
    );
};

// Main App Component
export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation isScrolled={isScrolled}/>
            <Hero/>
            <About/>
            <Services/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            <ScrollToTop isVisible={showScrollTop}/>
        </div>
    );
}
