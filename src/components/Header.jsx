/* eslint-disable */
import {React, useState} from 'react';
// import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import logo from '../assets/images/p.png';
import HireMeModal from '../modals/hireMe';
import Button from '../partials/Button';
import '../assets/Stylesheets/Header.css';

const Header = () => {
  // const { activeTheme, setTheme } = ThemeSwitcher();
  const [showModal, setShowModal] = useState(false);

  const showHireMeModal = () => {
    if (!showModal) {
      document
        .getElementsByTagName('html')[0]
        .classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className=""
    >
      <Fade right>
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                className="header-logo"
                alt="Dark Logo"
              />
              Promise
            </Link>

          </div>

          {/* Header links small screen */}
          <div
            className="pages"
          >
            <Link
              to="/projects"
              className=""
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className=""
              aria-label="About Me"
            >
              About
            </Link>
            <Link
              to="/contact"
              className=""
              aria-label="Contact"
            >
              Contact
            </Link>
          </div>

          <div className="hire">
            <span
              onClick={showHireMeModal}
              className=""
              aria-label="Hire Me Button"
            >
              <Button title="Hire Me" />
            </span>
          </div>

          {/* Hire me modal */}
          <div>
            {showModal ? (
              <HireMeModal
                onClose={showHireMeModal}
                onRequest={showHireMeModal}
              />
            ) : null}
            {showModal ? showHireMeModal : null}
          </div>
          {/* Theme switcher small screen */}
          {/* <div
          onClick={() => setTheme(activeTheme)}
          aria-label="Theme Switcher"
          className=""
        >
          {activeTheme === 'dark' ? (
            <FiMoon className="" />
          ) : (
            <FiSun className="" />
          )}
        </div> */}

          {/* Small screen hamburger menu */}
          {/* <div className="sm:hidden">
          <button
            // onClick={toggleMenu}
            type="button"
            className="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=""
            >
              {showMenu ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </svg>
          </button>
        </div> */}

        </div>

      </Fade>
    </motion.nav>
  );
};
export default Header;
