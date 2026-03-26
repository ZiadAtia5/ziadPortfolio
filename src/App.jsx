import { useState, useEffect } from "react";
import Landing from "./Components/Landing";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import UploadProjectData from "./UploadProjectData";
import PixelSnow from "./Components/motions/PixelSnow";
import Particles from "./Components/motions/Particles";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <>
      <div className="portfilio">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Particles
            className="pixel"
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
        <div className="components">
          <Header />
          <section id="home">
            <Landing />
          </section>

          <UploadProjectData />
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />{" "}
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
