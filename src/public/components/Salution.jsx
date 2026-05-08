// import React, { useState } from "react";
// import ServicesLeftColumn from "./ServicesLeftColumn";

// const servicesData = [
//   {
//     id: 1,
//     category: "Web Development",
//     title: "Fast, scalable and modern\nwebsites for growing businesses.",
//     description:
//       "We build responsive and high-performance websites tailored to your business goals. Our solutions focus on speed, security and seamless user experience across all devices.",
//     benefits: [
//       <>
//         <span className="text-[#f97316]">Responsive</span> & mobile-first design
//       </>,
//       <>
//         High performance & <span className="text-[#f97316]">fast loading</span>
//       </>,
//       <>
//         <span className="text-[#3b82f6]">SEO</span>-friendly structure
//       </>,
//       <>
//         <span className="text-[#3b82f6]">Scalable</span> architecture
//       </>,
//       <>
//         CMS & admin panel <span className="text-[#f97316]">support</span>
//       </>,
//     ],
//   },
//   {
//     id: 2,
//     category: "Application Development",
//     title: "Robust & user-centric\nmobile applications.",
//     description:
//       "Transform your ideas into powerful mobile apps. We develop native and cross-platform applications that deliver exceptional user experiences and drive user engagement.",
//     benefits: [
//       <>
//         <span className="text-[#f97316]">Cross-platform</span> compatibility
//       </>,
//       <>
//         Intuitive <span className="text-[#3b82f6]">UI/UX design</span>
//       </>,
//       <>
//         <span className="text-[#f97316]">Secure</span> data handling
//       </>,
//       <>
//         Seamless <span className="text-[#3b82f6]">API integration</span>
//       </>,
//       <>
//         App store deployment <span className="text-[#f97316]">support</span>
//       </>,
//     ],
//   },
//   {
//     id: 3,
//     category: "3D Development",
//     title: "Immersive 3D experiences\n& web graphics.",
//     description:
//       "Bring your vision to life with cutting-edge 3D modeling and web-based environments. Perfect for product showcases, virtual tours, and interactive web apps.",
//     benefits: [
//       <>
//         Interactive <span className="text-[#3b82f6]">3D models</span>
//       </>,
//       <>
//         <span className="text-[#f97316]">WebGL</span> & Three.js integration
//       </>,
//       <>
//         High-quality <span className="text-[#3b82f6]">rendering</span>
//       </>,
//       <>
//         <span className="text-[#f97316]">Optimized</span> performance
//       </>,
//       <>
//         AR/VR ready <span className="text-[#3b82f6]">assets</span>
//       </>,
//     ],
//   },
//   {
//     id: 4,
//     category: "UI/UX Design",
//     title: "Beautiful and user-friendly\ninterface design.",
//     description:
//       "We craft intuitive and visually appealing user interfaces that enhance user experience and engagement. Our designs focus on usability, accessibility, and modern aesthetics.",
//     benefits: [
//       <>
//         User-centered <span className="text-[#3b82f6]">design</span>
//       </>,
//       <>
//         <span className="text-[#f97316]">Wireframing</span> & prototyping
//       </>,
//       <>
//         Responsive <span className="text-[#3b82f6]">layouts</span>
//       </>,
//       <>
//         <span className="text-[#f97316]">Modern</span> UI trends
//       </>,
//       <>
//         Improved <span className="text-[#3b82f6]">user experience</span>
//       </>,
//     ],
//   },
// ];

// const Salution = () => {
//   const baseImage = "/grop.svg";

//   const slidingImages = [
//     "/image1.svg",
//     "/image2.svg",
//     "/image3.svg",
//     "/image4.svg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="bg-[#050505] min-h-screen text-white font-sans py-8 px-6 md:px-12 overflow-hidden">
//       <div className="max-w-5xl mx-auto flex flex-col items-center mb-20">
//         <div className="">
//           <img
//             src="/dall.svg"
//             alt="Crystal Icon"
//             className="w-40 h-40 object-contain"
//           />
//         </div>

//         <div className="w-[185px] h-[63px] rounded-full p-[1px] bg-gradient-to-b from-[#0473EF] to-[#FF7200] mb-8 shadow-lg shadow-[#0473EF]/10">
//           <button className="w-full h-full rounded-full bg-[#050505] backdrop-blur-sm flex items-center justify-center text-base text-gray-300 hover:bg-[#0a0a0a] transition-colors duration-300 font-dmsans">
//             Our Services
//           </button>
//         </div>

//         <h1 className="text-3xl md:text-[50px] font-medium tracking-wide text-center leading-tight font-iceland">
//           <span className="text-[#3b82f6] relative inline-block mb-4 md:mb-0">
//             Solutions
//             <span className="absolute bottom-0 md:bottom-3 left-0 w-full h-[3px]">
//               <img src="/Group5.svg" alt="Underline" />
//             </span>
//           </span>{" "}
//           Designed For Real Business Growth
//         </h1>

