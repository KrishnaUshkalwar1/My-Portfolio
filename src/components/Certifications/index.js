import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Certifications = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="certifications" className="certifications-bg-container">
      <h1 className="certifications-title">Certifications</h1>
      <div className="certifications-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://i.postimg.cc/FK3SY5tb/Static-Website-Course-completion-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/h4bH9f86/Responsive-Website-Certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/wMG5hXwD/Python-Completion-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/C16ntFbg/Java-Script-Completion-Certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/wMCyq0W4/SQL-Course-Completion-Certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/TwhpnZFH/Java-Script-Essential-Course-Completion-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/s2jmS4z0/Responsive-Web-Design-Using-Flexbox-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Certifications;
