import React, { useState } from "react";
import logo from "../assets/logoo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Achievements", id: "achievements" },
  { name: "Find Tutor", id: "find-tutor" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-11 rounded-full"
          />
          <span className="text-2xl font-bold text-gray-700">
            Excellent Coaching
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 text-lg font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100 px-6 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 py-4 text-lg font-medium">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="cursor-pointer hover:text-yellow-400 transition"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
