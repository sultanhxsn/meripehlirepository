import React from 'react';
import '../Styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Meowistan. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;