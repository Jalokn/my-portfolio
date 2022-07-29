import React from "react";
import "components/about/about.css";
import ME from "assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>4+ months coding</small>
            </article>

            {/* <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Up to 1 client Worldwide!</small>
            </article> */}

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>See recent projects below</small>
            </article>
          </div>
          <p>
            Seeking to pursuing a career in web development. I have taught
            myself how to design modern websites by concentrating on the
            front-end library React. That being said, I'm looking for a new
            position where I can focus on designing streamlined, user-friendly
            interfaces for intricate, feature-rich apps. I'm a naturally curious
            person always seeking to broaden my technological knowledge and
            skill set.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
