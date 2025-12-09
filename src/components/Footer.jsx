import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Sayantan Bag.</span>
      <span className="footer-orb-text">
        Orb Log: Portfolio rendered successfully.
      </span>
    </footer>
  );
}

export default Footer;
