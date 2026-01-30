import React from "react";
import logo from "../assets/logoo.png";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full overflow-x-hidden bg-blue-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={logo} className="w-14 h-14 mb-4" alt="logo" />
          <p className="text-sm leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
            iste!
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-lg mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li
              onClick={() => scrollTo("home")}
              className="cursor-pointer hover:text-amber-400 transition"
            >
              Home
            </li>
            <li
              onClick={() => scrollTo("achievements")}
              className="cursor-pointer hover:text-amber-400 transition"
            >
              Achievements
            </li>
            <li
              onClick={() => scrollTo("about")}
              className="cursor-pointer hover:text-amber-400 transition"
            >
              About
            </li>
            <li
              onClick={() => scrollTo("contact")}
              className="cursor-pointer hover:text-amber-400 transition"
            >
              Contact
            </li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold text-lg mb-4">Connect with us</p>

          <div className="flex gap-4">
            <a className="hover:text-amber-400 transition cursor-pointer">
              <FaWhatsapp size={20} />
            </a>
            <a className="hover:text-amber-400 transition cursor-pointer">
              <FaLinkedinIn size={20} />
            </a>
            <a className="hover:text-amber-400 transition cursor-pointer">
              <CiMail size={22} />
            </a>
            <a className="hover:text-amber-400 transition cursor-pointer">
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Excellent Coaching. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
