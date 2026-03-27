import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/mousewheel";
import "./styles/projects.css";

import { useProjects } from "../Context/ProjectsProvider";
import { EffectCreative, Mousewheel } from "swiper/modules";
import { useRef } from "react";

export default function Projects() {
  const { projects, loading } = useProjects();
  const swiperRef = useRef(null);

  // Timer للسكрол بدل boolean
  const scrollTimer = useRef(null);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  const handleWheel = (e) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    const delta = e.deltaY;

    // نزول
    if (delta > 40) {
      if (swiper.isEnd) {
        scrollTimer.current = setTimeout(() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }

    // صعود
    if (delta < -40) {
      if (swiper.isBeginning) {
        scrollTimer.current = setTimeout(() => {
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  return (
    <div
      className="projectt"
      onWheel={(e) => {
        e.stopPropagation();
        handleWheel(e);
      }}
    >
      <div className="a-header">
        <h2 className="head-p">projects</h2>
        <span className="line"></span>
      </div>

      <section className="projects-section" id="projects">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          direction="vertical"
          slidesPerView={1}
          speed={500} // أسرع شوية للسلاسة
          grabCursor={true}
          mousewheel={{
            sensitivity: 0.7,
            thresholdDelta: 50,
            releaseOnEdges: true, // يسمح بالسكрол بعد آخر/أول سلايد
          }}
          touchRatio={1.2}
          resistanceRatio={0.6}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, "-100%", -300],
              rotate: [0, 0, -10],
            },
            next: { translate: [0, "100%", 0], rotate: [0, 0, 10] },
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
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="second-video"
                  >
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
                      {proj.teachnolgy.map((ca, index) => (
                        <span key={index}>{ca}</span>
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
