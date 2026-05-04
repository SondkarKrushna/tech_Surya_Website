// import React, { useState } from "react";

// const FeaturesSection1 = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const features = [
//     {
//       name: "Discovery & Planning",
//       position: "-top-[3%] left-[5%]",
//       id: "image-1",
//       image: "/FeaturesSectionImg/image1.svg",
//       description:
//         "We design wireframes and modern UI/UX interfaces focused on usability and engagement.",
//       tooltipClass: "top-[100%] mt-5 left-[50%] rounded-tl-none",
//     },
//     {
//       name: "Design",
//       position: "-top-[3%] right-[20%]",
//       id: "image-2",
//       image: "/FeaturesSectionImg/image2.svg",
//       description: "Replace this text with your Design description.",
//       tooltipClass: "top-[100%] mt-5 right-[50%] rounded-tr-none",
//     },
//     {
//       name: "Development",
//       position: "bottom-[15%] right-[5%]",
//       id: "image-3",
//       image: "/FeaturesSectionImg/image3.svg",
//       description: "Replace this text with your Development description.",
//       // YAHAN CHANGE HUA (Image 3): Niche se start hoke center se left jayega (Image 2 jaisa)
//       tooltipClass: "top-[100%] mt-5 right-[50%] rounded-tr-none",
//     },
//     {
//       name: "Testing & Optimization",
//       position: "-bottom-[5%] left-[50%] -translate-x-1/2",
//       id: "image-4",
//       image: "/FeaturesSectionImg/image4.png",
//       description:
//         "Replace this text with your Testing & Optimization description.",
//       // YAHAN CHANGE HUA (Image 4): Upar rahega, center se start hoke right jayega aur Bottom-Left corner sharp hoga
//       tooltipClass: "bottom-[100%] mb-5 right-[50%] rounded-br-none",
//     },
//     {
//       name: "Launch & Support",
//       position: "bottom-[8%] left-[5%]",
//       id: "image-5",
//       image: "/FeaturesSectionImg/image5.svg",
//       description: "Replace this text with your Launch & Support description.",
//       tooltipClass: "top-[100%] mt-5 left-[50%] rounded-tl-none",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#050505] text-white py-16 px-4 flex flex-col items-center font-sans">
//       {/* --- HEADER SECTION --- */}
//       <div className="text-center mb-24">
//         <div className="w-[185px] h-[63px] mx-auto rounded-full p-[1px] bg-gradient-to-b from-[#0473EF] to-[#FF7200] mb-8 shadow-lg shadow-[#0473EF]/10">
//           <span className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center text-base text-gray-300 hover:bg-[#0a0a0a] transition-colors duration-300 font-dmsans font-dmsans">
//             Our Features
//           </span>
//         </div>
//         <h2 className="text-5xl font-semibold mt-8 max-w-4xl mx-auto leading-snug font-iceland">
//           <span className="text-blue-500">A structured</span> approach to
//           design, build and launch scalable{" "}
//           <span className="relative inline-block">
//             digital solutions.
//             <span className="absolute bottom-0 left-0 w-full h-[3px] ">
//               <img
//                 src="/Group5.svg"
//                 alt="Underline"
//                 className="w-full object-contain"
//               />
//             </span>
//           </span>
//         </h2>
//       </div>

//       {/* --- BUTTONS SECTION --- */}
//       <div className="flex flex-wrap justify-center gap-9 mb-20 z-20">
//         {features.map((feature, index) => (
//           <button
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className={`w-56 text-center px-4 py-4 rounded-2xl border transition-all duration-300 ease-in-out text-lg font-normal tracking-wide font-iceland
//               ${
//                 hoveredIndex === index
//                   ? "bg-[#0a0f1a] border-gray-800 border-b-[4px] border-b-[#0473EF] -translate-y-1 shadow-[0_10px_15px_-5px_rgba(4,115,239,0.2)]"
//                   : "bg-transparent border-gray-800"
//               }`}
//           >
//             {feature.name}
//           </button>
//         ))}
//       </div>

