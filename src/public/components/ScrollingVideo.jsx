import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollingVideo = ({ src }) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Scale 0.8 se 1.2 tak jayega scroll ke saath
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

    return (
        <section ref={containerRef} className="relative w-full flex justify-center py-20">
            <motion.div
                style={{ scale, opacity }}
                className="relative w-full max-w-4xl px-4"
            >
                {/* Corner Graphics (Orange lines from your screenshot) */}
                <div className="absolute -top-6 -left-2 w-32 h-32 border-t-2 border-l-2 border-orange-500/40 rounded-tl-3xl pointer-events-none"></div>
                <div className="absolute -bottom-6 -right-2 w-32 h-32 border-b-2 border-r-2 border-blue-500/40 rounded-br-3xl pointer-events-none"></div>

                <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)] bg-black border border-white/10">
                    <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline>
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
            </motion.div>
        </section>
    );
};

export default ScrollingVideo;