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
        <ul className="contact__list">
          <li>
            <i class='bx bx-map-pin'></i>
            <p />Plot 46/4 Nyerere Road,
            <p />P.O.Box 2517 Dar es Salaam,
            <p />Tanzania,
          </li>

          <li>
            <i class='bx bx-phone'></i>
            <p />(+255) 0764 700 222
          </li>

          <li>
            <i class='bx bxl-gmail' ></i>
            <p />info@azam-media.com
          </li>
        </ul>

        <h3 className="footer__title">FOLLOW US</h3>
        <div className="footer__social">
          <a href="https://www.facebook.com/azamtvtz?_rdr=p"
            className="footer__social-link"
            target="_blank">
            <i class='bx bxl-facebook' ></i>
          </a>

          <a href="https://twitter.com/azamtvtz"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>

          <a href="https://www.youtube.com/user/azamtv1"
            className="footer__social-link"
            target="_blank">
            <i class='bx bxl-youtube'></i>
          </a>

          <a href="https://www.instagram.com/azamtvtz/"
            className="footer__social-link"
            target="_blank">
            <i class='bx bxl-instagram' ></i>
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