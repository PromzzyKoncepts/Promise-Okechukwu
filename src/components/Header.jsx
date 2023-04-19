import React from "react";
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/p.png"
import ThemeSwitcher from "../hooks/ThemeSwitcher"
import Button from "../partials/Button";
import "../assets/Stylesheets/Header.css"


const Header = () => {
  const { activeTheme, setTheme } = ThemeSwitcher()

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo}
              className="header-logo"
              alt="Dark Logo"
            />Promise
          </Link>

        </div>

        {/* Header links small screen */}
        <div
          className=""
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

        <div className="">
          <span
            // onClick={showHireMeModal}
            className=""
            aria-label="Hire Me Button"
          >
            <Button title="Hire Me" />
          </span>
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

    </motion.nav >
  )
}
export default Header