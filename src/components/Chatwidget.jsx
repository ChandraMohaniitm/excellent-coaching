import React, { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import ReactMarkdown from "react-markdown";
import logo from "../assets/logoo.png";

const Chatwidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hi! Welcome to **Excellent Coaching**.\n\nHow can I help you today?",
    },
  ]);

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const addMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "ai",
        text,
      },
    ]);
  };

  return (
    <div
      className="
        fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden
        bottom-0 right-0 w-full h-[80vh] rounded-t-2xl
        md:bottom-5 md:right-5 md:w-[350px] md:h-[420px] md:rounded-xl
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-600 px-3 py-2">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8 h-8 rounded-full" alt="logo" />
          <div>
            <p className="text-white font-medium text-sm">Excellent Coaching</p>
            <p className="text-green-300 text-[10px]">online</p>
          </div>
        </div>

        <RxCross2
          onClick={onClose}
          className="text-white cursor-pointer hover:scale-90 transition"
        />
      </div>

      {/* Chat Body */}
      <div
        ref={scrollRef}
        className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-50"
      >
        {messages.map((msg) => (
          <div key={msg.id} className="flex justify-start">
            <div className="max-w-[90%] bg-white border rounded-xl px-3 py-2 text-sm prose prose-sm">
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}

        {/* OPTIONS (Always Visible) */}
        <div className="space-y-2 mt-4">
          <button
            onClick={() =>
              addMessage(
                `### 👨‍🏫 Who We Are\n\nExcellent Coaching helps students achieve academic and career success through expert guidance and personalized learning.\n\n_Lorem ipsum dolor sit amet, consectetur adipiscing elit._`
              )
            }
            className="w-full border rounded-lg px-3 py-2 text-sm hover:bg-blue-50 transition"
          >
            Who we are
          </button>

          <button
            onClick={() =>
              addMessage(
                `### ⚙️ How It Works\n\n1️⃣ **Contact Us**\n\n2️⃣ **Book a Free Demo Class**\n\n3️⃣ **Start learning with the tutor that fits you best**`
              )
            }
            className="w-full border rounded-lg px-3 py-2 text-sm hover:bg-blue-50 transition"
          >
            How it works
          </button>

          <button
            onClick={() =>
              addMessage(
                `### 📞 Contact Us\n\n👉 Fill the form on our website\n👉 Use **Find Tutor** option\n👉 Or reach us via the contact page\n\nWe’ll connect with you shortly 😊`
              )
            }
            className="w-full border rounded-lg px-3 py-2 text-sm hover:bg-blue-50 transition"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatwidget;
