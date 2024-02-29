import "./index.css";

const Education = () => (
  <div id="education" className="education-bg-container">
    <h1 className="education-title">Education</h1>
    <div className="education-container">
      <div className="education-college-container">
        <div className="college-details-container">
          <h1 className="college-name">NxtWave Disruptive Technologies</h1>
          <p className="college-course">
            Industry Ready Certification in Full-stack Development
          </p>
        </div>
        <p className="college-start-end-year">2022 - 2024</p>
      </div>
      <div className="education-college-container">
        <div className="college-details-container">
          <h1 className="college-name">
            Telangana Tribal Welfare Residential Degree <br />
            College(Men), Kamareddy.
          </h1>
          <p className="college-course">
            B.Sc(MPCs)[Mathematics, Physics, Computer Science]
          </p>
          <p className="college-course">CGPA: 8.75</p>
        </div>
        <p className="college-start-end-year">2020 - 2023</p>
      </div>
      <div className="education-college-container">
        <div className="college-details-container">
          <h1 className="college-name">
            Sri Seth Ramprasad Inani Govt. Junior College,
            <br />
            Madnoor
          </h1>
          <p className="college-course">MPC[Mathematics, Physics, Chemistry]</p>
          <p className="college-course">Marks: 881</p>
        </div>
        <p className="college-start-end-year">2018 - 2020</p>
      </div>
      <div className="education-college-container">
        <div className="college-details-container">
          <h1 className="college-name">Sri Vasavi Vidyanikethan High School</h1>
          <p className="college-course">CGPA: 9.5</p>
        </div>
        <p className="college-start-end-year">2017 - 2018</p>
      </div>
    </div>
  </div>
);

export default Education;
