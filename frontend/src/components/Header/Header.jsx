import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-circle">SSD</span>
          <span className="logo-name">ShimmerSea Designs</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="#blog" onClick={closeMenu}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
          <button className="btn-ghost" onClick={closeMenu}>
            Click
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
