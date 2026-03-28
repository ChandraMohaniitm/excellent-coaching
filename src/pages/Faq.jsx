import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why to choose our platform?",
      answer: "We offfer best quality tutors and best learning experience to students. We taught more than 10000 students and we have 100% satisfaction rate. We have tutors for all subjects and all levels. We have flexible scheduling and affordable pricing."
    },
    {
      question: "How do I book a tutor for Demo class?",
      answer: "To book a tutor for a demo class, simply click on the 'Find Tutor' or 'Contact Us' and fill out the form with your requirements. Our team will get back to you within 24 hours to schedule your demo session."
    },
    {
      question: "Is Demo class free?",
      answer: "Yes, our demo classes are completely free of charge. You can experience our teaching methodology and interact with our tutors without any commitment."
    },
    {
      question: "What if I am not satisfied with the demo class?",
      answer: "We have tons of tutors and we are sure that you will find the best tutor for you. If you are not satisfied with the demo class, please let us know and we will be happy to arrange another demo session with a different tutor."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Find answers to common questions about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              layout
              className={`border rounded-2xl overflow-hidden ${
                activeIndex === index 
                  ? "bg-gradient-to-r from-indigo-50 to-white border-indigo-400 shadow-md" 
                  : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-5 text-left text-lg font-medium text-gray-900 focus:outline-none"
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-gray-500`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-700"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;