//       {/* --- IMAGES SECTION --- */}
//       <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center mt-10">
//         {/* 1. MAIN CENTER IMAGE */}
//         <div className="absolute w-[800px] h-[450px] rounded-2xl overflow-hidden z-0">
//           <img
//             src="/FeaturesSectionImg/mainImg.svg"
//             alt="Main Dashboard"
//             className="w-full h-full object-cover opacity-80"
//           />
//         </div>

//         {/* 2. FLOATING IMAGES & HOVER TEXT BOX */}
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className={`absolute flex flex-col items-center ${feature.position} ${hoveredIndex === index ? "z-30" : "z-10"}`}
//           >
//             {/* 2A. FLOATING IMAGE BOX */}
//             <div
//               className={`w-56 h-36 rounded-xl overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center bg-[#0a0f1a] cursor-pointer
//                 ${
//                   hoveredIndex === index
//                     ? "border-2 border-[#FF7200] shadow-[0px_0px_21.18px_10.59px_#FF72007A] scale-110"
//                     : "border border-[#803b03] shadow-xl scale-100"
//                 }`}
//             >
//               <img
//                 src={feature.image}
//                 alt={feature.name}
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* 2B. HOVER TEXT BOX (Tooltip) */}
//             <div
//               className={`absolute w-[280px] bg-[#0473EF] text-white text-sm font-medium p-4 shadow-lg transition-all duration-300 ease-in-out pointer-events-none rounded-xl font-dmsans
//                 ${feature.tooltipClass}
//                 ${
//                   hoveredIndex === index
//                     ? "opacity-100 scale-100"
//                     : "opacity-0 scale-95"
//                 }`}
//             >
//               {feature.description}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center items-center mt-20 md:mt-40">
//         <img
//           src="/FeaturesSectionImg/Component.svg"
//           alt="Feature Illustration"
//           className="w-full  h-auto object-contain"
//         />
//       </div>
//       <div className="flex justify-center items-center mt-20 md:mt-40">
//         <img
//           src="/FeaturesSectionImg/Group.svg"
//           alt="Feature Illustration"
//           className="w-full  h-auto object-contain"
//         />
//       </div>

//     </div>
//   );
// };

// export default FeaturesSection1;

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-[#050505] text-white  px-4 flex flex-col items-center font-sans overflow-hidden">
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
            {/* YAHAN FIX HAI: -bottom-2 (mobile ke liye) aur md:-bottom-3 (desktop ke liye) lagaya hai */}
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
            // YAHAN FIX HAI: Mobile par tap karne se tooltips show/hide honge
            onClick={() =>
              setHoveredIndex(hoveredIndex === index ? null : index)
            }
            // YAHAN FIX HAI: Mobile pe button thode chhote kiye hain fit hone ke liye, md: se desktop same rahega
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
      {/* YAHAN FIX HAI: Mobile ke liye scale-[0.35] kiya hai taaki poora layout dikhe, md:scale-100 se desktop waisa hi rahega */}
      <div className="relative w-full flex justify-center h-[280px] sm:h-[400px] md:h-[500px] mt-2 md:mt-10 overflow-visible">
        {/* Is inner div me Desktop ki exact width (1152px) fix kardi hai, taaki scale hone par proportion na bigde */}
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
              // Images par bhi onClick laga diya
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
              {/* YAHAN FIX HAI: Text box ko mobile par w-[500px] bada rakha hai taaki zoom out hone ke baad font easily read ho sake */}
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

      <div className="flex justify-center items-center mt-10 md:mt-40">
        <img
          src="/FeaturesSectionImg/Component.svg"
          alt="Feature Illustration"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex justify-center items-center mt-10 md:mt-40">
        <img
          // src="/FeaturesSectionImg/Group.svg"
          src="/Techsurya.gif"
          alt="Feature Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="w-full"
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
