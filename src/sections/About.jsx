import React from "react";
import myPhoto from "../assets/my-photo.jpeg";

function About() {
  return (
    <section id="about" className="section about">
      {/* 1. MAIN HEADER for the entire ABOUT/EDUCATION section */}
      <div className="section-header">
        <h2>About Me</h2>
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

        {/* 2. EDUCATION SECTION START 
          (Must be wrapped in timeline-section-wrapper for grid spanning and alignment)
        */}
        <div className="timeline-section-wrapper">
          <div className="timeline-box">
            <h3>Education</h3>

            <div className="timeline">
              
              {/* Timeline Items (unchanged) */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2025 – Present</div>
                <div className="timeline-content">
                  <h4>M.Tech in Intelligent Automation & Robotics</h4>
                  <p>Jadavpur University · Kolkata</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2021 – 2025</div>
                <div className="timeline-content">
                  <h4>B.Tech in Computer Science & Engineering</h4>
                  <p>Ramkrishna Mahato Govt. Engineering College</p>
                  <p>CGPA: 8.15 / 10</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2020 – 2021</div>
                <div className="timeline-content">
                  <h4>Higher Secondary Education</h4>
                  <p>Vidyanagar Multi Purpose School · 78%</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2019</div>
                <div className="timeline-content">
                  <h4>Secondary Education</h4>
                  <p>Vidyanagar Multi Purpose School · 75%</p>
                </div>
              </div>
              {/* End Timeline Items */}

            </div>
          </div>
        </div>
        {/* 3. EDUCATION SECTION END */}

      </div>
    </section>
  );
}

export default About;