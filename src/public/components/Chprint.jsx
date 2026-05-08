
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./../components/Chprint.css";

const images = [
  "video/0409.mp4",
  "video/IMG_1927 (1) (1).mp4",
  "video/Video-107.mp4",
  "video/Video-647.mp4",
  "video/WhatsApp Video 2026-04-10 at 4.31.33 PM.mp4",

];

const ChoosePrint = () => {
  const { t } = useTranslation();

  return (
    <div className="relative max-w-[100vw] bg-black py-4 sm:py-20 overflow-hidden z-0">

      {/* Mobile view */}
      <div className="block mx-4 md:hidden text-center max-w-xl h-auto bg-black  rounded-md shadow px-2 py-6">
        <h2 className="text-base font-semibold text-[#00AFEF] font-jura">
          {t("Choose Your Print –")}{" "}
          <span className="text-[#ED008D]">{t("Your Way, Your Style")}</span>
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-snug font-poppins whitespace-nowrap">
          {t("Whether it's a single page or a full booklet, we let")} <br />
          {t("you customize every detail. Customize size, paper,")} <br />
          {t("color & quantity. Just one step to perfect prints.")}
        </p>
      </div>

      <div className="swiper">
        <motion.div
          className="scroll-wrapper  flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
          ].map((src, i) => (
            <video
              key={i}
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-48 sm:w-72 md:w-56 lg:w-60 h-[500px] sm:h-[520px] md:h-[560px] rounded-xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ChoosePrint;
