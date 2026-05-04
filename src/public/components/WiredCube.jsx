// src/components/WiredCube.jsx
import React, { useMemo } from 'react';

// Common dummy text to reuse
const dummyTexts = [
    "SYSTEM INIT > CODE 102",
    "GRID > RENDER 1.0",
    "MATRIX: ACTIVE",
    "NODE 0.1 > DEV_ENV",
    "LINK > SECURE"
];

const WiredCube = ({
    size = "6rem", // CSS size (w-24/h-24)
    delay = "0s",
    floatDuration = "15s",
    spinDuration = "10s",
    opacity = "1",
    position = { top: "10%", left: "10%" }, // Default position
    customClass = "", // Add unique classes (like blur)
}) => {
    // UseMemo used to generate random text once per component instance
    const cubeFacesData = useMemo(() => {
        return Array(6).fill(null).map((_, i) => ({
            lines: i % 2 === 0,
            text: dummyTexts[i % dummyTexts.length],
        }));
    }, []);

    return (
        <div
            className={`absolute w-24 h-24 ${customClass} animate-float-cube pointer-events-none z-10`}
            style={{
                ...position,
                width: size,
                height: size,
                '--float-duration': floatDuration,
                '--spin-duration': spinDuration,
                '--delay': delay,
                opacity: opacity,
            }}
            data-cube-container
        >
            <div
                className="w-full h-full relative group animate-spin-cube"
                style={{
                    transformStyle: 'preserve-3d',
                    animationDelay: delay,
                    animationDuration: spinDuration
                }}
                data-cube
            >
                {cubeFacesData.map((data, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 wireframe-face group-hover:border-brand-cyan transition-colors duration-300`}
                        style={{
                            transform: `translateZ(1rem) rotateY(${index * 60}deg)`, // basic 3D placement logic
                        }}
                    >
                        {data.lines && <div className="wireframe-face-lines" />}
                        <span className="wireframe-face-text">{data.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WiredCube;