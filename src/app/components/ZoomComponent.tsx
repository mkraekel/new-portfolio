// components/ZoomComponent.tsx
"use client"
import React, { ReactNode } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

interface ZoomComponentProps {
    children: ReactNode;
}

const ZoomComponent: React.FC<ZoomComponentProps> = ({ children }) => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div ref={ref} className={`element ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default ZoomComponent;
