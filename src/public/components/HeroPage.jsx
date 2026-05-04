import React from "react";
import { motion } from "framer-motion";
import SolutionsMarquee from "./SolutionsMarquee";
import ScrollingVideo from "./ScrollingVideo";
import InnovationSection from "./InnovationSection";
import FeaturesSection from "./FeaturesSection";
import ChoosePrint from "./Chprint";
import IndustriesSection from "./IndustriesSection";
import Salution from "./Salution";
import FeaturesSection1 from "./FeaturesSection1";
import InsightsSection from "./InsightsSection";

import TransformSection from "./TransformSection";

const HeroPage = () => {
  // Animation Variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  //   },
  // };

  // const wordVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { type: "spring", damping: 12, stiffness: 100 },
  //   },
  // };

  // Animation Variants (Naya Blur aur Top-Left effect)
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Har word ke aane ka delay
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      x: -20,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  const text = "From Idea to Product. From Concept to Scale.";
  const words = text.split(" ");

  return (
    <>
      <div className="relative min-h-screen bg-[#020202] text-white font-sans overflow-hidden">
        {/* --- CUBES LAYER --- */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute  top-[5%] z-10 hidden xl:block pointer-events-none"
        >
          <img
            src="/cube.svg"
            alt="Cubes Left"
            className="w-full object-cover "
          />
        </motion.div>

        {/* --- NAVIGATION --- */}

        <nav className="relative z-50 flex items-center justify-between px-2 md:px-6 py-2 md:py-4 max-w-[1400px] mx-auto gap-2 md:gap-0 overflow-hidden">
          <div className="hidden md:block w-32 flex-shrink-0"></div>

          {/* 1. MAIN DIV (Black Pill Container) */}
          {/* Mobile ke liye margin aur padding kam ki hai taaki screen par fit ho, Desktop ke liye md: laga kar same rakha hai */}
          <div className="relative flex items-center justify-between w-full md:max-w-[450px] bg-gradient-to-b from-[#2c2c2c] to-[#1a1a1a] rounded-full pl-2 pr-2 py-1.5 md:pl-5 md:pr-5 md:py-2 mt-1 md:mt-5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-t border-b border-gray-700/50 mx-1 md:mx-4 flex-1 md:flex-none">
            {/* 2. IMAGE AUR TEXT WALA DIV */}
            <div className="flex items-center overflow-hidden">
              {/* Logo Image */}
              <img
                src="/logotech.png"
                alt="Tech Surya Logo"
                className="w-[32px] h-[32px] md:w-[50px] md:h-[50px] rounded-full object-cover shadow-inner flex-shrink-0"
              />

              {/* Text Portion */}
              <div className="flex flex-col justify-center ml-1.5 md:ml-0">
                <div className="flex items-baseline space-x-1 md:space-x-2 leading-none">
                  <span
                    className="text-[11px] md:text-sm font-black tracking-wide text-[#f47b20]"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    TECH
                  </span>
                  <span
                    className="text-[11px] md:text-sm font-black tracking-wide text-[#527eb9]"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    SURYA
                  </span>
                </div>
                <h2 className="text-[#d94334] text-[7px] md:text-[10px] font-bold tracking-widest mt-1 leading-none pl-1 md:pl-5">
                  IT SOLUTION
                </h2>
                {/* Mobile par text truncate ya ek line me rakhne ke liye whitespace-nowrap */}
                <p className="text-[5.5px] md:text-[10px] text-gray-400 font-semibold mt-1 md:mt-1.5 leading-none pl-1 md:pl-4 whitespace-nowrap">
                  An ISO 9001:2015 Certified Company
                </p>
              </div>
            </div>

            {/* 3. MENU BUTTON DIV JISME CHHOTE DIVS HAIN */}
            {/* Mobile par button aur dots ka size chhota kiya hai */}
            <div className="w-[32px] h-[32px] md:w-[50px] md:h-[50px] ml-2 rounded-full bg-gradient-to-br from-[#243045] to-[#151c28] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-4px_-4px_10px_rgba(0,0,0,0.6),4px_4px_10px_rgba(0,0,0,0.5)] border border-[#303d55] flex items-center justify-center cursor-pointer hover:brightness-110 transition-all flex-shrink-0">
              <div className="grid grid-cols-3 gap-[2px] md:gap-[5px]">
                {[...Array(9)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[2.5px] h-[2.5px] md:w-[5px] md:h-[5px] bg-white rounded-full shadow-sm"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - India Flag & Contact Button */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <img
              src="/twemoji_flag-india.svg"
              alt="India"
              className="h-5 md:h-10 rounded-sm"
            />
            <button className="font-iceland bg-[#0066FF] hover:bg-[#0052cc] text-white px-2.5 py-1 md:px-5 md:py-2 rounded-lg text-[10px] md:text-sm font-semibold transition-all active:scale-95 whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <main className="relative z-20 flex flex-col items-center px-6 mt-5">
          {/* Animated Heading */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-iceland text-5xl md:text-7xl text-center max-w-6xl leading-[1.1] tracking-wide text-white mb-6"
          >
            {words.map((word, i) => (
              <React.Fragment key={i}>
                {/* Jab "Concept" word aaye, toh usse pehle line break add karein */}
                {word === "Concept" && <br />}

                <motion.span
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word === "Product." ? (
                    <span className="text-[#0066FF]">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-gray-400 text-center max-w-5xl text-sm md:text-lg leading-relaxed"
          >
            We design, build and launch powerful web apps, mobile apps, ERP
            systems and custom software for modern businesses.
          </motion.p>

          {/* Buttons and Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-8 flex flex-col md:flex-row items-center gap-6 mb-12 z-10"
          >
            <button className="font-iceland bg-[#FF6600] hover:bg-[#e65c00] text-white px-6 py-2.5 rounded-xl font-normal text-lg shadow-lg transition-transform hover:scale-105 border-b border-white inset-1">
              Get Started
            </button>

            <div className="text-left font-iceland">
              <p className="text-lg md:text-xl font-normal text-orange-500 leading-tight">
                Join 2k+{" "}
                <span className="text-white font-medium text-sm md:text-lg ">
                  Happy Clients with
                </span>
              </p>
              <p className="text-white text-sm md:text-lg tracking-wider ">
                Happy service
              </p>
            </div>
          </motion.div>

          {/* Video Area */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="relative group"
          >
            <div className="absolute  blur-2xl transition duration-1000"></div>
            <div className="relative overflow-hidden  border-white/10 rounded-lg">
              <video
                className="w-full max-w-[750px] aspect-video object-contain"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/wigofin.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 pointer-events-none shadow-[60px_0_50px_rgba(0,0,0,0.9),-60px_0_50px_rgba(0,0,0,0.9)]"></div>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="relative group isolate w-full max-w-[750px] mx-auto -mt-32  mb-16  "
          >
            <div className="absolute -inset-16 md:-inset-3 z-0 ">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent "></div>
            </div>

            {/* 🔹 Video Container (z-10 diya taaki hamesha image ke upar rahe) */}
            <div className="relative z-10 shadow-xl overflow-hidden">
              <video
                className="w-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Adobe Express - VfSCKYbx.mp4" type="video/mp4" />
              </video>

              {/* 🔹 Overlay with INSET side shadows */}
              {/* <div className="absolute inset-0 pointer-events-none shadow-[inset_20px_30px_30px_rgba(0,0,0,0.9),inset_-20px_30px_30px_rgba(0,0,0,0.9)]"></div> */}
             <div className="absolute inset-0 pointer-events-none shadow-[inset_20px_30px_30px_rgba(0,0,0,0.9),inset_-20px_30px_30px_rgba(0,0,0,0.9),inset_0px_-60px_50px_rgba(0,0,0,0.9)]"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute -right-[0px]  hidden xl:block pointer-events-none mt-16"
          >
            <img
              src="/cubeRight.svg"
              alt="Cubes Right"
              className="w-full object-cover"
            />
          </motion.div>
        </main>

        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
      </div>

      <SolutionsMarquee />
      <InnovationSection />
      <Salution />
      <FeaturesSection />
      <FeaturesSection1 />
      <IndustriesSection />
      <ChoosePrint />
      <InsightsSection />
      <TransformSection />
    </>
  );
};

export default HeroPage;
