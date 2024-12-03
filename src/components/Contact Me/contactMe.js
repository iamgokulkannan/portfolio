import React, { useRef } from 'react';
import './contactMe.css';
import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/github.png';
import LinkedInIcon from '../../assets/linkedin.png';
import WhatsAppIcon from '../../assets/whatsapp.png';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yahcciq', 'template_hdf1h9x', form.current, {
        publicKey: 'A4ZbXweNW9ErzqTuT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <div id="contactMe">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email ID"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submit">
          Submit
        </button>
        <div className="links">
          <a href="https://github.com/iamgokulkannan">
            <img src={GithubIcon} alt="Github" className="link1" />
          </a>
          <a href="https://www.linkedin.com/in/gxkux">
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
          </a>
          <a href="https://www.instagram.com/gxkux">
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089498714003">
            <img src={FacebookIcon} alt="FaceBook" className="link" />
          </a>
          <a href="https://wa.me/+919843463600">
            <img src={WhatsAppIcon} alt="WhatsApp" className="link" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
