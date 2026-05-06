import React, { useState } from "react";
import { motion } from "framer-motion";
import techImage from "../../assets/tech1.png";
import techBgImage from "../../assets/techbg.png";

const FeaturesSection1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      name: "Discovery & Planning",
      position: "-top-[3%] left-[5%]",
      id: "image-1",
      image: "/FeaturesSectionImg/image1.svg",
      description:
        "We analyze your requirements, identify business objectives and create a clear roadmap for development.",
      tooltipClass: "top-[100%] mt-8 md:mt-5 left-[50%] rounded-tl-none",
    },
    {
      name: "Design",
      position: "-top-[3%] right-[20%]",
      id: "image-2",
      image: "/FeaturesSectionImg/image2.svg",
      description: "We design wireframes and modern UI/UX interfaces focused on usability and engagement.",
      tooltipClass: "top-[100%] mt-8 md:mt-5 right-[50%] rounded-tr-none",
    },
    {
      name: "Development",
      position: "bottom-[15%] right-[5%]",
      id: "image-3",
      image: "/FeaturesSectionImg/image3.svg",
      description: "Our team develops high-performance applications using modern technologies and best practices",
      tooltipClass: "top-[100%] mt-8 md:mt-5 right-[50%] rounded-tr-none",
    },
    {
      name: "Testing & Optimization",
      position: "-bottom-[5%] left-[50%] -translate-x-1/2",
      id: "image-4",
      image: "/FeaturesSectionImg/image4.png",
      description:
        "We test functionality, security and performance to deliver a reliable product.",
      tooltipClass: "bottom-[100%] mb-8 md:mb-5 right-[50%] rounded-br-none",
    },
    {
      name: "Launch & Support",
      position: "bottom-[8%] left-[5%]",
      id: "image-5",
      image: "/FeaturesSectionImg/image5.svg",
      description: "We launch your solution and provide ongoing support, updates and improvements.",
      tooltipClass: "top-[100%] mt-8 md:mt-5 left-[50%] rounded-tl-none",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white px-4 flex flex-col items-center font-sans overflow-hidden">
      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-16 md:mb-24">
        <div className="w-[185px] h-[63px] mx-auto rounded-full p-[1px] bg-gradient-to-b from-[#0473EF] to-[#FF7200] mb-8 shadow-lg shadow-[#0473EF]/10">
          <span className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center text-base text-gray-300 hover:bg-[#0a0a0a] transition-colors duration-300 font-dmsans">
            Our Features
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold mt-8 max-w-4xl mx-auto leading-snug font-iceland">
          <span className="text-blue-500">A structured</span> approach to
          design, build and launch scalable{" "}
          <span className="relative inline-block mt-2 md:mt-0">
            digital solutions.
            <span className="absolute left-0 w-full -bottom-6 md:-bottom-12">
              <img
                src="/Group5.svg"
                alt="Underline"
                className="w-full object-contain"
              />
            </span>
          </span>
        </h2>
      </div>

      {/* --- BUTTONS SECTION --- */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-9 mb-10 md:mb-20 z-20">
        {features.map((feature, index) => (
          <button
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() =>
              setHoveredIndex(hoveredIndex === index ? null : index)
            }
            className={`w-[45%] md:w-56 text-center px-2 md:px-4 py-3 md:py-4 rounded-2xl border transition-all duration-300 ease-in-out text-sm md:text-lg font-normal tracking-wide font-iceland
              ${
                hoveredIndex === index
                  ? "bg-[#0a0f1a] border-gray-800 border-b-[4px] border-b-[#0473EF] -translate-y-1 shadow-[0_10px_15px_-5px_rgba(4,115,239,0.2)]"
                  : "bg-transparent border-gray-800"
              }`}
          >
            {feature.name}
          </button>
        ))}
      </div>

      {/* --- IMAGES SECTION --- */}
      <div className="relative w-full flex justify-center h-[280px] sm:h-[400px] md:h-[500px] mt-2 md:mt-10 overflow-visible">
        <div className="relative w-[1152px] h-[500px] transform scale-[0.35] sm:scale-[0.55] md:scale-100 flex-shrink-0 origin-top md:origin-center flex items-center justify-center">
          {/* 1. MAIN CENTER IMAGE */}
          <div className="absolute w-[800px] h-[450px] rounded-2xl overflow-hidden z-0">
            <img
              src="/FeaturesSectionImg/mainImg.svg"
              alt="Main Dashboard"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* 2. FLOATING IMAGES & HOVER TEXT BOX */}
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setHoveredIndex(hoveredIndex === index ? null : index)
              }
              className={`absolute flex flex-col items-center cursor-pointer ${feature.position} ${hoveredIndex === index ? "z-30" : "z-10"}`}
            >
              {/* 2A. FLOATING IMAGE BOX */}
              <div
                className={`w-56 h-36 rounded-xl overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center bg-[#0a0f1a] 
                  ${
                    hoveredIndex === index
                      ? "border-2 border-[#FF7200] shadow-[0px_0px_21.18px_10.59px_#FF72007A] scale-110"
                      : "border border-[#803b03] shadow-xl scale-100"
                  }`}
              >
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 2B. HOVER TEXT BOX (Tooltip) */}
              <div
                className={`absolute w-[450px] md:w-[280px] bg-[#0473EF] text-white text-[22px] md:text-sm font-medium p-6 md:p-4 shadow-lg transition-all duration-300 ease-in-out pointer-events-none rounded-xl font-dmsans
                  ${feature.tooltipClass}
                  ${
                    hoveredIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
              >
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 md:mt-40 mb-10 md:mb-20">
        <img
          src="/FeaturesSectionImg/Component.svg"
          alt="Feature Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* --- TECH STACK SECTION (Replaced Techsurya.gif) --- */}
      <div className="relative w-full max-w-[1400px] mx-auto pt-2 md:pt-4 pb-0 px-6 md:px-12 lg:px-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative flex items-center justify-center min-h-[120px] md:min-h-[180px]">
          {/* ---- LEFT SIDE: Badge + Heading ---- */}
          <div className="absolute top-0 left-0 z-20 flex flex-col space-y-6 md:space-y-8 pr-2">
            <div className="w-[160px] sm:w-[185px] h-[46px] sm:h-[53px] rounded-full p-[1px] bg-gradient-to-b from-[#0473EF] to-[#FF7200] shadow-lg shadow-[#0473EF]/10">
              <span className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center text-xs sm:text-sm text-gray-300 hover:bg-[#0a0a0a] transition-colors duration-300 font-dmsans">
                Our Tech Stack
              </span>
            </div>
            <h2 className="font-iceland leading-[0.9] text-left  gap-2">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-transparent bg-clip-text bg-[#0473EF]">
                Key Technologies
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold text-transparent bg-clip-text bg-white">
                & Platforms
              </span>
            </h2>
          </div>

          {/* ---- CENTER: Tech Stack Images (Static Bg + Rotating Fg) ---- */}
          <div
            className="
              relative
              w-[180px] h-[180px]
              xs:w-[220px] xs:h-[220px]
              sm:w-[280px] sm:h-[280px]
              md:w-[380px] md:h-[380px]
              lg:w-[500px] lg:h-[500px]
              xl:w-[620px] xl:h-[620px]
              2xl:w-[700px] 2xl:h-[700px]
              flex-shrink-0
              mx-auto
            "
          >
            {/* Static Background Image */}
            <img
              src={techBgImage}
              alt="Tech Background"
              className="absolute inset-0 w-full h-full object-contain z-0"
            />

            {/* Rotating Front Image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-full h-full z-10"
            >
              <img
                src={techImage}
                alt="Our Tech Stack - Technologies we work with"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
              <div className="font-orbitron text-center leading-tight">
                <div className="text-white text-base sm:text-xl md:text-3xl lg:text-[40px] font-semibold tracking-wider">Our</div>
                <div className="text-[#FF7200] text-base sm:text-xl md:text-3xl lg:text-[40px] font-semibold tracking-wider mt-1 md:mt-3">Tech</div>
                <div className="text-[#0473EF] text-base sm:text-xl md:text-3xl lg:text-[40px] font-semibold tracking-wider mt-1 md:mt-3">Stack</div>
              </div>
            </div>
          </div>

          {/* ---- BOTTOM RIGHT: Description Text ---- */}
          <div className="absolute bottom-16 md:bottom-20 right-0 md:-right-6 lg:-right-10 z-20 max-w-[320px] lg:max-w-[360px]">
            <p className="text-gray-400 text-sm md:text-base lg:text-[17px] font-dmsans leading-relaxed">
              We work with leading platforms & technologies that empower digital
              transformation accelerate delivery.
            </p>
          </div>
        </div>
      </div>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2, duration: 1 }}
  className="w-full -mt-10 md:-mt-20"
>
        <div className="w-full">
          <video
            className="w-full h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Screen.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection1;
