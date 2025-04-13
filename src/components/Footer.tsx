import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-icons">
            <a href="https://linkedin.com/in/akash-yadav-66b211180" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:ay2@fordham.edu">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Akash Kumar Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
