import React from "react";

function Hero({ onViewProjects }) {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <p className="hero-eyebrow">
          Driven by a Self-Learning Neural Orb Engine 🤖⚡
        </p>

        <h1 className="hero-title">Sayantan Bag</h1>

        <p className="hero-role">
          Full Stack Developer | ML Engineer | Intelligent Automation & Robotics
        </p>

        <p className="hero-tagline">
          A portfolio from the near future — minimal, intelligent, and guided by a living AI orb.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onViewProjects}>
            View Projects
          </button>

          <a href="#contact" className="btn btn-ghost">
            Open a Channel
          </a>
        </div>
      </div>

      {/* STATUS BOX WITH TYPEWRITER */}
      <div className="hero-status-row">
        <div className="orb-status-box">
          <span className="typewriter">
            Orb Status: Online · Observing your scroll pattern in real-time.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
