import { motion } from "framer-motion";

const SolutionsMarquee = () => {
  const items = [
    "WEB DEVELOPMENT",
    "SOFTWARE DEVELOPMENT",
    "UI/UX DESIGN",
    "MOBILE APP DEVELOPMENT",
    "ERP SOLUTIONS",
  ];

  // List ko double kar dete hain seamless loop ke liye
  const doubledItems = [...items, ...items];

  return (
    <div className="bg-black overflow-hidden whitespace-nowrap relative">
      {/* Top Heading */}
      <div className="text-center mb-10">
        <h2 className="font-iceland text-3xl md:text-5xl text-white">
          <span className="text-[#0066FF]  relative inline-block">
            Solutions
            <span className="absolute bottom-0 left-0 w-full h-[3px] ">
              <img
                src="/Group5.svg"
                alt="Underline"
                className="w-full object-contain"
              />
            </span>
          </span>{" "}
          We Deliver
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="flex justify-center w-full my-10">
        {/* max-w-4xl se width choti ho jayegi, aap 5xl bhi try kar sakte hain */}
        <div className="overflow-hidden whitespace-nowrap max-w-4xl mx-auto border-y border-white/5 py-4">
          <motion.div
            className="flex items-center gap-10 md:gap-20"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 15, // Items kam hain toh speed 15s thik rahegi
              repeat: Infinity,
            }}
          >
            {doubledItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <span className="text-orange-500 text-2xl md:text-3xl">✦</span>

                <span className="text-gray-400 font-iceland text-lg md:text-2xl tracking-widest uppercase hover:text-white transition-colors cursor-default">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fade effect on sides (Optional: side edges ko smooth karne ke liye) */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  );
};

export default SolutionsMarquee;
