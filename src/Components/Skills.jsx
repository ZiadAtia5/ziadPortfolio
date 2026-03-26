import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/skills.css";

const Skills = () => {
  const topRef = useRef(null);

  const progressRef = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const skills1 = [
    {
      name: "Html",
      image: "src/Images/icons/html.png",
      progress: "98%",
    },
    {
      name: "css",
      image: "src/Images/icons/css.png",
      progress: "99%",
    },
    {
      name: "js",
      image: "src/Images/icons/js.png",
      progress: "95%",
    },
    {
      name: "react",
      image: "src/Images/icons/react.png",
      progress: "90%",
    },
    {
      name: "vite",
      image: "src/Images/icons/vite.png",
      progress: "98%",
    },
    {
      name: "bootstrap",
      image: "src/Images/icons/bootstrap.png",
      progress: "95%",
    },
    {
      name: "firebase",
      image: "src/Images/icons/fireBase.png",
      progress: "95%",
    },
    {
      name: "git",
      image: "src/Images/icons/git.png",
      progress: "90%",
    },
    {
      name: "github",
      image: "src/Images/icons/github.png",
      progress: "90%",
    },

    {
      name: "api",
      image: "src/Images/icons/api.png",
      progress: "80%",
    },
  ];

  const checkScrollPosition = () => {
    const top = topRef.current;
    if (!top) return;
    const maxScroll = top.scrollWidth - top.clientWidth;
    setIsStart(top.scrollLeft <= 0);
    setIsEnd(top.scrollLeft >= maxScroll - 1);

    const progress = progressRef.current;
    if (progress) {
      const scrollPercent = (top.scrollLeft / maxScroll) * 100;
      progress.style.width = `${scrollPercent}%`;
    }
  };

  const getStep = () => {
    if (!topRef.current) return 0;
    return topRef.current.clientWidth / 1;
  };

  const scrollNext = () => {
    const step = getStep();

    topRef.current.scrollBy({ left: step, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const step = getStep();
    topRef.current.scrollBy({ left: -step, behavior: "smooth" });
  };

  useEffect(() => {
    const top = topRef.current;

    if (!top) return;

    let ticking = false;

    const syncScroll = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    top.addEventListener("scroll", syncScroll);

    checkScrollPosition();

    return () => {
      top.removeEventListener("scroll", syncScroll);
    };
  }, []);

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
        threshold: 0.6,
      },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (activeSection === "skills") {
    const allProgress = document.querySelectorAll(".s-box .progress-bar-fill");
    allProgress.forEach((el) => {
      const value = el.getAttribute("data-progress");
      el.style.width = "0%";
      setTimeout(() => {
        el.style.width = value;
      }, 100);
    });
  }

  return (
    <div className="skills">
      <div className="container">
        <div className="s-content">
          <div className="a-header">
            <h2>skills</h2>
            <span className="line"></span>
            <h3>
              let's explore popular <span>skills & experience</span>
            </h3>
          </div>

          <div className="s-main">
            <button onClick={scrollPrev} disabled={isStart}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
            <div className="s-main-content">
              <div
                className="top"
                data-aos="fade-up"
                data-aos-delay="100"
                ref={topRef}
              >
                {skills1.map((skill, index) => (
                  <div className="s-box" key={index}>
                    <img src={skill.image} alt="logo" />
                    <h3>{skill.name}</h3>
                    <div className="prog">
                      <div
                        className="progress-bar-fill"
                        data-progress={skill.progress}
                        style={{ width: "0%" }}
                      >
                        <p>{skill.progress}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={scrollNext} disabled={isEnd}>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </div>

          <div className="s-bottom">
            <div className="progress-bar">
              <div className="progress" ref={progressRef}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
