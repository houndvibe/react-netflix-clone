import React, { useState, useEffect } from "react";
import "./Nav.css";
import { animateScroll as scroll } from "react-scroll";

function Nav() {
  const [show, handleShow] = useState(false);

  // В useEffect отслушиваем скроллинг, и если от верха страницы пролистано
  // больше 100px - запускаем функцию handleShow, управляющую отрисовкой
  // хедера по средством изменения стейта.

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListenner("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`} onClick={scroll.scrollToTop}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Camera_Zenit_avtomat.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
