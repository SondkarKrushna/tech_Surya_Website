import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 md:py-20 font-iceland">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        {/* Yahan Desktop ke liye wahi purana "flex justify-between" kaam karega, Mobile ke liye flex-col aur gap lagaya hai */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          {/* LEFT */}
          <div>
            <p className="text-gray-500 text-sm mb-6 tracking-widest">
              CONNECT US
            </p>

            {/* Desktop pe wahi text-4xl/5xl, Mobile pe text-3xl */}
            <h2 className="text-3xl md:text-5xl leading-snug">
              Interested in working together,
              <br />
              <span className="text-blue-500">trying our the platform</span> or
              <br />
              simply learning more?
            </h2>

            {/* <div className="mt-8 md:mt-10 text-sm text-gray-400 space-y-2">
              <p>Contact Hello at</p>
              <p className="text-white">office@techsuryaitsolution.com ↗</p>
              <p className="text-white">+91 9621345050 / +91 7843050560 ↗</p>
            </div> */}
            <div className="mt-8 md:mt-10 text-sm md:text-lg text-gray-400 space-y-2">
              <p>Contact Hello at</p>

              {/* Email */}
              <a
                href="mailto:office@techsuryaitsolution.com"
                className="text-white hover:text-blue-400 transition block"
              >
                office@techsuryaitsolution.com ↗
              </a>

              {/* Phone */}
              <a
                href="tel:+919621345050"
                className="text-white hover:text-blue-400 transition block"
              >
                +91 9621345050 ↗
              </a>

              {/* Second Phone */}
              <a
                href="tel:+917843050560"
                className="text-white hover:text-blue-400 transition block"
              >
                +91 7843050560 ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 md:gap-10 text-sm md:text-lg ">
            {/* TOP LINKS (Mobile pe wrap hongi, Desktop pe same) */}
            <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10 text-gray-400">
              <p>Services</p>
              <p>TechStack</p>
              <p>Features</p>
              <p>Team</p>
            </div>

            {/* ADDRESSES */}
            <div className="space-y-6 text-gray-400 max-w-md">
              {/* Main Branch */}
              <div>
                <p className="text-[#6A7282] mb-1">Main Branch Address</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Golden+City+Center+Prozone+Mall+Chhatrapati+Sambhajinagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-400 transition"
                >
                  Office No 217,222 Golden city center, Near Prozone Mall,
                  Chhatrapati Sambhajinagar
                </a>
              </div>

              {/* Nashik Branch */}
              <div>
                <p className="text-[#6A7282] mb-1">Nashik Branch Address</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=ABH+Capital+Rajiv+Gandhi+Bhavan+Tilakwadi+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-400 transition"
                >
                  Office No 601, ABH Capital Beside Rajiv Gandhi Bhavan,
                  Tilakwadi, Nashik
                </a>
              </div>

              {/* Branch Cities */}
              <div>
                <p className="text-[#6A7282] mb-1">Our Branches</p>
                <p className="text-white text-2xl">
                  Chhatrapati Sambhajinagar | Nashik | Pune
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left justify-center">
          <img
            src="/logotech.png"
            alt="logo"
            className="object-contain h-24 md:h-40"
          />

          {/* Big Text */}
          {/* Desktop ka font size bilkul wahi text-[170px] */}
          <h1 className="text-[60px] md:text-[170px] font-sans leading-none font-bold">
            <span className="text-orange-500">Tech</span>
            <span className="text-blue-500">Surya</span>
          </h1>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10 pt-6 border-t border-white/10 text-gray-500 text-sm md:text-base gap-4 md:gap-0">
          <p>© 2026 Techsurya It Solution. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/103906226/admin/analytics/followers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/company/103906226/admin/analytics/followers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
            <a
              href="https://www.instagram.com/techsuryaitsolutions/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
