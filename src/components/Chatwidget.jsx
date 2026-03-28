import React, { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import ReactMarkdown from "react-markdown";
import logo from "../assets/logoo.png";

const Chatwidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hi! Welcome to **Excellent Coaching**.\n\nI'm your virtual assistant. How can I help you excel today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (optionText, aiResponse) => {
    if (isTyping) return; // Prevent spamming while "typing"

    // 1. Add User's selection to chat
    const userMsg = { id: Date.now(), sender: "user", text: optionText };
    setMessages((prev) => [...prev, userMsg]);

    // 2. Trigger AI typing state
    setIsTyping(true);

    // 3. Delay AI response for realism
    setTimeout(() => {
      const aiMsg = { id: Date.now() + 1, sender: "ai", text: aiResponse };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden bottom-0 right-0 w-full h-[80vh] rounded-t-2xl md:bottom-5 md:right-5 md:w-[350px] md:h-[500px] md:rounded-xl border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-600 px-4 py-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={logo} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="logo" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <p className="text-white font-bold text-sm tracking-wide">Excellent Coaching</p>
            <p className="text-blue-100 text-[11px] font-medium">Active</p>
          </div>
        </div>
        <RxCross2 onClick={onClose} className="text-white text-xl cursor-pointer hover:rotate-90 transition-all duration-300" />
      </div>

      {/* Chat Body */}
      <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 scroll-smooth">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
              msg.sender === "user" 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-white border border-gray-200 text-gray-800 rounded-tl-none prose prose-sm"
            }`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 px-4 py-2 rounded-2xl rounded-tl-none">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </span>
            </div>
          </div>
        )}

        {/* Floating Options Container */}
        <div className="space-y-2 pt-2">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest px-1">Quick Actions</p>
          <button
            onClick={() => handleOptionClick(
              "Who we are", 
              "## **About Excellent Coaching** \n\nWe provide **premium 1-on-1 coaching** for students of all grades. Our mission is to bridge the gap between classroom learning and real-world mastery through expert tutors."
            )}
            className="w-full text-left bg-white border border-blue-100 rounded-lg px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            Who we are
          </button>

          <button
            onClick={() => handleOptionClick(
              "How it works", 
              "The Simple Process\n\n1. **Book a Free Demo**: Experience our teaching style with a no-obligation demo session.\n2. **Continue if Perfect**: If you're satisfied, continue with regular sessions."
            )}
            className="w-full text-left bg-white border border-blue-100 rounded-lg px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            How it works
          </button>

          <button
            onClick={() => handleOptionClick(
              "Book a Demo", 
              "Great choice!\n\nPlease fill out the 'Find Tutors' or 'Contact Us' form to book your **Free Demo**. We’ll get back to you ASAP "
            )}
            className="w-full text-left bg-white border border-blue-100 rounded-lg px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            Book a Demo Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatwidget;