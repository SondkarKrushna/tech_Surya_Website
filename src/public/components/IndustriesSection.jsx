import React from "react";

const industries = [
  {
    title: "HEALTHCARE",
    desc: "Appointment systems, healthcare dashboards and management solutions.",
  },
  {
    title: "E-COMMERCE & RETAIL",
    desc: "Online stores, inventory systems and shopping platforms.",
  },
  {
    title: "EDUCATION & E-LEARNING",
    desc: "Learning platforms, student portals and course management systems.",
  },
  {
    title: "REAL ESTATE",
    desc: "Property listing platforms and CRM solutions for real estate businesses.",
  },
  {
    title: "FINANCE & FINTECH",
    desc: "Billing systems,financial dashboards and secure transactions platforms.",
  },
  {
    title: "HOSPITALITY & HOTELS",
    desc: "Hotel management systems, booking apps and guest experience platforms."
  }
];

const Card = ({ item }) => (
  <div className="min-w-[260px] max-w-[260px] h-[140px] bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 mx-2 flex flex-col justify-center overflow-hidden">
    <h3 className="text-[15px] tracking-[2px] text-white font-iceland mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
      {item.title}
    </h3>

    <p className="text-[#BCBCBC] font-sans text-[15px] text-wrap">
      {item.desc}
    </p>
  </div>
);

const MarqueeRow = ({ reverse = false }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap mt-10">
      <div
        className={`flex w-max animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
      >
        {[...industries, ...industries].map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const IndustriesSection = () => {
  return (
    <section className="bg-black text-white py-16 font-iceland">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-iceland text-4xl md:text-5xl text-white tracking-wide pb-10">
          We build scalable digital solutions tailored for <br /> diverse
          industries and{" "}
          <span className="text-[#0066FF] relative inline-block">
            business needs
            <span className="absolute bottom-0 left-0 w-full h-[3px] ">
              <img
                src="/Group5.svg"
                alt="Underline"
                className="w-full object-contain"
              />
            </span>
          </span>
        </h2>
      
      </div>

      {/* Row 1 */}
      <MarqueeRow />

      {/* Row 2 */}
      <div className="mt-6">
        <MarqueeRow reverse />
      </div>
    </section>
  );
};

export default IndustriesSection;
