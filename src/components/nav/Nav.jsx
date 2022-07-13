import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";

const Nav = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrollTopValue = Math.round(window.scrollY);
      switch (scrollTopValue) {
        case scrollTopValue < 1089 && scrollTopValue > 0:
          setActiveNav("#home");
          break;
        case scrollTopValue < 1756 && scrollTopValue > 1089:
          setActiveNav("#about");
          break;
        case scrollTopValue < 3232 && scrollTopValue > 1756:
          setActiveNav("#experience");
          break;
        case scrollTopValue < 4919 && scrollTopValue > 3232:
          setActiveNav("#portfolio");
          break;
        case scrollTopValue >= 4919:
          setActiveNav("#contact");
          break;
        default:
          break;
      }
      console.log(scrollTopValue);
      return () => {
        document.removeEventListener("scroll", () => {});
      };
    });
  });

  const [activeNav, setActiveNav] = useState("#home");
  const handleNav = (navItem) => {
    setActiveNav(navItem);
  };
  return (
    <nav>
      <a
        href="#home"
        onClick={() => handleNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => handleNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
