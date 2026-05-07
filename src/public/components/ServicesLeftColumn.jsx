
import React from "react";

const ServicesLeftColumn = ({ services, currentIndex, totalServices }) => {
  const service = services[currentIndex];

  return (
    <div className="w-full pr-0 sm:pr-2 md:pr-6 mx-6 md:mx-0">

      {/* ── Progress dots ── */}
      <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-6 lg:mb-8 flex-wrap">
        {services.map((_, i) => (
          <div
            key={i}
            className={`h-[3px] rounded-full  transition-all duration-500 ${i === currentIndex
              ? "w-6 sm:w-8 bg-[#3b82f6]"
              : i < currentIndex
                ? "w-3 sm:w-4 bg-[#3b82f6] opacity-40"
                : "w-3 sm:w-4 bg-gray-700"
              }`}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div key={service.id} className="animate-fadeIn">
        {/* Category + Icon */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-14">
          <img
            src="/robot.gif"
            alt={`${service.category} Icon`}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain -ml-2 sm:-ml-4 md:-ml-7 flex-shrink-0"
          />
          <h2 className="text-lg sm:text-2xl md:text-[36px] lg:text-[46px] font-bold text-[#3b82f6] tracking-wide font-iceland leading-none">
            {service.category}
          </h2>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-xl md:text-[26px] lg:text-[30px] font-normal mb-8  sm:mb-12 uppercase font-dmsans leading-relaxed tracking-normal mt-3 " style={{ lineHeight: "normal" }}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-[13px] sm:text-[14px] md:text-[15px] mb-5 sm:mb-7 leading-relaxed max-w-lg font-dmsans">
          {service.description}
        </p>

        {/* You'll Get */}
        <div className="flex items-center gap-2 mb-3 sm:mb-5">
          <img src="/Vector.svg" alt="Check Icon" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          <span className="text-gray-500 font-normal text-base sm:text-xl md:text-2xl font-iceland pl-1 sm:pl-2">
            You'll Get
          </span>
        </div>

        {/* Benefits */}
        <ul className="space-y-2 sm:space-y-3 text-[12px] sm:text-[13px] md:text-[15px] text-gray-300 font-dmsans">
          {service.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-[#f97316] flex-shrink-0">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ServicesLeftColumn;