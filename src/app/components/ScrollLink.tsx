import { ReactNode } from "react";

interface ScrollLinkProps {
    id: string;
    children: ReactNode;
    color: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ id, children, color }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <a
            href={`#${id}`}
            onClick={handleClick}
            className={`px-4 py-3 bg-primary-200 flex rounded-lg ${color}`}
        >
            {children}
        </a>
    );
};

export default ScrollLink;
