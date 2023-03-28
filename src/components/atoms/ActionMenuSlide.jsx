import React from 'react';
import { Link } from 'react-router-dom';
import direction from '../../assets/icons/direction.svg';
import logo from '../../assets/icons/logo.svg';

function ActionMenuSlide({ showMenu, setShowMenu, toggleMenu }) {

  return (
    <nav className='action-menu'>
      <div className='action-menu__actions'>
        <img src={logo} alt='zintlr news' />
        <button onClick={toggleMenu}>
          <img src={direction} alt='close' aria-label='close' />
        </button>
      </div>
      <ul className='action-menu__list'>
        <li className='action-menu__item'>
          <i class='fa fa-film' aria-hidden='true'></i>
          <Link className='link' to='#'>
            Films
          </Link>
        </li>
        <li className='action-menu__item'>
          <i class='fa fa-rss' aria-hidden='true'></i>
          <Link className='link' to='#'>
            popular
          </Link>
        </li>
        <li className='action-menu__item'>
          <i class='fa fa-fire' aria-hidden='true'></i>
          <Link className='link' to='#'>
            trending
          </Link>
        </li>
        <li className='action-menu__item'>
          <i class='fa fa-graduation-cap' aria-hidden='true'></i>
          <Link className='link' to='#'>
            education
          </Link>
        </li>
      </ul>
      <div className='action-menu__social' aria-label='social media links'>
        <Link to='/' className='link'>
          <i class='fa fa-facebook-square' aria-hidden='true'></i>
        </Link>
        <Link to='/' className='link'>
          <i class='fa fa-instagram' aria-hidden='true'></i>
        </Link>
        <Link to='/' className='link'>
          <i class='fa fa-twitter-square' aria-hidden='true'></i>
        </Link>
      </div>
    </nav>
  );
}

export default ActionMenuSlide;
