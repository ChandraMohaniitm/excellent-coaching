import React, { useState, useEffect } from "react";
import hero from "../assets/hero.jpg";
import FindTutorModal from "./FindTutorModal";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showTutorModal, setShowTutorModal] = useState(false);
  const [dynamicWord, setDynamicWord] = useState("anywhere");
  const words = ["anywhere", "anytime"];

  // Logic for the dynamic text switching
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDynamicWord((prev) => (prev === words[0] ? words[1] : words[0]));
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[85vh] md:h-[90vh] w-full overflow-hidden bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Modern Dark Overlay */}
        <div className="absolute inset-0 bg-blue-950/75 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative z-10 max-w-4xl px-6 md:px-12 pt-10"
        >
          {/* --- STYLISH FOUNDED BADGE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 mb-8 shadow-2xl"
          >
            {/* The Bouncing Ball (Pulsing Indicator) */}
            <motion.span 
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(251,191,36,1)]"
            />
            {/* High-Visibility P Tag */}
            <p className="text-xs md:text-sm font-black text-white uppercase tracking-[0.15em] drop-shadow-lg">
              Founded in <span className="text-amber-400">2018</span>
            </p>
          </motion.div>

          {/* MAIN HEADLINE with Dynamic Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Study{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={dynamicWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="text-amber-400 inline-block font-black min-w-[140px] md:min-w-[220px]"
              >
                {dynamicWord}
              </motion.span>
            </AnimatePresence>{" "}
            <br className="md:hidden" />
            with expert <span className="text-amber-400">educators</span>
          </h1>

          {/* SUBTEXT with 3s Delay Highlight Box */}
          <div className="relative mt-6 max-w-2xl">
            {/* Attention Gaining Highlight Box */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: 3, 
                duration: 1.2, 
                ease: [0.65, 0, 0.35, 1] 
              }}
              className="absolute -inset-x-3 -inset-y-1 bg-amber-400/20 rounded-lg z-0"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="relative z-10 text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-md"
            >
              Learn from industry experts and boost your career with flexible
              online education.
            </motion.p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-amber-500 hover:bg-amber-600 transition-all text-gray-950 px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl"
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTutorModal(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-950 transition-all px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest backdrop-blur-sm"
            >
              Find Tutor
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Modal Integration */}
      <FindTutorModal
        open={showTutorModal}
        onClose={() => setShowTutorModal(false)}
      />
    </>
  );
};

export default Hero;