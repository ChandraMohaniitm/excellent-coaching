import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I reset my password?",
      answer: "Click 'Forgot Password' on the login page. We'll send a secure link to your registered email to reset it."
    },
    {
      question: "How do I update my billing information?",
      answer: "Go to Account Settings → Billing. Update your credit card details, billing address, or view past invoices."
    },
    {
      question: "How can I contact customer support?",
      answer: "Reach us via live chat in the bottom-right corner or email support@example.com. Response typically within 24 hours."
    },
    {
      question: "How do I delete my account?",
      answer: "Request account deletion in the 'Privacy' section of your profile. This action is permanent and all data will be removed."
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