"use client"
import Link from 'next/link';
import { ReactNode } from 'react';

interface ScrollLinkProps {
    id: string;
    children: ReactNode; // Use ReactNode for children to allow any valid React child
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ id, children }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Link href={`#${id}`} passHref>
            <div onClick={handleClick}>{children}</div>
        </Link>
    );
};

export default ScrollLink;
