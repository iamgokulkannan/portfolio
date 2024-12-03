import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import SecurityTesting from '../../assets/security-testing.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do ?</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with expertise in crafting
        visually appealing and user-friendly websites. With a strong
        understanding of design principles and an exceptional eye for detail, I
        am proficient in HTML, CSS, JavaScript, React and design tools like
        Figma. Additionally, I bring expertise in cybersecurity, including
        vulnerability assessment, penetration testing, and ethical hacking,
        ensuring websites are not just beautiful but secure.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              Creating interactive, user-friendly, and visually appealing
              designs that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Designing modern, responsive, and visually captivating websites
              that align with client goals and enhance user engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={SecurityTesting} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Security Testing</h2>
            <p>
              Ensuring the safety and integrity of web applications through
              comprehensive vulnerability assessments, penetration testing, and
              ethical hacking practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
