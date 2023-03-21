import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import logo from "../assets/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight,faFolder,faFolderPlus,faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [isExpanded, setExpendState] = useState(true);
  const menuItems = [
    {
      text: "Documenth Generation",
      icon: faFolder
    },
    {
      text: "Corporate Documents",
      icon: faFolderOpen,
    },
    {
      text: "Filing Documents",
      icon: faFolderPlus,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__container">
        <Link to="/" className="sidebar__logo">
          <img src={logo} alt="logo"/>
        </Link>

        <div className="sidebar__user">
          <div className="avatar">G</div>
          <div>
            <h4 className="entity-name">Entity Name</h4>
            <p className="website-name">www.website.com</p>
          </div>
          <button className="profile-btn">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        <nav className="sidebar__navigation">
          {menuItems.map(({ text, icon }) => {
            return (
              <Link to="/" className="nav-item" key={text}>
                <FontAwesomeIcon icon={icon} />
                {isExpanded && <p>{text}</p>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;