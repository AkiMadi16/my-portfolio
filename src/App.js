import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/aboutme" element={<AboutMe name="Maddy" />} />
          <Route path="/projects" element={<Projects name="Maddy" />} />
          <Route path="/resume" element={<Resume name="Maddy" />} />
          <Route path="/ContactMe" element={<ContactMe name="Maddy" />} />
          <Route path="/" element={<Dashboard name="Maddy" />} />
        </Routes>
        <NavBar />
        <Footer />
      </div>
      <Particles
        id="tsparticles"
        className="particles"
        options={{
          background: {
            color: {
              value: "#D7F2FF",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#A0C7FF",
            },
            links: {
              color: "#A0C7FF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
}

export default App;
