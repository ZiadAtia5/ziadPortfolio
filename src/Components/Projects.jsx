import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/mousewheel";
import "./styles/projects.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAppStore } from "@fortawesome/free-brands-svg-icons";

import { useProjects } from "../Context/ProjectsProvider";
import { EffectCreative, Mousewheel } from "swiper/modules";

export default function Projects() {
  const { projects, loading } = useProjects();

  return (
  <div className="projectt">
    <div className="a-header">
            <h2 className="head-p">projects</h2>
            <span className="line"></span>
           
          </div>
    <section className="projects-section" id="projects">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        speed={1000}
        grabCursor={true}
        mousewheel={{ sensitivity: 1, releaseOnEdges: true }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, "-120%", -500],
            rotate: [0, 0, -15],
          },
          next: { translate: [0, "120%", 0], rotate: [0, 0, 15] },
        }}
        modules={[EffectCreative, Mousewheel]}
        className="projects-swiper"
      >
        {projects.map((proj) => (
          <SwiperSlide key={proj.id}>
            <div className="project">
              <video autoPlay loop muted playsInline className="first-video">
                <source src={proj.video} type="video/mp4" />
              </video>
              <div className="overlay"></div>
              <div className="project-content">
                <video autoPlay loop muted playsInline className="second-video">
                  <source src={proj.video} type="video/mp4" />
                </video>

                <div className="p-text-box">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    Live Preview
                  </a>
                </div>
                <div className="project-info">
                  <h2>{proj.name}</h2>
                  <div className="ca-box">
                    {proj.teachnolgy.map((ca) => (
                      <span>{ca}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </div>
  );
}
