import React from "react";
import img from "../assets/s2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
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
          About <span className="font-semibold">Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt="About"
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-700"
          >
            <h3 className="text-xl font-semibold">
              We are the best at what we do
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit
              pariatur cumque qui ad dolorum, laborum excepturi optio fugit
              dolorem!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit
              pariatur cumque qui ad dolorum, laborum excepturi optio fugit
              dolorem!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit
              pariatur cumque qui ad dolorum, laborum excepturi optio fugit
              dolorem!
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
