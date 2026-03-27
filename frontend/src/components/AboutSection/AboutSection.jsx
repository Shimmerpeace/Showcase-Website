// src/components/AboutSection/AboutSection.jsx

import "./AboutSection.css";

const AboutSection = ({ tenant }) => {
  const { about } = tenant;

  if (!about) return null;

  return (
    <section className="about-section">
      <div className="about-section-inner">
        <h2 className="about-title">{about.title}</h2>
        <p className="about-body">{about.body}</p>
      </div>
    </section>
  );
};

export default AboutSection;
