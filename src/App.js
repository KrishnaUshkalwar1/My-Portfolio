import "./App.css";

import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => (
  <div className="app-bg-container">
    <Navbar />
    <div className="app-content-container">
      <AboutMe />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
    </div>
    <Footer />
  </div>
);

export default App;