//         <p className="text-gray-400 text-sm md:text-base text-center font-dmsans mt-4">
//           We design, develop and deploy modern digital solutions tailored to
//           your business needs.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//         <ServicesLeftColumn
//           services={servicesData}
//           onIndexChange={setCurrentIndex}
//         />

//         <div className="relative w-full h-[400px] lg:h-[600px] mx-auto mt-10 lg:mt-0 rounded-3xl flex items-center justify-center">
//           <img
//             src={baseImage}
//             alt="Base Background"
//             className="absolute inset-0 w-full h-full object-contain z-10"
//           />

//           <div className="absolute inset-0 bg-gradient-to-tr to-transparent z-10 pointer-events-none"></div>

//           {slidingImages.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className={`absolute inset-0 w-full h-full object-contain transition-all duration-[800ms] ease-in-out ${
//                 currentIndex === index
//                   ? "scale-100 blur-none opacity-100 z-20"
//                   : "scale-50 blur-xl opacity-0 z-10"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Salution;

// ************************************

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import ServicesLeftColumn from "./ServicesLeftColumn";

const servicesData = [
  {
    id: 1,
    category: "Web Development",
    title: "Fast, scalable and modern\nwebsites for growing businesses.",
    description:
      "We build responsive and high-performance websites tailored to your business goals. Our solutions focus on speed, security and seamless user experience across all devices.",
    benefits: [
      <>
        <span className="text-[#f97316]">Responsive</span> & mobile-first design
      </>,
      <>
        High performance & <span className="text-[#f97316]">fast loading</span>
      </>,
      <>
        <span className="text-[#3b82f6]">SEO</span>-friendly structure
      </>,
      <>
        <span className="text-[#3b82f6]">Scalable</span> architecture
      </>,
      <>
        CMS & admin panel <span className="text-[#f97316]">support</span>
      </>,
    ],
  },
  {
    id: 2,
    category: "Application Development",
    title: "Powerful mobile apps built for\nperformance and usability.",
    description:
      "We develop Android and iOS applications designed to deliver smooth user experience and scalable performance for startups and enterprises.",
    benefits: [
      <>
        <span className="text-[#f97316]">Android & iOS</span> development
      </>,
      <>
        Cross-<span className="text-[#3b82f6]">platform solutions</span>
      </>,
      <>
        <span className="text-[#f97316]">Smooth UI</span> & performance
      </>,
      <>
        <span className="text-[#f97316]">API</span> integration
      </>,
      <>
        App store <span className="text-[#3b82f6]">deployment</span>
      </>,
    ],
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "User-focused design that\nenhances engagement.",
    description:
      "We design intuitive and visually appealing user interfaces that improve usability and create meaningful digital experiences.",
    benefits: [
      <>
        Wireframing <span className="text-[#f97316]">& prototyping</span>
      </>,
      <>
        User journey<span className="text-[#3b82f6]"> design</span>
      </>,
      <>
        <span className="text-[#3b82f6]">Mobile & web</span> UI design
      </>,
      <>
        Design <span className="text-[#f97316]">systems</span>
      </>,
      <>
        Conversion-<span className="text-[#f97316]">focused</span> layouts
      </>,
    ],
  },
  {
    id: 4,
    category: "Custom Software",
    title: "Tailored software solutions\nfor your business.",
    description:
      "We build custom software applications designed to automate operations and streamline workflows based on your unique business requirements.",
    benefits: [
      <>
        <span className="text-[#f97316]">Business</span> automation
      </>,
      <>
        <span className="text-[#f97316]">Scalable</span> architecture
      </>,
      <>
        <span className="text-[#3b82f6]">Secure</span> development
      </>,
      <>
        Custom <span className="text-[#3b82f6]">dashboards</span>
      </>,
      <>
        <span className="text-[#3b82f6]">Third-party</span> integrations
      </>,
    ],
  },
  {
    id: 5,
    category: "3D Development",
    title: "Interactive 3D experiences for\nmodern websites.",
    description:
      "We create immersive 3D visuals and interactive experiences to enhance engagement and storytelling.",
    benefits: [
      <>
        <span className="text-[#f97316]">3D website</span> elements
      </>,
      <>
        Product <span className="text-[#3b82f6]">visualization</span>
      </>,
      <>
        <span className="text-[#3b82f6]">Interactive</span> animations
      </>,
      <>
        <span className="text-[#3b82f6]">Three.js</span> development
      </>,
      <>
        WebGL <span className="text-[#f97316]">experiences</span>
      </>,
    ],
  },
  {
    id: 6,
    category: "ERP Systems",
    title: "Smart business   management in\none platform.",
    description:
      "Our ERP solutions help manage operations, inventory, finance and workflows efficiently with centralized control.",
    benefits: [
      <>
        <span className="text-[#f97316]">Inventory</span> management
      </>,
      <>
        <span className="text-[#3b82f6]">Sales</span> & billing modules
      </>,
      <>
        <span className="text-[#3b82f6]">Finance</span> management
      </>,
      <>
        Employee <span className="text-[#f97316]">management</span>
      </>,
      <>
        <span className="text-[#3b82f6]">Custom ERP</span> modules
      </>,
    ],
  },
];

