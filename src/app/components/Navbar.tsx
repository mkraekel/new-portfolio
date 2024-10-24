"use client";
import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    Link,
    Button
} from "@nextui-org/react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        // Check if sections exist
        if (sections.length === 0) {
            console.warn("No sections found");
            return;
        }

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("In view:", entry.target.id); // Check which section is in view
                    setActiveSection(entry.target.id); // Update activeSection based on id
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section); // Start observing each section
        });

        // Cleanup on unmount
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);


    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:text-primary",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}
            onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">Mathis Kräkel {activeSection}</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive={activeSection == "home"}>
                        <Link color="foreground" href="#home" >
                            Home
                        </Link>
                    </NavbarItem>
                <NavbarItem isActive={activeSection == "about"}>
                    <Link color="foreground" href="#about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeSection == "projects"}>
                    <Link color="foreground" href="#projects">
                        Projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#contact" variant="flat">
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
