import React from "react";
import project1 from "../assets/weather-project.jpeg";
import project2 from "../assets/forkify-project.png";

function ProjectCard({ label, title, description, tech, link, image }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} className="project-img" />

      <div className="project-meta">
        <span className="project-label">{label}</span>
      </div>

      <h3 className="project-title">{title}</h3>

      {description.map((line, idx) => (
        <p key={idx} className="project-description">{line}</p>
      ))}

      <ul className="project-tech">
        {tech.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <a className="project-link" href={link} target="_blank">
        View on GitHub →
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-header">
        <h2>Selected Work</h2>
        <p className="section-subtitle">
          Projects curated by the orb — blending deep learning, clean UI,
          and real-world impact.
        </p>
      </div>

      <div className="projects-grid">
        
        <ProjectCard
          label="Computer Vision · Deep Learning"
          title="Multi-Class Weather Classification using PyTorch"
          description={[
            "A CNN-based model built with PyTorch to classify weather images.",
            "Learns patterns from textures, tones, lighting—achieving high accuracy."
          ]}
          tech={["Python", "PyTorch", "CNN", "torchvision"]}
          link="https://github.com/addy12bag/Multi-Class-Weather-Classification_CNN"
          image={project1}
        />

        <ProjectCard
          label="Frontend · API Integration"
          title="ForkifyWiki — Recipe Search & Bookmarking"
          description={[
            "A modern recipe search application powered by the Forkify API.",
            "Built using HTML, SCSS, JavaScript (ES6+), and clean modular structure."
          ]}
          tech={["HTML", "SCSS", "JavaScript", "Forkify API"]}
          link="https://github.com/addy12bag/ForkifyWIki-SCSS-HTML-JS"
          image={project2}
        />

      </div>
    </section>
  );
}

export default Projects;
