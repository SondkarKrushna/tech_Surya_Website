// import React from "react";
// import { motion } from "framer-motion";

// const FeaturesSection = () => {
//   const cards = [
//     {
//       title: "High Performance",
//       desc: "Optimized for speed and flawless functionality.",
//       img: "1.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Modern Tech",
//       desc: "Leveraging the latest technologies for a future-proof solution.",
//       img: "2.png",
//       span: "lg:col-span-3",
//     },
//     {
//       title: "Secure Dev",
//       desc: "Built with a security-first approach to protect your data.",
//       img: "3.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Custom Solutions",
//       desc: "Tailored development aligned with your business requirements.",
//       img: "4.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Ongoing Support",
//       desc: "Continuous maintenance and support for long-term growth.",
//       img: "5.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Scalable Architecture",
//       desc: "Solutions designed to grow seamlessly with your business.",
//       img: "6.png",
//       span: "lg:col-span-3",
//     },
//   ];

//   return (
//     <section className="bg-[#050505] text-white py-20 px-6 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="max-w-6xl mx-auto text-center mb-16 font-iceland px-4 md:px-0">
//           <h2 className="text-4xl md:text-6xl tracking-tight mb-4 leading-tight md:leading-normal">
//             {/* Force single line on mobile */}
//             <span className="text-blue-500 whitespace-nowrap block md:inline">
//               Powerful capabilities
//             </span>{" "}
//             designed to deliver scalable and high-performance{" "}
//             <span className="text-blue-400 relative inline-block leading-none">
//   digital products.

//   <span className="absolute left-0 w-full top-full -mt-[2px] md:-mt-[4px]">
//     <img
//       src="/Group5.svg"
//       alt="Underline"
//       className="w-full object-contain block"
//     />
//   </span>
// </span>
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 auto-rows-[400px]">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 ${card.span}`}
//             >
//               {/* Inner Card */}
//               <div className="relative h-full w-full bg-[#0a0a0a] rounded-3xl flex flex-col border border-white/5 overflow-hidden">
//                 {/* Text Content */}
//                 <div className="z-20 p-4">
//                   <h3 className="text-3xl font-iceland text-gray-200 group-hover:text-white mb-2 transition-colors">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-400 text-base leading-snug max-w-[90%]">
//                     {card.desc}
//                   </p>
//                 </div>

//                 {/* Image Container - 'flex-1' removes bottom gap */}
//                 <div className="relative flex-1 flex justify-center items-end overflow-hidden">
//                   {/* Permanent Blue Glow - Increased opacity for constant visibility */}
//                   <div className="absolute -bottom-10 w-full h-32 bg-blue-600/40 blur-[70px] pointer-events-none"></div>

//                   <motion.img
//                     whileHover={{ y: -10 }}
//                     src={card.img}
//                     alt={card.title}
//                     className="relative z-10 max-h-[220px] w-auto object-contain transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(0,100,255,0.3)]"
//                   />
//                 </div>

//                 {/* Corner Accent */}
//                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-[50px] pointer-events-none"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

// import React from "react";
// import { motion } from "framer-motion";

// const FeaturesSection = () => {
//   const cards = [
//     {
//       title: "High Performance",
//       desc: "Optimized for speed and flawless functionality.",
//       img: "1.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Modern Tech",
//       desc: "Leveraging the latest technologies for a future-proof solution.",
//       img: "2.png",
//       span: "lg:col-span-3",
//     },
//     {
//       title: "Secure Dev",
//       desc: "Built with a security-first approach to protect your data.",
//       img: "3.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Custom Solutions",
//       desc: "Tailored development aligned with your business requirements.",
//       img: "4.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Ongoing Support",
//       desc: "Continuous maintenance and support for long-term growth.",
//       img: "5.png",
//       span: "lg:col-span-2",
//     },
//     {
//       title: "Scalable Architecture",
//       desc: "Solutions designed to grow seamlessly with your business.",
//       img: "6.png",
//       span: "lg:col-span-3",
//     },
//   ];

