import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Socials from "./Socials";
import Projects from "./Projects";

import ThankYou from "./ThankYou";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white font-gilroy selection:bg-indigo-500 scrollbar-hide selection:text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/thank-you" element={<ThankYou />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;