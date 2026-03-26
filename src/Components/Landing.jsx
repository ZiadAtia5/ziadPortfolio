import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="text-box" data-aos="fade-up" data-aos-delay="100">
          <p>
            front-End Web Developer specializing in building high-converting,
            performance-driven websites that help businesses grow and scale.
          </p>
          <div className="l-btn" data-aos="slide-up" data-aos-delay="200">
            <p>contact me</p>
            <div className="l-icon">
              <FontAwesomeIcon className="l-i" icon={faArrowRight} />
            </div>
          </div>
        </div>
        <h2>ziad</h2>
      </div>
    </div>
  );
};

export default Landing;
