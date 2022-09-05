import React, { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [banner] = useState("");

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Nice to meet you!</h4>
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.linkedin.com/in/gabriel-priss/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/gabrielpriss" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square"></i>
                </a>
              </div>
            </div>
            <img src={imgBack} alt="img not found" />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor="name"></label>
            <span><b>Full Stack Web Developer</b> | Python | JavaScript | TypeScript | React | NodeJS | Redux | RTL | Jest | Mocha Chai | Express | Docker | MySQL | MongoDB</span>
            <label htmlFor="name"><b>Gabriel Priss</b></label>

            <label htmlFor="email"><b>gabrielpriss@hotmail.com</b></label>

            <div className="send-btn">
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
