import React from "react"
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg";
import bell from "../../assets/bell.svg";

function Navbar() {
  return (
    <header id="navbar">
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="FickleFlight" className="nav-container__img" />
        </Link>

        <nav className="nav-container__links">
          <Link to="/" className="nav-container__item">
            Home
          </Link>
          <Link to="/explore" className="nav-container__item">
            Explore
          </Link>
          <Link to="/search" className="nav-container__item">
            Search
          </Link>
          <Link to="/hotels" className="nav-container__item">
            Hotels
          </Link>
          <Link to="/offers" className="nav-container__item">
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