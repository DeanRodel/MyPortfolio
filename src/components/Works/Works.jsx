import React, { useContext } from "react";
import "./Works.css";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Node from "../../img/nodejs.png";
import Postman from "../../img/postman.png";
import Mongo from "../../img/mongodb.png";
import Express from "../../img/expressjs.png";
import Github from "../../img/github.png";
import Gitlab from "../../img/gitlab.png";
import Heroku from "../../img/heroku.png";
import Sublime from "../../img/sublime-text-3.png";



import Javascript from "../../img/javascript.png";
import Bootstrap from "../../img/bootstrap.png";
import Reacts from "../../img/logo-react.png";
import Rest from "../../img/logo-rest.png";
import Git from "../../img/git.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Programming Tools</span>
          <spane>
            Git, HTML5, CSS, Bootstrap4, Javascript, MongoDB, Node.js, Express.js, Postman
            <br />
            Heroku, React.js, Github, Gitlab, Rest API, and SublimeText.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Bootstrap} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reacts} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Rest} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
           <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
            <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Postman} alt="" />
          </div>
             <div className="w-secCircle">
            <img src={Mongo} alt="" />
          </div>
           <div className="w-secCircle">
            <img src={Git} alt="" />
          </div>
            <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
           <div className="w-secCircle">
            <img src={Gitlab} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Heroku} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Sublime} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
