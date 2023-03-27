import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import search from '../../assets/icons/search.svg';
import menu from '../../assets/icons/menu.svg';
import ActionMenuSlide from "../atoms/ActionMenuSlide";
import "../../scss/css/navbar.css"

function Navbar() {
  const [showMenu,setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(pre => !pre);
  }

  return (
    <header className='navbar'>
      {showMenu && (
        <ActionMenuSlide
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          toggleMenu={toggleMenu}
        />
      )}
      <nav className='navbar__container'>
        <button className='navbar__action' onClick={toggleMenu}>
          <img src={menu} alt='menu-icon' />
        </button>
        <h4>
          <Link to='/' className='navbar__logo'>
            zintlr news
          </Link>
        </h4>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <Link to='#' />
            feature
          </li>
          <li className='navbar__item'>
            <Link to='#' />
            popular
          </li>
          <li className='navbar__item'>
            <Link to='#' />
            trending
          </li>
          <li className='navbar__item'>
            <Link to='#' />
            education
          </li>
          <li>
            <button className='navbar__search'>
              <img src={search} alt='search icon' />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;