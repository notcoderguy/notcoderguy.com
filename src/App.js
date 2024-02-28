import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    const page = document.querySelector('.page');
    page.classList.add('page-transition-enter');
    const animationDuration = 500;
    setTimeout(() => {
      page.classList.remove('page-transition-enter');
    }, animationDuration);
  }, [location.pathname]);

  return (
    <div className="page bg-base-100 text-primary-content font-poppins selection:bg-primary scrollbar-hide selection:text-primary-content flex flex-col max-w-7xl mx-2 mb-2 xl:mb-0 2xl:mb-0 xl:mx-auto 2xl:mx-auto 2xl:min-h-screen max-h-fit 2xl:max-h-screen overflow-hidden">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/thank-you" element={<ThankYou />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;