//   return (
//     <section className="bg-[#050505] text-white py-20 px-6 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="max-w-6xl mx-auto text-center mb-16 font-iceland px-4 md:px-0">
//           <h2 className="text-4xl md:text-6xl tracking-tight mb-4 leading-tight md:leading-normal">
//             <span className="text-blue-500 whitespace-nowrap block md:inline">
//               Powerful capabilities
//             </span>{" "}
//             designed to deliver scalable and high-performance{" "}
//             <span className="text-blue-400 relative inline-block leading-none">
//               digital products.
//               <span className="absolute left-0 w-full top-full -mt-[2px] md:-mt-[4px]">
//                 <img
//                   src="/Group5.svg"
//                   alt="Underline"
//                   className="w-full object-contain block"
//                 />
//               </span>
//             </span>
//           </h2>
//         </div>

//         {/* Grid with 3D perspective applied */}
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 auto-rows-[400px]"
//           style={{ perspective: "1000px" }} // 3D effect ke liye
//         >
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               // INITIAL: rotateY -30 karta hai right side ko aapki taraf
//               initial={{ opacity: 0, rotateY: -30, scale: 0.95 }}

//               // WHILE IN VIEW: Wapas seedha ho jayega
//               whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}

//               // VIEWCORT: once: false karne se har baar scroll par animate hoga
//               viewport={{ once: false, amount: 0.3 }}

//               // STYLE: Left side fix rahegi aur right side swing karegi
//               style={{ transformOrigin: "left" }}

//               transition={{
//                 duration: 1.5,
//                 ease: [0.25, 1, 0.5, 1],
//                 delay: index * 0.1
//               }}
//               className={`relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 ${card.span}`}
//             >
//               {/* Inner Card */}
//               <div className="relative h-full w-full bg-[#0a0a0a] rounded-3xl flex flex-col border border-white/5 overflow-hidden">
//                 {/* Text Content */}
//                 <div className="z-20 p-4">
//                   <h3 className="text-3xl font-iceland text-gray-200 group-hover:text-white mb-2 transition-colors">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-400 text-base leading-snug max-w-[90%]">
//                     {card.desc}
//                   </p>
//                 </div>

//                 {/* Image Container */}
//                 <div className="relative flex-1 flex justify-center items-end overflow-hidden">
//                   <div className="absolute -bottom-10 w-full h-32 bg-blue-600/40 blur-[70px] pointer-events-none"></div>

//                   <motion.img
//                     whileHover={{ y: -10 }}
//                     src={card.img}
//                     alt={card.title}
//                     className="relative z-10 max-h-[220px] w-auto object-contain transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(0,100,255,0.3)]"
//                   />
//                 </div>

