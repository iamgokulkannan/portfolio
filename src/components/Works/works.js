import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        My projects showcase my expertise as a Website Designer and Ethical
        Hacker. From crafting responsive, user-friendly websites to uncovering
        vulnerabilities in complex systems, I strive to deliver solutions that
        are both innovative and secure. Each project reflects my commitment to
        combining design precision with cutting-edge cybersecurity practices.
      </span>
      <div className="worksImgs">
        <img
          src={Portfolio1}
          alt="Portfolio1"
          className="worksImg"
          onClick={() =>
            (window.location.href =
              'https://github.com/iamgokulkannan/vulnscan')
          }
        />
        <img
          src={Portfolio2}
          alt="Portfolio2"
          className="worksImg"
          onClick={() =>
            (window.location.href =
              'https://github.com/iamgokulkannan/Pulse-Monitoring-system-using-Esp-8266')
          }
        />
        <img
          src={Portfolio3}
          alt="Portfolio3"
          className="worksImg"
          onClick={() =>
            (window.location.href =
              'https://github.com/iamgokulkannan/uml_diagrams_and_Srs_document__for_restaurant_management_system')
          }
        />
        <img
          src={Portfolio4}
          alt="Portfolio4"
          className="worksImg"
          onClick={() =>
            (window.location.href = 'https://github.com/iamgokulkannan/Ai')
          }
        />
        <img
          src={Portfolio5}
          alt="Portfolio5"
          className="worksImg"
          onClick={() =>
            (window.location.href =
              'https://github.com/iamgokulkannan/anamcara')
          }
        />
        <img
          src={Portfolio6}
          alt="Portfolio6"
          className="worksImg"
          onClick={() =>
            (window.location.href =
              'https://github.com/iamgokulkannan/Super-Titans_TECH-A-THON_2024')
          }
        />
      </div>
      <button
        className="seeMore"
        onClick={() =>
          (window.location.href = 'https://github.com/iamgokulkannan')
        }
      >
        See More
      </button>
    </section>
  );
};

export default Works;
