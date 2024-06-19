import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const navOptions = (
    <>
      <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
      <li><Link to="/about" onClick={closeDropdown}>About</Link></li>
      <li><Link to="/skills" onClick={closeDropdown}>Skills</Link></li>
      <li><Link to="/projects" onClick={closeDropdown}>Projects</Link></li>
      <li><Link to="/experience" onClick={closeDropdown}>Experience</Link></li>
      <li><Link to="/contact" onClick={closeDropdown}>Contact</Link></li>
    </>
  );

  return (
    <div className="navbar text-white fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden" 
            onClick={toggleDropdown}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h8m-8 6h16" 
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul 
              tabIndex={0} 
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">SAIFUL ISLAM</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 poppins-medium">
          {navOptions}
        </ul>
      </div>
      <div className="">
        <a className="btn">Hire Me</a>
      </div>
    </div>
  );
};

export default Navbar;
