import React from "react";
import "./footer.css";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import f6 from "../../assets/f6.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <h3 className="footer__title">OUR PRODUCT</h3>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              <img src={f1} />
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              <img src={f2} />
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              <img src={f3} />
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              <img src={f4} />
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              <img src={f5} />
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              <img src={f6} />
            </a>
          </li>
        </ul>
        <h3 className="footer__title">CONTACT US</h3>
        <ul className="footer__list">
          <li>
            $
            <p />Plot 46/4 Nyerere Road,
            <p />P.O.Box 2517 Dar es Salaam,
            <p />Tanzania,
          </li>

          <li>
            $
            <p />(+255) 0764 700 222
          </li>

          <li>
            $
            <p />info@azam-media.com
          </li>
        </ul>

        <h3 className="footer__title">FOLLOW US</h3>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/kilala-dashina-52b837204/"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>

          <a href="https://github.com/kdaxh/"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-github"></i>
          </a>

          <a href="https://twitter.com/kdaxh_"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169;2023 AZAM, All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;