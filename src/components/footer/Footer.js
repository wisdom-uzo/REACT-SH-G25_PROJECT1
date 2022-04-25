/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="app_footer_container">
      <div className="app_footer-sec1">
        <div className="">
          <h3>OPENING HOURS</h3>

          <p>
            Monday till Thurday: <span>09:00AM-10:30Pm</span>
          </p>
          <p>
            Friday till Sunday:<span> 09:00Am-11:00pm</span>
          </p>
        </div>

        <div className="">
          <h3>CONTACT US</h3>

          <p>
            Email: <span>SH_REACT_G25@gmail.com</span>
          </p>
          <p>
            Tel: <span>+234 4318 2441</span>
          </p>
        </div>

        <div className="">
          <h3>CONTACT US</h3>

          <p>
            Email: <span>SH_REACT_G25@gmail.com</span>
          </p>
          <p>
            Tel: <span>+234 4318 2441</span>
          </p>
        </div>

        <div className="">
          <h3>SOCIAL </h3>

          <ul className="footer_social">
            <li>
              <a href="">
                <BsFacebook className="footer_icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href="">
                <BsGithub className="footer_icon" />
                GitHub
              </a>
            </li>
            <li>
              <a href="">
                <BsTwitter className="footer_icon" />
                Twitter
              </a>
            </li>
            <li>
              <a href="">
                <BsLinkedin className="footer_icon" />
                Linkedin
              </a>
            </li>
            <li>
              <a href="">
                <BsInstagram className="footer_icon" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
