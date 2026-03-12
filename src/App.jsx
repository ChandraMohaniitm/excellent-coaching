import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatButton from "./components/ChatButton";
import Chatwidget from "./components/Chatwidget";
import About from "./pages/About";
import Achievement from "./pages/Achievements";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import StatsSection from "./pages/StatsSection"
import CTA from "./pages/CTA";
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />

      {/* Chat button */}
      <ChatButton onClick={() => setOpen(true)} />

      {/* Chat widget (render only when open) */}
      {open && <Chatwidget onClose={() => setOpen(false)} />}
      
      <StatsSection />
      <Achievement />
      <About />
      <CTA />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
