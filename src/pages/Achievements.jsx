import React from "react";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievement = () => {
  const achievements = [
    { img: img1, title: "500+ Students Mentored" },
    { img: img2, title: "100+ Tutors Connected" },
    { img: img3, title: "Successful Learning Programs" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section id="achievements" className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Through our journey, we have helped students and tutors grow together in a strong learning community.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {achievements.map((item, idx) => (
            <div key={idx} className="px-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[360px] md:h-[400px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-6">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievement;