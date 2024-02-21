import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/al-huda-logo.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light-tertiary py-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Quran Academy Logo" className='mx-4'/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
            
            <li className="nav-item">
              <NavLink to="/" className="nav-link mx-2" onClick={toggleMenu} >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link mx-2" onClick={toggleMenu}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tutors" className="nav-link mx-2" onClick={toggleMenu}>Tutors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link mx-2" onClick={toggleMenu}>Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fee" className="nav-link mx-2" onClick={toggleMenu}>Fee & Plans</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faqs" className="nav-link mx-2" onClick={toggleMenu}>Faqs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link mx-2" onClick={toggleMenu}>Contact</NavLink>
            </li>
            <li className="nav-item d-none d-lg-block">
              <Link to="/register" className="nav-link mx-2" onClick={toggleMenu} id='register-btn'>Register</Link>
            </li>
            <li className="nav-item d-block d-lg-none">
              <NavLink to="/register" className="nav-link mx-2" onClick={toggleMenu}>Register</NavLink>
            </li>
              {/* Add more NavLink elements here */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
