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
              <small>One year coding</small>
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
            Highly analytical individual with advanced knowledge and passion for
            designing, developing, and deploying software, applications,
            algorithms, and flowcharts. Talent for troubleshooting and resolving
            issues, developing practical/time-saving software solutions,
            administering systems and networks, and reducing complexity/risk.
            Knowledgeable in analyzing requirements to ensure optimal
            performance, quality, and responsiveness of applications. Solid
            background in mortgage loan processing and sales. Possess
            exceptional interpersonal, planning, problem-solving, time
            management, attention to detail, and organizational skills.
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
