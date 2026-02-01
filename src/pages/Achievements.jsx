import React from "react";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievement = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2500,

  slidesToShow: 1,   // ✅ single image everywhere
  slidesToScroll: 1,

  // optional: you can even remove responsive completely
};




  return (
    <section
      id="achievements"
      className="w-full overflow-x-hidden py-16"
    >
      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-bold text-2xl mb-10"
        >
          Achievements through the{" "}
          <span className="font-semibold">journey</span>
        </motion.h2>

        <Slider {...settings}>
          {[img1, img2, img3, img1, img2, img3].map((img, index) => (
            <div key={index}>
              <div className="px-3">
                <motion.img
                  src={img}
                  alt="achievement"
                  className="w-full h-[250px] object-cover rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default Achievement;
