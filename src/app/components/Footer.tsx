"use client";
import { Link } from '@nextui-org/react';
import GithubIcon from "@/app/icons/github"
import {IconLinkedin} from "@/app/icons/linkedin"
export default function Footer() {
    return (
        <footer className="bg-background text-gray-400 py-10">
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Kontaktinformationen */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-lg font-bold text-white">Contact</h4>
                        <p className="mt-2">Email: <Link href="mailto:mathis@kraekel.com" color="primary">mathis@kraekel.com</Link></p>
                    </div>

                    {/* Navigation */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-lg font-bold text-white">Quick Links</h4>
                        <ul className="mt-2">
                            <li><Link href="/" color="primary">Home</Link></li>
                            <li><Link href="#about" color="primary">About Me</Link></li>
                            <li><Link href="#projects" color="primary">Projects</Link></li>
                            <li><Link href="#contact" color="primary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <Link href="https://github.com/mkraekel" target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="text-gray-400 hover:text-white" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mathis-kr%C3%A4kel-b286b325a/" target="_blank" rel="noopener noreferrer">
                            <IconLinkedin className="text-gray-400 hover:text-white text-5xl" />
                        </Link>
                        {/*<Link href="https://twitter.com/mathis" target="_blank" rel="noopener noreferrer">*/}
                        {/*    <FaTwitter size={24} className="text-gray-400 hover:text-white" />*/}
                        {/*</Link>*/}
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Mathis Krakel. All rights
                        reserved.</p>
                    <p className="mt-2"><Link href="/impressum" color="primary">Imprint</Link></p>
                </div>
            </div>
        </footer>
    );
}
