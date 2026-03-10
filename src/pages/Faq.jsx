import React, { useState } from 'react';

const Faq = () => {
  // Track which accordion is open by its index. Null means all are closed.
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. We will send a secure link to your registered email address to create a new one."
    },
    {
      question: "How do I update my billing information?",
      answer: "Navigate to your Account Settings and select the 'Billing' tab. From there, you can update your credit card details, billing address, and view past invoices."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team via the live chat icon in the bottom right corner, or by emailing support@example.com. We typically respond within 24 hours."
    },
    {
      question: "How do I delete my account?",
      answer: "Account deletion can be requested through the 'Privacy' section of your profile. Please note that this action is permanent and all data will be removed."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl text-center font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`border border-gray-200 rounded-xl transition-all duration-300 ${
                activeIndex === index ? 'bg-indigo-50 border-indigo-600' : 'bg-white'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-5 text-left text-lg font-medium text-gray-900"
              >
                <span>{item.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-indigo-600' : 'text-gray-500'
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 border-t border-gray-200 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;