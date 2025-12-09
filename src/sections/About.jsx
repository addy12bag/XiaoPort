import React from "react";
import myPhoto from "../assets/my-photo.jpeg";

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-header">
        <h2>About & Education</h2>
        <p className="section-subtitle">
          Signal from the creator — who I am, what I build, and how I think.
        </p>
      </div>

      <div className="about-grid">

        {/* ---- Photo ---- */}
        <div className="about-photo">
          <img src={myPhoto} alt="Sayantan Bag" className="about-img" />
        </div>

        {/* ---- About Text ---- */}
        <div className="about-text">
          <p>
            I’m a Full Stack Developer & AI/ML Engineer with 4+ years of
            experience building intelligent applications, automation systems,
            and scalable software solutions. I've completed over 10+ real-world
            projects across machine learning, deep learning, web development,
            and robotics.
          </p>

          <p>
            My expertise spans image processing, audio diagnostics, sensor-based
            systems, and end-to-end application engineering. I combine
            creativity with engineering discipline—writing clean, maintainable
            code, crafting meaningful user experiences, and solving impactful
            problems with AI-driven technologies.
          </p>
        </div>

        {/* ---- Education ---- */}
        <div className="about-education">
          <h3>Education</h3>
          <ul>
            <li>
              <span className="edu-period">2025 – Present</span>
              <div className="edu-details">
                <strong>M.Tech in Intelligent Automation & Robotics</strong>
                <span>Jadavpur University · Kolkata</span>
              </div>
            </li>

            <li>
              <span className="edu-period">2021 – 2025</span>
              <div className="edu-details">
                <strong>B.Tech in Computer Science & Engineering</strong>
                <span>Ramkrishna Mahato Govt. Engineering College</span>
                <span>CGPA: 8.15 / 10</span>
              </div>
            </li>

            <li>
              <span className="edu-period">2020 – 2021</span>
              <div className="edu-details">
                <strong>Higher Secondary Education</strong>
                <span>Vidyanagar Multi Purpose School · 78%</span>
              </div>
            </li>

            <li>
              <span className="edu-period">2019</span>
              <div className="edu-details">
                <strong>Secondary Education</strong>
                <span>Vidyanagar Multi Purpose School · 75%</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;
