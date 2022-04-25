import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineContacts } from "react-icons/ai";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="about_header">
        <h2>CONTACT US</h2>
        <p>
          We sincerely welcome feedback from our guests. To let us know how a
          recent experience went, to pat us on the back, or to tell us what we
          can do better
        </p>
      </div>

      <div className="about_add_form">
        <div className="address_sec">
          <h2>Contact Address</h2>
          <h3>
            <GoLocation /> Address
          </h3>
          <p>
            32 Muritala Eletu street, Osapa, Lekki Peninsula, <br />
            Lekki, Lagos, <br />
            Nigeria{" "}
          </p>

          <h3>Reservations</h3>
          <p>Call your chosen restaurant</p>

          <h3>Telephone</h3>
          <p>
            <AiOutlineContacts />
            Enquiries: 09091490414 <br />
            <FaWhatsappSquare /> Whatsapp: 08099991568 <br />
            <BsCalendar2EventFill /> Events: 08178775944
          </p>

          <div className="soc_contact">
            <h2>Reach us on our social media handles</h2>

            <ul className="">
              <li>
                <a href="#">
                  <BsFacebook className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsGithub className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsLinkedin className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact_form_sec">
          <h2>Send Us A Message</h2>
          <form action="contact_form">
            <div className="input-sec">
              <label htmlFor="">Subject</label>
              <select name="" id="">
                <option value="">Select</option>
              </select>
            </div>

            <div className="form_name">
              <div className="input-sec">
                <label htmlFor="">First Name</label>
                <input type="text" />
              </div>

              <div className="input-sec">
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="input-sec">
              <label htmlFor="">Email Address</label>
              <input type="email" name="" id="" />
            </div>

            <div className="input-sec">
              <label htmlFor="">Telephone</label>
              <input type="tel" name="" id="" />
            </div>

            <div className="input-sec">
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button className="contact_btn">Submit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
