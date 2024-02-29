import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import "./index.css";

const Footer = () => (
  <div className="footer-bg-container">
    <div className="footer-container">
      <h1 className="footer-heading">Contact Me</h1>

      <div className="phone-container">
        <FaPhoneAlt className="icon" />
        <p className="text">+91 6281457156</p>
      </div>

      <div className="phone-container">
        <IoMdMail className="icon" />
        <p className="text">krishnaushkalwar@gmail.com</p>
      </div>
      <div className="app-logos-container">
        <FaTwitter className="app-logo" />
        <FaGithub className="app-logo" />
        <FaLinkedin className="app-logo" />
        <FaGoogle className="app-logo" />
      </div>
    </div>
  </div>
);

export default Footer;
