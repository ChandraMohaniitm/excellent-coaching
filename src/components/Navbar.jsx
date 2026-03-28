import React, { useState } from "react";
import logo from "../assets/logoo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleScroll("home")}
        >
          <div className="relative">
             <img src={logo} alt="Logo" className="w-12 h-11 rounded-full z-10 relative" />
             <div className="absolute inset-0 bg-yellow-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-full"></div>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter uppercase">
            Excellent <span className="text-blue-600">Coaching</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-gray-800 text-[12px] font-semibold uppercase tracking-widest">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="relative cursor-pointer hover:text-blue-600 transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to Action Button (Hidden on mobile) */}
        <button className="hidden lg:block bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-blue-600 transition-all shadow-md active:scale-95">
          Join Now
        </button>

        {/* Mobile Menu Icon */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-gray-800 cursor-pointer p-2 bg-white rounded-lg shadow-sm"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 /> : <GiHamburgerMenu />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <ul className="flex flex-col gap-1 p-6">
              {menuItems.map((item, i) => (
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-xl font-black text-gray-600 border-b border-gray-50 py-3 flex justify-between items-center group active:text-blue-600"
                >
                  {item.name}
                  <span className="text-blue-600 opacity-0 group-active:opacity-100">→</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;