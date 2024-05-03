import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full px-[15px] mx-[15px] z-50  p-4  fixed ${scrolled ? 'border-b-2 border-gray-300 bg-white' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="">
          <img src={Logo} alt="" className="h-[30px] object-contain" />
        </div>

        <div className="flex items-center justify-between">
          <ul className="flex mr-[100px] space-x-10 text-[13px] text-[#003d6d] font-poppins">
            <li>
              <Link to="/">HEIM</Link>
            </li>
            <li>
              <Link to="/about">ÜBER UNS</Link>
            </li>
            <li>
              <Link to="/sectors">BUSINESS SECTORS</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contact">KONTAKT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
