import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Join Our Tutor Community
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Are you a tutor looking for teaching opportunities? Join our WhatsApp
          community to connect with us, receive job updates, and collaborate
          with other educators.
        </motion.p>

        {/* Button */}
        <motion.a
          href="https://chat.whatsapp.com/FCOGxzla0EY9srKQ1FyP1X"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          Join WhatsApp Community
        </motion.a>

        {/* Small text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-500"
        >
          Connect with tutors and explore new teaching opportunities
        </motion.p>

      </div>
    </section>
  );
};

export default CTA;