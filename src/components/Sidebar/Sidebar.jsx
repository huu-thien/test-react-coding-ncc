import { useState } from "react";
import "./Sidebar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container-side-bar">
      <div className="side-bar">
        <ul className="menu">
          <li className="menu-item">
            <a href="#home">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">Services</a>
          </li>
          <li className="menu-item">
            <a href="#">News</a>
          </li>
          <li className="menu-item">
            <a href="#">Blog</a>
          </li>
          <li className="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="header-mobile">
          <FontAwesomeIcon
            icon={showMenu ? "times" : "bars"}
            className="icon-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      {showMenu && (
        <ul className="menu-mobile">
          <li
            className="menu-item-mobile"
            onClick={() => setShowMenu(!showMenu)}
          >
            <a href="#">Home</a>
          </li>
          <li
            className="menu-item-mobile"
            onClick={() => setShowMenu(!showMenu)}
          >
            <a href="#">Services</a>
          </li>
          <li
            className="menu-item-mobile"
            onClick={() => setShowMenu(!showMenu)}
          >
            <a href="#">News</a>
          </li>
          <li
            className="menu-item-mobile"
            onClick={() => setShowMenu(!showMenu)}
          >
            <a href="#">Blog</a>
          </li>
          <li
            className="menu-item-mobile"
            onClick={() => setShowMenu(!showMenu)}
          >
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
