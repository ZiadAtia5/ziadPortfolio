import React from "react";
import CountUp from "./motions/CountUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faLocationDot,
  faU,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/about.css";
import aboutImg from "../Images/portfolio.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="a-header">
          <h2>About Me</h2>
          <span className="line"></span>
        </div>

        <div className="content">
          <div className="left" data-aos="fade-up">
            <img src={aboutImg} alt="About" className="about-img" />
          </div>

          <div className="right" data-aos="fade-up" data-aos-delay="100">
            <h3>Front-End Developer</h3>
            <p>
              I build modern, responsive, and high-converting web interfaces
              using React, JavaScript, and CSS. I focus on performance,
              scalability, and clean UI architecture.
            </p>

            <div className="info" data-aos="slide-up" data-aos-delay="200">
              <div className="info-box">
                <FontAwesomeIcon className="info-icon" icon={faUser} />
                <div>
                  <strong>Name:</strong> Ziad Atia
                </div>
              </div>
              <div className="info-box">
                <FontAwesomeIcon className="info-icon" icon={faLocationDot} />
                <div>
                  <strong>Location:</strong> Egypt
                </div>
              </div>

              <div className="counter">
                <div
                  className="count"
                  data-aos="flip-right"
                  data-aos-delay="300"
                >
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting={false}
                  />
                  <span>+</span>
                  <h4>projects</h4>
                </div>

                <div
                  className="count"
                  data-aos="flip-right"
                  data-aos-delay="400"
                >
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting={false}
                  />
                  <span>+</span>
                  <h4>experience</h4>
                </div>
                <div
                  className="count"
                  data-aos="flip-right"
                  data-aos-delay="500"
                >
                  <CountUp
                    from={50}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    startCounting={false}
                  />
                  <span>%</span>
                  <h4>Client Satisfaction</h4>
                </div>
              </div>
            </div>

            <a
              href="/Ziad Atia Abdelhamed.pdf"
              download="Ziad_Atia_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              download resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
