import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
