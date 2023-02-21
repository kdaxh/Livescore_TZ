import React from "react";
import { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
    /*============== Change Background Header =============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        if (this.scrollY >= 80) header.classList.add
            ("show-header");
        else header.classList.remove("show-header");
    });

    /*============== Toggle Menu =============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav nav__container">
                <a href="index.html" className="nav__logo">
                    <div class="logo"><img src={logo} /></div>
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"
                                onClick={() => setActiveNav("#")}
                                className={activeNav === "#home" ?
                                    "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> HOME
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#"
                                onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ?
                                    "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-trophy nav__icon"></i> TOURNAMENTS
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#"
                                onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ?
                                    "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-football nav__icon"></i> MATCH
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#"
                                onClick={() => setActiveNav("#services")}
                                className={activeNav === "#services" ?
                                    "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-schedule nav__icon"></i> EVENTS
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>

                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header