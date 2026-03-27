// src/components/ContactSection/ContactSection.jsx
import "./ContactSection.css";

const ContactSection = ({ tenant }) => {
  const { contact, social, brandColor } = tenant;

  if (!contact) return null;

  return (
    <section className="contact-section">
      <div className="contact-section-inner">
        <div className="contact-info">
          <h2 className="contact-title">Visit or contact us</h2>
          <div className="contact-details">
            {contact.address && <div>{contact.address}</div>}
            {contact.openingHours && <div>{contact.openingHours}</div>}
            {contact.phone && (
              <div>
                Phone:{" "}
                <a
                  href={`tel:${contact.phone}`}
                  className="contact-link"
                  style={{ color: brandColor }}
                >
                  {contact.phone}
                </a>
              </div>
            )}
            {contact.email && (
              <div>
                Email:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="contact-link"
                  style={{ color: brandColor }}
                >
                  {contact.email}
                </a>
              </div>
            )}
            {contact.website && (
              <div>
                Website:{" "}
                <a
                  href={contact.website}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  style={{ color: brandColor }}
                >
                  {contact.website}
                </a>
              </div>
            )}
          </div>
        </div>

        {social && Object.keys(social).length > 0 && (
          <div className="contact-social">
            <h3 className="contact-social-title">Follow us</h3>
            <div className="contact-social-links">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-button"
                  style={{ color: brandColor }}
                >
                  Instagram
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-button"
                  style={{ color: brandColor }}
                >
                  Facebook
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-button"
                  style={{ color: brandColor }}
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;