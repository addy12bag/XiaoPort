import React, { useState, useEffect, useCallback } from "react";

import Orb from "./components/Orb";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import { playUiSound, bgMusic } from "./utils/sounds";   // ✅ BACKGROUND MUSIC FIXED

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [cursorPos, setCursorPos] = useState({ x: 0.5, y: 0.3 });
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleMouseMove = useCallback((e) => {
    setCursorPos({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  // --------------------------------------------
  // 🔊 BACKGROUND MUSIC FIRST-CLICK AUTOPLAY FIX
  // --------------------------------------------
  useEffect(() => {
    const startMusic = () => {
      if (soundEnabled) {
        bgMusic.play().catch(() => {});
      }
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => window.removeEventListener("click", startMusic);
  }, [soundEnabled]);

  // --------------------------------------------
  // Detect active section on scroll
  // --------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id);
        if (!el) return { id: section.id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: section.id, offset: Math.abs(rect.top) };
      });

      offsets.sort((a, b) => a.offset - b.offset);

      if (offsets[0] && offsets[0].id !== activeSection) {
        setActiveSection(offsets[0].id);
        playUiSound("section", soundEnabled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, soundEnabled]);

  // --------------------------------------------
  // Scroll + click sound
  // --------------------------------------------
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    playUiSound("click", soundEnabled);
  };

  // --------------------------------------------
  // Toggle sound + background music
  // --------------------------------------------
  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const enabled = !prev;

      if (enabled) {
        bgMusic.play().catch(() => {});
      } else {
        bgMusic.pause();
      }

      return enabled;
    });
  };

  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <Orb cursorPos={cursorPos} activeSection={activeSection} />

      <NavBar
        activeSection={activeSection}
        onNavClick={scrollToSection}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      <main>
        <Hero onViewProjects={() => scrollToSection("projects")} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
