import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Education from './../Education/Education';

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
       <li className="hover:bg-[#a38cfa] rounded-md">
        <ScrollLink to="homeSection" smooth={true} duration={500} onClick={closeDropdown} className="cursor-pointer">
          Home
        </ScrollLink>
      </li>
      <li className="hover:bg-[#a38cfa] rounded-md">
        <ScrollLink to="skillsSection" smooth={true} duration={500} onClick={closeDropdown} className="cursor-pointer">
          Skills
        </ScrollLink>
      </li>
      <li className="hover:bg-[#a38cfa] rounded-md">
        <ScrollLink to="projectsSection" smooth={true} duration={500} onClick={closeDropdown} className="cursor-pointer">
          Projects
        </ScrollLink>
      </li>
      <li className="hover:bg-[#a38cfa] rounded-md">
        <ScrollLink to="education" smooth={true} duration={500} onClick={closeDropdown} className="cursor-pointer">
        Education
        </ScrollLink>
      </li>
      <li className="hover:bg-[#a38cfa] rounded-md">
        <ScrollLink to="experienceSection" smooth={true} duration={500} onClick={closeDropdown} className="cursor-pointer">
          Experience
        </ScrollLink>
      </li>
      <li className="hover:bg-[#a38cfa] rounded-md">
        <ScrollLink to="contactSection" smooth={true} duration={500} onClick={closeDropdown} className="cursor-pointer">
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-white backdrop-blur-md fixed z-10">
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
              className="menu menu-sm bg-[#a38cfa] dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 poppins-regular"
            >
              {navOptions}
            </ul>
          )}
        </div>
        <ScrollLink to="homeSection" smooth={true} duration={500}>
        <button to="homeSection" className="btn btn-ghost text-2xl poppins-medium">SAIFUL ISLAM</button>
        </ScrollLink>
        
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 poppins-medium">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
