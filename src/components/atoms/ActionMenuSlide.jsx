import React from 'react';
import { Link } from 'react-router-dom';
import direction from '../../assets/icons/direction.svg';
import logo from '../../assets/icons/logo.svg';

function ActionMenuSlide({ showMenu, setShowMenu, toggleMenu }) {

  return (
    <nav className='action-menu'>
      <div className='action-menu__actions'>
        <img src={logo} alt="zintlr news" />
        <button onClick={toggleMenu}>
          <img src={direction} alt='close' aria-label='close' />
        </button>
      </div>
      <ul className="action-menu__list">
          <li>
            <Link to="#" className='action-menu__item'>item</Link>
          </li>
          <li>
            <Link to="#" className='action-menu__item'>item</Link>
          </li>
          <li>
            <Link to="#"className='action-menu__item'>item</Link>
          </li>
          <li>
            <Link to="#" className='action-menu__item'>item</Link>
          </li>
          <li>
            <Link to="#" className='action-menu__item'>item</Link>
          </li>
      </ul>
    </nav>
  );
}

export default ActionMenuSlide;
