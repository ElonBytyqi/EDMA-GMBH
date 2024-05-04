import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../Context/Products";
import { lang } from "../assets/lang";
import LangSwitch from "./LangSwitch";

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
      className={`w-full px-[15px] mx-[15px] z-50  pt-4 pb-2  fixed ${
        scrolled ? "border-b-2 border-gray-300 bg-white" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <img src={Logo} alt="" className="h-[34px] object-contain" />
        </div>

        <div className="flex items-center justify-between">
          <ul className="flex mr-[100px] space-x-10 text-[13px] text-[#003d6d] font-poppins uppercase">
            {lang[state.language].menu.map((el, index) => (
              <li
                key={index}
                className={`hover:font-bold hover:underline ${
                  location.pathname === el.slug ? "font-bold underline" : ""
                }`}
              >
                <Link className="" to={el.slug}>
                  {el.name}
                </Link>
              </li>
            ))}
            {state.userInfo ? (
              <>
                {state.userInfo.name}
                <button onClick={() => logOut()}>Log out</button>
              </>
            ) : (
              <button onClick={() => login()}>Login</button>
            )}
            <LangSwitch />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
