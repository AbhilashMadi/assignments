import React from "react";
import footerLogo from "../../assets/logo-white.svg";

function footer(){
  return (
    <footer id="footer">
      <section className="footer_section-one">
        <img src={footerLogo} className="footer-logo" alt="fickleFlight logo" />
        <p>
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </p>
        <ul>
          <li><i className="fab fa-facebook-f"></i></li>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-twitter"></i></li>
        </ul>
      </section>

      <div className="section-divider"></div>

      <section className="footer_section-tow">
        <div className="list">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>News</li>
            <li>Careers</li>
            <li>Howe we work</li>
          </ul>
        </div>
        <div className="list">
          <h3>Support</h3>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>FAQ</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="list">
          <h3>More</h3>
          <ul>
            <li>Covid Advisory</li>
            <li>Airline Fees</li>
            <li>Tips</li>
            <li>Querantine Rules</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default footer;