import React from "react";
import img from "../assets/s2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            About <span className="text-blue-600">US</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={img}
                alt="Excellent Coaching Students"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative Design Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-700/20 rounded-3xl -rotate-6"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Expert Mentorship for Proven Results
            </h3>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                As the region's largest and most trusted home coaching provider, 
                we bring the classroom to your doorstep. We take immense pride in 
                our legacy, having mentored District Toppers in Board Examinations 
                and consistently producing School Toppers year after year.
              </p>

              <p>
                Beyond academics, we specialize in preparing students for high-stakes 
                Competitive Exams. Our approach combines rigorous practice with 
                personalized attention, ensuring every student reaches their full potential.
              </p>

              <p className="font-medium text-gray-900">
                We don't just teach—we inspire. We love what we do, and we are simply 
                the best at it.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "District & School Toppers",
                "Best-in-Class Educators",
                "Competitive Exam Specialists",
                "Personalized Home Learning",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;