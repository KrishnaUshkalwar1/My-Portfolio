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
              src="https://i.postimg.cc/5yVw49Rc/Static-Website-Course-completion-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/DwXygQzg/Responsive-Website-Certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/JnvRZGWg/Python-Completion-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/y81CJFZx/Java-Script-Completion-Certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/m2d8wMnt/SQL-Course-Completion-Certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/yNRjsG8Z/Java-Script-Essential-Course-Completion-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/g0Gj2XYH/Responsive-Web-Design-Using-Flexbox-certificate.png"
              className="certificate-image"
              alt="certificate"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/Fz9Php5v/Node-JS-Course-Completion-Certificate.png"
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
