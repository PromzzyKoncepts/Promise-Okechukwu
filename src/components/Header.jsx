/* eslint-disable */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/p.png';
import Button from '../partials/Button';
import HireMeModal from '../modals/hireMe';
import '../assets/Stylesheets/Header.css';

const Header = () => {
  const [showHireMeModal, setShowHireMeModal] = useState(false);

  const handleCloseHireMeModal = () => setShowHireMeModal(false);
  const handleShowHireMeModal = () => setShowHireMeModal(true);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className=""
    >
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="header-logo" alt="Dark Logo" />
            Promise
          </Link>
        </div>

        {/* Header links small screen */}
        <div className="pages">
          <Link to="/" className="" aria-label="Projects">
            Home
          </Link>
          <Link to="/about" className="" aria-label="About Me">
            About
          </Link>
          <Link to="/contact" className="" aria-label="Contact">
            Contact
          </Link>
        </div>

        <div className="hire">
          <span
            onClick={handleShowHireMeModal}
            className=""
            aria-label="Hire Me Button"
          >
            <Button title="Hire Me" />
          </span>
        </div>

        <HireMeModal
          show={showHireMeModal}
          handleClose={handleCloseHireMeModal}
        />
      </div>
    </motion.nav>
  );
};

export default Header;
