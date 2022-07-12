import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/profile111.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Facebook from "../../img/facebook.jpg";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">

          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Dean Rodel Legada</span>
          <span>
            Frontend Developer, a fresh graduate and with experience in web designing
            and development, producting the Quality work. I am very hungry for learning to enhance my programming skills and reach new heights. And Now that I am a certified Full-Stack Web Developer, I am now on a hunt for a company that will not only consider me as a mere people but an asset that will help boost the company's success in no time.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/DeanRodel">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/dean-rodel-legada-12b325197/">
          <img src={LinkedIn} alt="" /></a>
          <a href="https://web.facebook.com/deanz.legada.9">
          <img src={Facebook} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img className='boy' src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-18%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "30%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="Front-End" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv img={thumbup} text1="FullStack" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
