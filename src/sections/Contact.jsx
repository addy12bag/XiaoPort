import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // EmailJS import

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
  const [statusType, setStatusType] = useState(""); // success | error | loading

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");
    setStatusType("loading");

    const params = {
      name: form.name,
      email: form.email,
      title: "Portfolio Contact",
      message: form.message,
    };

    emailjs
      .send(
        "service_sevllvl",   // ✔ Your Service ID
        "template_w23rvi2",  // ✔ Your Template ID
        params,
        "_Kvk1pKlygnp_UY2N"  // ✔ Your Public Key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setStatusType("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setStatus("Failed to send message. Please try again.");
        setStatusType("error");
      });
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
        {/* ---------- LEFT SIDE INFO ---------- */}
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

        {/* ---------- RIGHT SIDE FORM ---------- */}
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
            {statusType === "loading" ? "Sending..." : "Send Signal"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p
              style={{
                marginTop: "12px",
                fontSize: "0.9rem",
                color:
                  statusType === "success"
                    ? "var(--accent-strong)"
                    : statusType === "error"
                    ? "#ff8080"
                    : "var(--text-muted)",
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
