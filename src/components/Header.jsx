/* eslint-disable */
import {React, useState} from 'react';
// import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import logo from '../assets/images/p.png';
import Button from '../partials/Button';
import '../assets/Stylesheets/Header.css';

const Header = () => {
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
          {/* <div>
            {showModal ? (
              <HireMeModal
                onClose={showHireMeModal}
                onRequest={showHireMeModal}
              />
            ) : null}
            {showModal ? showHireMeModal : null}
          </div> */}

        </div>

      </Fade>
    </motion.nav>
  );
};
export default Header;
