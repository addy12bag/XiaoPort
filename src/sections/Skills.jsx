import React from "react";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-header">
        <h2>Skills</h2>
        <p className="section-subtitle">
          Tools, technologies, and systems I work with daily.
        </p>
      </div>

      <div className="skills-grid-box">

        {/* Programming */}
        <div className="skill-box">
          <h3>Programming</h3>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>C</li>
            <li>Java</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-box">
          <h3>Developer Tools</h3>
          <ul>
            <li>Git</li>
            <li>Linux</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Power BI</li>
          </ul>
        </div>

        {/* Web Dev */}
        <div className="skill-box">
          <h3>Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* ML / DL */}
        <div className="skill-box">
          <h3>Machine Learning / Deep Learning</h3>
          <ul>
            <li>Machine Learning</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Computer Vision</li>
            <li>NLP</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
