import React from "react";

function Orb({ cursorPos, activeSection }) {
  const sectionOffsets = {
    hero: { x: 40, y: 10 },
    about: { x: 70, y: 25 },
    skills: { x: 30, y: 35 },
    projects: { x: 65, y: 45 },
    contact: { x: 50, y: 60 },
  };

  const base = sectionOffsets[activeSection] || sectionOffsets.hero;

  const translateX = base.x + (cursorPos.x - 0.5) * 20;
  const translateY = base.y + (cursorPos.y - 0.5) * 20;

  return (
    <div
      className="orb-wrapper"
      aria-hidden="true"
      style={{
        transform: `translate3d(${translateX}vw, ${translateY}vh, 0)`,
      }}
    >
      <div className="orb-core">
        <div className="orb-inner-glow" />
        <div className="orb-pulse" />
      </div>
    </div>
  );
}

export default Orb;
