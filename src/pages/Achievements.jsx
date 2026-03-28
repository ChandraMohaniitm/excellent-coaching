import React, { useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";

const Achievement = () => {
  const scrollRef = useRef(null);

  const achievements = [
    { img: img1, title: "5000+ Students Mentored" },
    { img: img2, title: "4000+ Tutors Connected" },
    { img: img3, title: "100% Student Satisfaction" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // On mobile, clientWidth is the full width of one card
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="achievements" className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Achievements</span>
          </h2>
        </motion.div>

        {/* Mobile Navigation Arrows */}
        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 pointer-events-none md:hidden">
          <button 
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-white/90 shadow-xl pointer-events-auto active:scale-90 transition-transform"
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-white/90 shadow-xl pointer-events-auto active:scale-90 transition-transform"
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* Optimized Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 no-scrollbar"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-14px)] snap-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Achievement;