// src/Footer.js
import React from "react";
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          جميع الحقوق محفوظه &copy;{" "}
          <a href="#" aria-label="Global Board website">منصة استعد للإحصائيات </a>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
