import "./index.css";

const AboutMe = () => (
  <div id="aboutMe" className="about-me-bg-container">
    <div className="about-me-details-container">
      <h1 className="about-me-title">
        I'm <span className="name">Krishna Ushkalwar</span>
      </h1>
      <p className="about-me-description">
        I am skilled in Reactjs and looking for <br />
        Frontend Developer jobs.
      </p>
    </div>
    <div className="image-container">
      <img
        src="https://i.postimg.cc/t4cs4mV9/Krishna-Ushkalwar-Profile-image.jpg"
        className="about-me-image"
        alt="profile"
      />
    </div>
  </div>
);

export default AboutMe;
