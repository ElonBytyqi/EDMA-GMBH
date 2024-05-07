import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/Logo.png";
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

  return (
    <div
      className={`w-full  ml-4 z-50  pt-4 pb-2 nav ${
        scrolled ? "border-b-2 border-red-600 bg-white" : ""
      }`}
    >
      <div className="  flex justify-between items-center  w-full">
        <div className="w-35%">
          <img src={Logo} alt="" className="h-[34px] object-contain" />
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
      className={`hover:font-bold pt-2  pl-6 hover:underline ${
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
      <button className="mx-4" onClick={() => logOut()}>Log out</button>
    </>
  ) : (
    <button  className="mx-6 pt-2" onClick={() => login()}>Login</button>
  )}
  <LangSwitch />
</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;