import React from 'react'
import footerLogo from "../../assets/logo-white.svg";

function Footer() {
  return (
    <footer id="footer">
      <section className="footer-section">
        <div className="footer-division-one">
          <img
            src={footerLogo}
            alt="fickle flight logo"
            className="footer-division-one__logo"
          />
          <p className="footer-division-one__description">
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </p>
          <ul>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
          </ul>
        </div>
        <div className="section-dividor__vertical"></div>
        <div className="footer-divison-two">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Careers</li>
              <li>How we work</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Account</li>
              <li>Support Center</li>
              <li>FAQ</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              <li>Covid Advisory</li>
              <li>Airline Fees</li>
              <li>Tips</li>
              <li>Quarantine Rules</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;