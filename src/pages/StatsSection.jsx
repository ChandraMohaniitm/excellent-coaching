import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const StatItem = ({ targetValue, label, suffix = "+" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, targetValue, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [targetValue, count, rounded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-8 rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">
        {displayValue}{suffix}
      </h2>
      <p className="text-gray-800 text-sm md:text-base font-semibold uppercase tracking-wide text-center">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 3500, label: "Active Learners" },
    { value: 4000, label: "Expert Tutors" },
    { value: 20, label: "Cities Covered" },
    { value: 5000, label: "Happy Customers" },
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We empower students and tutors to grow together through education and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatItem key={idx} targetValue={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;