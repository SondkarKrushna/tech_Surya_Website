// import React, { useState } from "react";

// const InsightsSection = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   const cards = [
//     {
//       id: 1,
//       title: "Top Web \nDevelopment \nTrends in 2026",
//       description:
//         "Discover the latest technologies shaping modern web development and how businesses can leverage them.",
//       category: "Web Development",
//     },
//     {
//       id: 2,
//       title: "Top Web \nDevelopment \nTrends in 2026",
//       description:
//         "Discover the latest technologies shaping modern web development and how businesses can leverage them.",
//       category: "Web Development",
//     },
//     {
//       id: 3,
//       title: "Top Web \nDevelopment \nTrends in 2026",
//       description:
//         "Discover the latest technologies shaping modern web development and how businesses can leverage them.",
//       category: "Web Development",
//     },
//   ];

//   return (
//     <div className="bg-[#050505] min-h-screen py-20 px-4 md:px-12 flex flex-col items-center font-sans text-white overflow-hidden">

//       {/* 1. Top Badge */}
//       <div className="rounded-full p-[1px] bg-gradient-to-r from-gray-600 via-gray-700 to-[#a34c24] mb-10 shadow-lg">
//         <div className="bg-[#050505] rounded-full px-5 py-1.5 flex items-center justify-center">
//           <span className="text-gray-300 text-sm tracking-wide font-dmsans">
//             Insights & Resources
//           </span>
//         </div>
//       </div>

//       {/* 2. Main Heading */}
//       <h2 className="text-3xl md:text-[42px] leading-snug font-iceland text-center max-w-5xl mb-20 tracking-wider">
//         Explore ideas, trends and expert insights on web
//         <br className="hidden md:block" />
//         development, apps, UI/UX and{" "}
//         <span className="text-[#0066FF]">digital technology</span>.
//       </h2>

//       {/* 3. Cards Grid */}
//       <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 w-full max-w-6xl">
//         {cards.map((card) => {
//           const isHovered = hoveredId === card.id;

//           return (
//             <div
//               key={card.id}
//               onMouseEnter={() => setHoveredId(card.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               onClick={() => setHoveredId(isHovered ? null : card.id)}
//               /* YAHAN FIX HAI:
//                  1. Border (bg): Blue top-left pe fade hoke khatam, middle me transparent, aur Orange bottom-right se start.
//                  2. Shadow: Negative spread (-10px) use kiya hai taaki shadow sirf corners se nikal kar aaye (Top-Left me Blue, Bottom-Right me Blue/Orange).
//               */
//               className={`relative w-full lg:w-1/3 rounded-[22px] p-[1.5px] transition-all duration-300 cursor-pointer
//                 ${
//                   isHovered
//                     ? "bg-[linear-gradient(135deg,rgba(4,115,239,0.9)_0%,rgba(4,115,239,0)_35%,109,0,0.8)_100%)] scale-105 z-10 shadow-[-25px_-15px_30px_-10px_rgba(4,115,239,0.5),15px_15px_30px_-10px_#0473EF]"
//                     : "bg-[#1f2229] z-0"
//                 }`}
//             >
//               {/* Inner Card Container */}
//               <div className="bg-[#12141a]/95 backdrop-blur-[4.3px] w-full h-full rounded-[20.5px] p-8 flex flex-col justify-between">

//                 {/* Card Content */}
//                 <div>
//                   <h3 className="text-2xl md:text-[28px] font-iceland font-semibold mb-6 whitespace-pre-line tracking-wide leading-tight">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-400 text-[13px] md:text-sm font-dmsans leading-relaxed mb-12 pr-4">
//                     {card.description}
//                   </p>
//                 </div>

//                 {/* Card Footer (Badge & Button) */}
//                 <div className="flex items-center justify-between mt-auto">
//                   <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-[#382015] to-[#25150f] border border-[#5c3521] text-[#cca58f] text-[10px] md:text-xs font-semibold tracking-wider font-dmsans">
//                     {card.category}
//                   </div>

//                   <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0066FF] hover:bg-blue-600 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(0,102,255,0.4)]">
//                     <svg
//                       width="18"
//                       height="18"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-white"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default InsightsSection;

import React, { useState } from "react";

const InsightsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Top Web \nDevelopment \nTrends in 2026",
      description:
        "Discover the latest technologies shaping modern web development and how businesses can leverage them.",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Top Web \nDevelopment \nTrends in 2026",
      description:
        "Discover the latest technologies shaping modern web development and how businesses can leverage them.",
      category: "Web Development",
    },
    {
      id: 3,
      title: "Top Web \nDevelopment \nTrends in 2026",
      description:
        "Discover the latest technologies shaping modern web development and how businesses can leverage them.",
      category: "Web Development",
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen py-20 px-4 md:px-12 flex flex-col items-center text-white overflow-hidden">
      {/* Top Badge */}
      <div className="w-[185px] h-[63px] rounded-full p-[1px] bg-gradient-to-b from-[#0473EF] to-[#FF7200] mb-8 shadow-lg shadow-[#0473EF]/10">
        <button className="w-full h-full rounded-full bg-[#050505] backdrop-blur-sm flex items-center justify-center text-base text-gray-300 hover:bg-[#0a0a0a] transition-colors duration-300 font-dmsans">
          Insights & Resources
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-[42px] leading-snug text-center max-w-5xl mb-20 tracking-wider font-iceland">
        Explore ideas, trends and expert insights on web
        <br className="hidden md:block" />
        development, apps, UI/UX and{" "}
        <span className="text-[#0066FF]">digital technology</span>.
      </h2>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 w-full max-w-6xl">
        {cards.map((card) => {
          const isHovered = hoveredId === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative w-full lg:w-1/3 rounded-[22px] p-[1.5px] transition-all duration-300 cursor-pointer
                ${
                  isHovered
                    ? "bg-[linear-gradient(135deg,#0473EF_0%,transparent_35%,transparent_60%,#FF7200_100%)] scale-105 z-10 shadow-[-15px_-15px_20px_-15px_rgba(4,115,239,0.6),15px_15px_20px_-15px_rgba(255,114,0,0.3)]"
                    : "bg-[#1f2229]"
                }`}
            >
              {/* Inner Card */}
              <div className="bg-[#12141a]/95 backdrop-blur-[4px] w-full h-full rounded-[20px] p-8 flex flex-col justify-between">
                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-[28px] font-semibold mb-6 whitespace-pre-line tracking-wide leading-tight font-iceland">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-12 pr-4 font-dmsans">
                    {card.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  {/* Category */}
                  <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-[#382015] to-[#25150f] border border-[#5c3521] text-[#cca58f] text-xs font-semibold tracking-wider font-iceland">
                    {card.category}
                  </div>

                  {/* Arrow Button */}
                  <button className="w-10 h-10 rounded-full bg-[#0066FF] hover:bg-blue-600 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(0,102,255,0.4)]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsSection;
