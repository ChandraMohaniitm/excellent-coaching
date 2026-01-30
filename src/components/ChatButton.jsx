import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

const ChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full rounded-full shadow-lg hover:scale-110 transition"
    >
      <BsChatDotsFill size={24} />
    </button>
  );
};

export default ChatButton;