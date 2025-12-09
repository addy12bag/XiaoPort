import React, { useState } from "react";

function ContactRow({ label, value, href }) {
  return (
    <div className="contact-row">
      <span className="contact-label">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="contact-value"
        >
          {value}
        </a>
      ) : (
        <span className="contact-value">{value}</span>
      )}
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server Error: Could not send message.");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <h2>Open a Channel</h2>
        <p className="section-subtitle">
          Ready to collaborate on intelligent systems, full-stack products, or
          AI-driven experiences.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info (Left side) */}
        <div className="contact-info">
          <p>
            Whether it’s a research-backed ML system, a production-ready web
            app, or a sensor-driven automation project — I’d love to hear from
            you.
          </p>

          <div className="contact-links">
            <ContactRow label="Email" value="sayantanbag24@gmail.com" />
            <ContactRow label="Phone" value="+91 70447 87876" />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/sayantan-bag-b1996b234"
              href="https://www.linkedin.com/in/sayantan-bag-b1996b234/"
            />
            <ContactRow
              label="GitHub"
              value="github.com/addy12bag"
              href="https://github.com/addy12bag"
            />
            <ContactRow
              label="Resume / Drive"
              value="View Documents"
              href="https://drive.google.com/drive/folders/1Vwo35rZvPthSQ4Ae_kuKGp_0J_7QUn_g"
            />
          </div>
        </div>

        {/* Contact Form (Right side) */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your idea, project, or problem."
                required
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Send Signal
          </button>

          {/* Status text */}
          {status && (
            <p
              style={{
                marginTop: "12px",
                color: "var(--accent-strong)",
                fontSize: "0.9rem",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