const Salution = () => {
  const baseImage = "/grop.svg";
  const slidingImages = [
    "/imageWeb.svg",
    "/imageApp.svg",
    "/imageUI.svg",
    "/imageCustom.svg",
    "/image3D.svg",
    "/imageERP.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionWrapperRef = useRef(null);
  const totalServices = servicesData.length;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionWrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;

      if (scrolled < 0) {
        setCurrentIndex(0);
        return;
      }
      if (scrolled > totalScrollable) {
        setCurrentIndex(totalServices - 1);
        return;
      }

      const progress = scrolled / totalScrollable;
      const index = Math.min(
        Math.floor(progress * totalServices),
        totalServices - 1,
      );
      setCurrentIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalServices]);

  const scrollHeight = `${totalServices * 100}vh`;

  return (
    <div className="bg-[#050505]  min-h-screen text-white font-sans">
      {/* ───── Header ───── */}
      <div className="py-8 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-8 md:mb-20">
          <img
            src="/dall.svg"
            alt="Crystal Icon"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
          />

          <div className="w-[160px] sm:w-[185px] h-[52px] sm:h-[63px] rounded-full p-[1px] bg-gradient-to-b from-[#0473EF] to-[#FF7200] mb-6 sm:mb-8 shadow-lg shadow-[#0473EF]/10">
            <button className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center text-sm sm:text-base text-gray-300 font-dmsans">
              Our Services
            </button>
          </div>

          {/* <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center leading-[1.4] font-iceland px-2">
            <span className="text-[#3b82f6] relative inline-block mb-3 md:mb-0">
              Solutions
              <span className="absolute bottom-0  left-0 w-full h-[3px] ">
                <img src="/Group5.svg" alt="Underline" />
              </span>
            </span>{" "}
            Solutions Designed for Real Business Growth{" "}
          </h1>

          <p className="text-gray-400 text-xs  md:text-base text-center font-dmsans mt-4 px-2">
            We design, develop and deploy modern digital solutions tailored to
            your business needs.
          </p> */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium tracking-wide text-center leading-tight font-iceland px-2 flex flex-wrap justify-center items-center gap-2">
            <span className="text-[#3b82f6] relative inline-block whitespace-nowrap">
              Solutions
              <span className="absolute -bottom-1 left-0 w-full h-[3px]">
                <img
                  src="/Group5.svg"
                  alt="Underline"
                  className="w-full object-contain"
                />
              </span>
            </span>

            <span className="whitespace-nowrap">
              Designed for Real Business Growth
            </span>
          </h1>

          <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center font-dmsans mt-4 px-4 max-w-3xl mx-auto">
            We design, develop and deploy modern digital solutions tailored to
            your business needs.
          </p>
        </div>
      </div>

      {/* ───── Scroll Section ───── */}
      <div
        ref={sectionWrapperRef}
        style={{ height: scrollHeight }}
        className="relative w-full"
      >
        <div className="sticky  px-0 md:px-20 top-0 h-screen w-full overflow-hidden">
          <div
            className="max-w-7xl mx-auto h-full 

            {/* Mobile: flex column — image top, text bottom */}
            flex flex-col lg:grid lg:grid-cols-2
            gap-4 lg:gap-16
            items-center justify-center lg:justify-normal
          "
          >
            {/* ── Right: Image (mobile pe upar) ── */}

            <div className=" order-1 lg:order-2  w-full flex-shrink-0 flex items-center justify-center">
              {/* Square aspect box — image kabhi nahi fategi */}
              <div className=" relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-full lg:h-[600px] ">
                {/* Base image */}
                <img
                  src={baseImage}
                  alt="Base Background"
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-tr to-transparent z-10 pointer-events-none" />

                {/* Sliding images */}
                {slidingImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-[800ms] ease-in-out transform-gpu ${
                      currentIndex === index
                        ? "scale-100 opacity-100 z-20"
                        : "scale-75 opacity-0 z-10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ── Left: Text (mobile pe neeche) ── */}
            <div className="order-2 lg:order-1 w-full flex-1 min-h-0 flex items-center">
              <ServicesLeftColumn
                services={servicesData}
                currentIndex={currentIndex}
                totalServices={totalServices}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ───── Video Section ───── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="w-full mt-2"
      >
        <video className="w-full h-auto object-cover" autoPlay loop playsInline>
          <source src="/ScreenRe.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default Salution;
