import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const InnovationSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Isko 0.7 se shuru karke exact 1 tak le jayenge (Full size)
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#020202] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* --- BACKGROUND patrones --- */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center pointer-events-none">
        <img
          src="/Group 1000001869.png"
          alt="Background Circuit"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-iceland text-4xl md:text-5xl text-white tracking-wide">
            Watch{" "}
            <span className="text-[#0066FF] relative inline-block">
              Innovation
              <span className="absolute bottom-0 left-0 w-full h-[3px]">
                <img
                  src="/Group5.svg"
                  alt="Underline"
                  className="w-full object-contain"
                />
              </span>
            </span>
            {/* 👇 only mobile line break */}
            <br className="block md:hidden" />
            in Motion
          </h2>
        </div>

        {/* --- ANIMATED VIDEO CONTAINER --- */}
        <motion.div
          style={{ scale, opacity }}
          // w-full aur px-[10px] se exact 10px ka gap maintain hoga dono side
          className="relative w-full px-[20px] flex justify-center"
        >
          {/* UI Frame Guidelines */}
          <div className="absolute inset-0 mx-[10px] border border-dashed border-blue-500/10 pointer-events-none"></div>

          {/* The Video Box */}
          <div className="relative w-full overflow-hidden shadow-[0_0_80px_rgba(0,102,255,0.25)] border border-white/10 bg-black">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video/IMG_4645.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020202] to-transparent z-10"></div>
    </section>
  );
};

export default InnovationSection;
