import React from 'react';
import { PAGELINKS, SOCIALLINKS } from '../data';
function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PAGELINKS.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {SOCIALLINKS.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
