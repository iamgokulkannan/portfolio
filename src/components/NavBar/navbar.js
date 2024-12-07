import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import resume from './Resume.pdf';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => (window.location.href = '#')}
      />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <a href={resume} download="Resume.pdf" className="desktopMenuListItem">
          Resume
        </a>
      </div>

      {/* Contact Button */}
      <button
        className="desktopMenuButton"
        onClick={() => {
          document
            .getElementById('contactMe')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <img src={contactImg} alt="Contact" className="desktopMenuIcon" />
        Contact Me
      </button>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div
          className={`line line1 ${isMobileMenuOpen ? 'rotate45' : ''}`}
        ></div>
        <div
          className={`line line2 ${isMobileMenuOpen ? 'opacity0' : ''}`}
        ></div>
        <div
          className={`line line3 ${isMobileMenuOpen ? 'rotate135' : ''}`}
        ></div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div className={`mobileMenu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobileMenuContent">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItem"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItem"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItem"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>

          <Link
            activeClass="active"
            to="contactMe"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobileMenuItem"
            onClick={closeMobileMenu}
          >
            Contact Me
          </Link>
          <a
            href={resume}
            download="Resume"
            className="mobileMenuItem"
            onClick={closeMobileMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
