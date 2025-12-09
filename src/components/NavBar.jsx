import React from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function NavBar({ activeSection, onNavClick, soundEnabled, onToggleSound }) {
  return (
    <header className="nav">
      <div
        className="nav-left"
        onClick={() => onNavClick("hero")}
        style={{ cursor: "pointer" }}
      >
        <span className="nav-orb-dot" />
        <span className="nav-logo-text">SB • AI Orb Portfolio</span>
      </div>

      <nav className="nav-links">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-link ${
              activeSection === section.id ? "nav-link--active" : ""
            }`}
            onClick={() => onNavClick(section.id)}
          >
            {section.label}
          </button>
        ))}

        <button
          className={`nav-toggle-sound ${
            soundEnabled ? "nav-toggle-sound--on" : ""
          }`}
          onClick={onToggleSound}
        >
          {soundEnabled ? "Sound: On" : "Sound: Off"}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
