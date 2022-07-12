import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>deanzdeluxe@gmail.com</span>
        <div className="f-icons">
         <a href="https://github.com/DeanRodel">
          <Github color="white" size={"3rem"} />
          </a>
          <a href="https://web.facebook.com/deanz.legada.9">
          <Facebook color="white" size={"3rem"} />
          </a>
           <a href="https://www.linkedin.com/in/dean-rodel-legada-12b325197">
          <LinkedIn color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
