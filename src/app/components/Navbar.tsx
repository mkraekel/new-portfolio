import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";

export default function Navigation ({ isScrolled }: { isScrolled: boolean })  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { title: 'Home', href: '#home' },
        { title: 'Über mich', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Kontakt', href: '#contact' }
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-[#dbe9f9]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center md:justify-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="group md:absolute md:left-10 left-4"
                    >
                        <span className="text-xl font-bold text-[#1f5cab]">
                          Mathis Kräkel
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors ${
                                    activeSection === item.href.slice(1)
                                        ? 'text-[#1f5cab]'
                                        : 'text-[#3982dc] hover:text-[#1f5cab]'
                                }
                                before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-px 
                                before:bg-[#1f5cab] before:transition-all before:duration-300
                                hover:before:w-full
                                ${activeSection === item.href.slice(1) ? 'before:w-full' : ''}
                                `}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* Theme Switcher and Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-[#3982dc] hover:text-[#1f5cab] hover:bg-[#b9d4f3]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-[#dbe9f9]/95 backdrop-blur-lg border-b border-[#b9d4f3]">
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className={`text-sm transition-colors ${
                                        activeSection === item.href.slice(1)
                                            ? 'text-[#1f5cab] font-medium'
                                            : 'text-[#3982dc] hover:text-[#1f5cab]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
