import React from 'react';
import './intro.css';
import bg from '../../assets/gokul.png';
import hireMe from '../../assets/hireme.png';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Gokul Kannan G</span>
          <br />
          Website Designer | Ethical Hacker
        </span>
        <p className="introPara">
          I'm a skilled web designer and ethical hacker with experience in
          creating visually pleasing and <br /> user friendly websites, and also
          hacked many payment pages
        </p>
        <Link to="contactMe">
          <button className="button">
            <img src={hireMe} alt="hireMe" className="buttonImg" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="background" className="bg" />
    </section>
  );
};

export default Intro;
