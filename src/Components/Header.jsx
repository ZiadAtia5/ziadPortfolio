import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./styles/header.css";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) => (activeSection === id ? "active" : "");
  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <Link to="/">
            <h2>ziad</h2>
          </Link>

          <div className={showLinks ? "links showLinks" : "links"}>
            <ul>
              <li>
                {" "}
                <HashLink
                  smooth
                  to="/#home"
                  className={linkClass("home")}
                  onClick={() => setShowLinks(false)}
                >
                  home
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#about"
                  className={linkClass("about")}
                  onClick={() => setShowLinks(false)}
                >
                  about
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#projects"
                  className={linkClass("projects")}
                  onClick={() => setShowLinks(false)}
                >
                  projects
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#contact"
                  className={linkClass("contact")}
                  onClick={() => setShowLinks(false)}
                >
                  contact
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="x-icon">
            <div
              className={showLinks ? "i-content-x" : "i-content"}
              onClick={() => setShowLinks(!showLinks)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
