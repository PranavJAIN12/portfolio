import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-heading">PranavJain</h2>
          <p className="footer-description">Hello! I'm Pranav Jain, with a passion for technology and a keen interest in problem-solving, I am dedicated to honing my skills as a developer and coder</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-nav">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
            <li><a href="#skills" className="footer-link">Skills</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact">
            <li><a href="mailto:youremail@example.com" className="footer-link">Email</a></li>
            <li><a href="https://github.com/yourusername" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yourusername" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
