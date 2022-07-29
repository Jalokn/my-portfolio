import React from "react";
import Resume from "../../assets/JacobKnudson-Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} className="btn" target="_blank" rel="noreferrer">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