//                 {/* Corner Accent */}
//                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-[50px] pointer-events-none"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const cards = [
    {
      title: "High Performance",
      desc: "Optimized for speed and flawless functionality.",
      img: "1.png",
      span: "lg:col-span-2",
    },
    {
      title: "Modern Tech",
      desc: "Leveraging the latest technologies for a future-proof solution.",
      img: "2.png",
      span: "lg:col-span-3",
    },
    {
      title: "Secure Dev",
      desc: "Built with a security-first approach to protect your data.",
      img: "3.png",
      span: "lg:col-span-2",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored development aligned with your business requirements.",
      img: "4.png",
      span: "lg:col-span-2",
    },
    {
      title: "Ongoing Support",
      desc: "Continuous maintenance and support for long-term growth.",
      img: "5.png",
      span: "lg:col-span-2",
    },
    {
      title: "Scalable Architecture",
      desc: "Solutions designed to grow seamlessly with your business.",
      img: "6.png",
      span: "lg:col-span-3",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-16 font-iceland px-4 md:px-0">
          <h2 className="text-4xl md:text-6xl tracking-tight mb-4 leading-tight md:leading-normal">
            <span className="text-blue-500 whitespace-nowrap block md:inline">
              Powerful capabilities
            </span>{" "}
            designed to deliver scalable and high-performance{" "}
            <span className="text-blue-400 relative inline-block leading-none">
              digital products.
              <span className="absolute left-0 w-full top-full -mt-[2px] md:-mt-[4px]">
                <img
                  src="/Group5.svg"
                  alt="Underline"
                  className="w-full object-contain block"
                />
              </span>
            </span>
          </h2>
        </div>

        {/* Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 auto-rows-[400px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={card.span}
              style={{ perspective: "1200px" }}
            >
              <motion.div
                initial={{ opacity: 0, rotateY: -35, scale: 0.95 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                style={{ transformOrigin: "left" }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: (index % 3) * 0.1,
                }}
                
                className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-[#FF7200] to-[#0473EF] shadow-lg shadow-[#0473EF]/20 transition-all h-full w-full"
              >
                <div className="relative h-full w-full bg-[#0a0a0a] rounded-3xl flex flex-col overflow-hidden">
                 
                  <div className="z-20 p-4">
                    <h3 className="text-3xl font-iceland text-gray-200 group-hover:text-white mb-2 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-snug max-w-[90%]">
                      {card.desc}
                    </p>
                  </div>

               
                  <div className="relative flex-1 flex justify-center items-end overflow-hidden">
                    <div className="absolute -bottom-10 w-full h-32 bg-blue-600/40 blur-[70px] pointer-events-none"></div>

                    <motion.img
                      whileHover={{ y: -10 }}
                      src={card.img}
                      alt={card.title}
                      className="relative z-10 max-h-[220px] w-auto object-contain transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(0,100,255,0.3)]"
                    />
                  </div>

               
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-[50px] pointer-events-none"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div> */}

        {/* **************************** */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 auto-rows-[400px]">
          {cards.map((card, index) => {
            const isEven = index % 2 === 0;

            const trailGradient = isEven
              ? "conic-gradient(from 0deg, rgba(255,114,0,0) 0%, #FF7200 20%, #0473EF 80%, rgba(4,115,239,0) 100%)"
              : "conic-gradient(from 0deg, rgba(4,115,239,0) 0%, #0473EF 20%, #FF7200 80%, rgba(255,114,0,0) 100%)";

            return (
              <div
                key={index}
                className={card.span}
                style={{ perspective: "1200px" }}
              >
                <motion.div
                  initial={{ opacity: 0, rotateY: -35, scale: 0.95 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  style={{ transformOrigin: "left" }}
                  transition={{
                    duration: 2.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: (index % 3) * 0.15,
                  }}
                  className="relative group rounded-3xl p-[1px] bg-white/5 overflow-hidden h-full w-full"
                >
                  <motion.div
                    className="absolute inset-[-150%] z-0"
                    style={{
                      background: trailGradient,
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10 h-full w-full bg-[#0a0a0a] rounded-[calc(1.5rem-1px)] flex flex-col overflow-hidden">
                    <div className="z-20 p-6">
                      <h3 className="text-3xl font-iceland text-gray-200 group-hover:text-white mb-2 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-snug max-w-[90%]">
                        {card.desc}
                      </p>
                    </div>

                    <div className="relative flex-1 flex justify-center items-end overflow-hidden">
                      <div
                        className={`absolute -bottom-10 w-full h-32 blur-[70px] pointer-events-none ${
                          isEven ? "bg-blue-600/30" : "bg-blue-600/30"
                        }`}
                      />

                      <motion.img
                        whileHover={{ y: -10 }}
                        src={card.img}
                        alt={card.title}
                        className="relative z-10 max-h-[220px] w-auto object-contain transition-transform duration-500 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      />
                    </div>

                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-[50px] pointer-events-none"></div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
