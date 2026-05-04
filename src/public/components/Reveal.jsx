import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Reveal = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cursorRef = useRef(null);
  const columns = 20;

  useEffect(() => {
    // Custom Cursor Movement
    const onMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    // Opening Sequence
    const tl = gsap.timeline();
    tl.to(".loader-ui-container", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 2.8,
      ease: "power3.inOut",
    }).to(
      ".curtain-col",
      {
        scaleY: 0,
        duration: 1.4,
        stagger: { each: 0.04, from: "start" },
        ease: "expo.inOut",
        onComplete: () => setIsLoaded(true),
      },
      "-=0.3",
    );

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden cursor-none font-sans text-white">
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />

      {/* SHUTTER CURTAIN & LOADER */}
      <div className="absolute inset-0 z-50 flex pointer-events-none">
        {[...Array(columns)].map((_, i) => (
          <div
            key={i}
            className="curtain-col flex-1 h-full origin-top pointer-events-auto border-r border-white/[0.03] relative"
            style={{
              background:
                "linear-gradient(180deg, #020617 0%, #0f172a 60%, #1e3a8a 100%)",
            }}
          >
            {/* Subtle glow at the bottom of the curtains */}
            <div
              className="absolute bottom-0 left-0 w-full h-[30%] opacity-40"
              style={{
                background:
                  "radial-gradient(circle at bottom, #f97316 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>
        ))}

        {!isLoaded && (
          <div className="loader-ui-container absolute inset-0 flex flex-col items-center justify-center z-[60] pointer-events-none">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-blue-600 rounded-xl animate-[spin3d_3s_linear_infinite]" />
              <div className="absolute inset-2 border-4 border-orange-500 rounded-xl animate-[spin3d_2s_linear_infinite_reverse]" />
            </div>
            <p className="mt-12 text-white/40 font-bold tracking-[0.8em] text-[10px] uppercase">
              Loading
            </p>
          </div>
        )}
      </div>

      {/* GLOBAL STYLES */}
      <style jsx>{`
        @keyframes spin3d {
          from {
            transform: perspective(500px) rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: perspective(500px) rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Reveal;
