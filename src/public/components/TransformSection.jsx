import React from "react";

const TransformSection = () => {
  return (
    <div className="bg-[#030712] min-h-screen flex items-center justify-center py-20 px-6 md:px-16 relative overflow-hidden font-sans">
      <div className="absolute top-12 right-16 flex flex-col items-end hidden md:flex">
        <div className="flex items-center gap-4">
          <div className="w-16 h-[1px] bg-gray-700"></div>
          <span className="text-gray-400 text-xs tracking-[0.2em] uppercase">
            Start Today
          </span>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 relative z-10">
          <div className="w-16 h-[2px] bg-blue-600 mb-8"></div>

          <h1 className="text-[3rem] md:text-[5rem] font-bold text-white leading-[1.1] tracking-wide font-mono">
            Ready to <br />
            <span className="text-[#007BFF]">Transform</span> <br />
            Your Business?
          </h1>

          <div className="w-full max-w-md h-[1px] border-b border-dashed border-blue-500/40 my-6"></div>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Join thousands of businesses already growing with our platform. No
            credit card required. Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex items-center gap-4">
              <button className="bg-[#FF6B00] hover:bg-[#e66000] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-[0_4px_14px_rgba(255,107,0,0.4)]">
                Start Project
              </button>
              <button className="bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-blue-500 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                View Projects
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#84cc16] border-2 border-[#030712]"></div>
                <div className="w-8 h-8 rounded-full bg-[#3b82f6] border-2 border-[#030712]"></div>
                <div className="w-8 h-8 rounded-full bg-[#a855f7] border-2 border-[#030712]"></div>
                <div className="w-8 h-8 rounded-full bg-[#f97316] border-2 border-[#030712]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">
                  10,000+ Happy Users
                </span>
                <span className="text-gray-500 text-xs">5-star rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-16 lg:mt-0">
          <div className="relative z-10 w-[269px] h-[371px] border-[6px] border-[#007BFF] rounded-3xl overflow-hidden shadow-[0px_0px_56.4px_0px_#FFA033]">
            <img
              src="/Rectangle40259.svg"
              alt="App Preview"
              className="w-full h-full object-cover"
            />

            {/* Placeholder fallback if image is missing (matches the dark vibe) */}
            <div className="absolute inset-0 bg-[#0a0f1c] -z-10 flex items-center justify-center text-xs text-gray-600">
              Image Placeholder
            </div>
          </div>

          <div className="absolute top-1/2 -right-16 w-3 h-3 border border-blue-500 rotate-45 hidden lg:block"></div>
        </div>
      </div>

      <div className="absolute bottom-12 right-16 flex items-center gap-32 hidden md:flex">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="w-24 h-[2px] bg-blue-600"></div>
      </div>
    </div>
  );
};

export default TransformSection;
