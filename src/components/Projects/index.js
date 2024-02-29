import "./index.css";

const Projects = () => (
  <div id="projects" className="projects-bg-container">
    <h1 className="projects-title">Projects</h1>
    <div className="projects-container">
      <div className="project-container">
        <img
          src="https://i.postimg.cc/6Ts0HL27/Screenshot-2024-02-29-120106.png"
          className="project-image"
          alt="project"
        />
        <a
          href="https://krishnaushkalwar1.github.io/krishnarockpaperscissors.com/"
          className="project-name"
          target="_blank"
        >
          Rock Paper Scissors
        </a>
      </div>
      <div className="project-container">
        <img
          src="https://i.postimg.cc/8k9VbgLy/Screenshot-2024-02-29-123938.png"
          className="project-image"
          alt="project"
        />
        <a
          href="https://krishna-currency-converter.onrender.com"
          className="project-name"
          target="_blank"
        >
          Currency Converter
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
