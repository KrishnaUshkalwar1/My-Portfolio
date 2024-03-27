import "./index.css";

const Projects = () => (
  <div id="projects" className="projects-bg-container">
    <h1 className="projects-title">Projects</h1>
    <div className="projects-container">
      <div className="project-container">
        <img
          src="https://i.postimg.cc/XvZjJwRF/Screenshot-2024-02-29-120106.png"
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
          src="https://i.postimg.cc/TwRt09T5/Screenshot-2024-02-29-123938.png"
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
      <div className="project-container">
        <img
          src="https://i.postimg.cc/gk13Jpng/Screenshot-2024-03-27-125755.png"
          className="project-image"
          alt="project"
        />
        <a
          href="https://krishna-news-app.onrender.com/"
          className="project-name"
          target="_blank"
        >
          News App
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
