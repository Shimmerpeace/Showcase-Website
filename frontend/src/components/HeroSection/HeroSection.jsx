// src/components//HeroSection/HeroSection.jsx
import "./HeroSection.css";

const HeroSection = ({ tenant }) => {
  const { hero, brandColor, accentColor } = tenant;

  if (!hero) return null;

  return (
    <section className="hero-section">
      <div className="hero-section-inner">
        <div className="hero-content">
          <h1 className="hero-heading">{hero.heading}</h1>
          <p className="hero-subheading">{hero.subheading}</p>
          <button
            className="hero-cta"
            style={{
              background: `linear-gradient(135deg, ${brandColor}, ${accentColor})`
            }}
          >
            {hero.ctaLabel}
          </button>
        </div>

        {hero.imageUrl && (
          <div className="hero-image-wrapper">
            <img
              src={hero.imageUrl}
              alt={hero.heading}
              className="hero-image"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;