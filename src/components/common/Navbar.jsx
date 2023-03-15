import React from "react"
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg";
import bell from "../../assets/bell.svg";

function Navbar() {
  return (
    <header id="navbar">
      <div className="nav-container">
        <img src={logo} alt="FickleFlight" className="nav-container__img" />

        <nav className="nav-container__links">
          <Link to="/explore" className="nav-container__item">
            Explore
          </Link>
          <Link to="/search" className="nav-container__item">
            Search
          </Link>
          <Link to="/Hotels" className="nav-container__item">
            Hotels
          </Link>
          <Link to="/Offers" className="nav-container__item">
            Offers
          </Link>
          <Link to="/notifications" className="nav-container__item">
            <img src={bell} className="bell" alt="bell" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;