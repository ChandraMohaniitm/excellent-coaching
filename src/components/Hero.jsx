import React, { useState } from "react";
import hero from "../assets/hero.jpg";
import FindTutorModal from "./FindTutorModal";
import { motion } from "framer-motion";

const Hero = () => {
  const [showTutorModal, setShowTutorModal] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative h-[90vh] w-full overflow-x-hidden bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/70" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Study anywhere, anytime <br />
            with expert educators
          </h1>

          <p className="text-gray-200 mt-4 text-base md:text-lg">
            Learn from industry experts and boost your career with flexible
            online education.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-amber-500 hover:bg-amber-600 transition text-white px-6 py-3 rounded-full font-medium"
            >
              Contact
            </button>

            <button
              onClick={() => setShowTutorModal(true)}
              className="border border-white text-white hover:bg-white hover:text-blue-900 transition px-6 py-3 rounded-full font-medium"
            >
              Find Tutor
            </button>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <FindTutorModal
        open={showTutorModal}
        onClose={() => setShowTutorModal(false)}
      />
    </>
  );
};

export default Hero;
