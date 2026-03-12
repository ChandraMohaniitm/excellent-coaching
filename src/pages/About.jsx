import React from "react";
import img from "../assets/s2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We connect passionate tutors with students and provide
            opportunities for educators to grow their teaching careers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={img}
              alt="About us"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-2xl opacity-20"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Empowering Tutors & Students
            </h3>

            <p className="text-gray-600 mb-4">
              Our platform helps talented tutors connect with students who are
              eager to learn. We believe education should be accessible,
              collaborative, and empowering for everyone.
            </p>

            <p className="text-gray-600 mb-6">
              Through our growing community, tutors receive teaching
              opportunities, career growth, and a network of educators working
              together to make learning better.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">

              <div className="flex items-center gap-2">
                ✅ Verified Tutors
              </div>

              <div className="flex items-center gap-2">
                📚 Teaching Opportunities
              </div>

              <div className="flex items-center gap-2">
                🌍 Growing Community
              </div>

              <div className="flex items-center gap-2">
                🚀 Career Growth
              </div>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;