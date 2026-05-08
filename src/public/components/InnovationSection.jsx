import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InnovationSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Isko 0.7 se shuru karke exact 1 tak le jayenge (Full size)
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const trigger = ScrollTrigger.create({
      trigger: video,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        video.muted = false;
        video.volume = 1;
      },
      onLeave: () => {
        video.muted = true;
      },
      onEnterBack: () => {
        video.muted = false;
        video.volume = 1;
      },
      onLeaveBack: () => {
        video.muted = true;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

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
          <h2 className="font-iceland text-4xl md:text-6xl text-white tracking-wide">
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
          className="relative w-full flex justify-center"
        >
          {/* The Video Box */}
          <div className="relative w-full overflow-hidden shadow-[0_0_80px_rgba(0,102,255,0.25)] border border-white/10 bg-black">
            <video
              ref={videoRef}
              className="w-full h-auto object-cover"
              autoPlay
              loop
              playsInline
              muted
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
