import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/Logo1.png";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../Context/Products";
import { lang } from "../assets/lang";
import LangSwitch from "./LangSwitch";
import './navbar.scss';

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
  const location = useLocation();

  const [state, dispatch] = useContext(Context);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [toggleLogin, setToggleLogin] = useState(false);
  const toggleMenu = () => {
    console.log("toggleBtn", toggleBtn);
    setToggleBtn(!toggleBtn);
    document.body.classList.toggle("scroll-menu-mobile");
    if (toggleBtn) {
      window.scrollTo(0, 0);
    }
  };

  const logOut = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("userInfo", null);
    dispatch({
      type: "LOGIN",
      payload: {
        token: null,
        userInfo: null,
      },
    });
  };

  const login = () => {
    setToggleLogin(true);
  };

  console.log("state", state);

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  // useEffect hook to handle changes in darkMode
useEffect(() => {
  // Save the current state of darkMode to localStorage
  localStorage.setItem("darkMode", JSON.stringify(darkMode));

  // Check if darkMode is true, and add the 'dark' class to the HTML element
  // If darkMode is false, remove the 'dark' class
  if (darkMode) {
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark');
  }
 
}, [darkMode]);

  return (
    <div
      className={`w-full nav   z-50   pb-2  dark:bg-gray-900  `}
    >
<div className={`flex justify-between items-center w-full ark:text-red-600 dark:border-b-0  0 h-14 ${scrolled ? "border-b-2 border-blue-200   " : ""}`}>
   
        <div className="w-35%  ">
         <Link to="/"> <img src={Logo} alt="" className=" ml-2 h-[34px] object-contain" /></Link>
        </div>

        <button className="btn-media ml-72" onClick={() => toggleMenu()}>
          <svg fill="#000000" width="30px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z" fillRule="evenodd"/>
          </svg>
        </button>
        <div
          className={`menu ${toggleBtn ? "mobile-menu" : ""}`}
          onClick={() => toggleMenu()}
        >
          <ul className="flex flex-col md:flex md:flex-row justify-start items-center    md:mr-[100px] text-[13px] text-[#003d6d] font-poppins uppercase w-full  md:pl-24  md:ml-8 ">
  {lang[state.language].menu.map((el, index) => (
    <li
      key={index}
      className={`hover:font-bold pt-2 dark:text-white pl-6 hover:underline ${
        location.pathname === el.slug ? "font-bold underline" : ""
      }`}
    >
      {el.name === "SERVICES" || el.name === "BUSINESS SECTORS" ? (
        <div className="dropdown cursor-pointer bg-transparent">
          <span className="px-2">{el.name}</span>
          <div className="dropdown-content   w-[150px]  md:w-[250px]">
            <ul className="">
              {el.name === "SERVICES" ? (
                <>
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/consulting">CONSULTING AND STUDIES</Link>
                  </li> 
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/analycis-and-conceptual">
                      ANALYSIS AND CONCEPTUAL DESIGN
                    </Link>
                  </li>
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/project-supervision">PROJECT SUPERVISION</Link>
                  </li>
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/project-management">PROJECT MANAGEMENT</Link>
                  </li>
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/construction">CONSTRUCTION</Link>
                  </li>
                </>
              ) : el.name === "BUSINESS SECTORS"  ? (
                <>
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/architecture">DIE ARCHITEKTUR</Link>
                  </li>
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center text-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/energy">
                      ENERGY EFFICIENCY & RENEWABLE ENERGY
                    </Link>
                  </li>
                  <li className="bg-[#003D6D] text-white h-8 text-[8px] md:h-12 flex justify-center items-center border-b-[1px] md:text-[13px] ease-in-out duration-300 border-white hover:text-slate-200">
                    <Link to="/water">WATER & INFRASTRUCTURE</Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      ) : (
        <Link className="mr-2" to={el.slug}>
          {el.name}
        </Link>
      )}
    </li>
  ))}
  {state.userInfo ? (
    <>
      {state.userInfo.name}
      <button className="mx-4 dark:text-white " onClick={() => logOut()}>Log out</button>
    </>
  ) : (
    <button  className="mx-6 pt-2 dark:text-white" onClick={() => login()}>Login</button>
  )}
  <LangSwitch />

  <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className=" ml-8 flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
          </button>
</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;