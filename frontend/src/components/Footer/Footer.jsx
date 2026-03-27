import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-circle">SSD</span>
            <span className="footer-name">ShimmerSea Designs</span>
          </div>
          <p className="footer-text">
            Crafting modern, responsive business card designs for the web.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-title">Explore</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#templates">Templates</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Follow</h4>
            <div className="footer-icons">
              <button className="footer-icon-btn">G</button>
              <button className="footer-icon-btn">in</button>
              <button className="footer-icon-btn">@</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} ShimmerSea Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
