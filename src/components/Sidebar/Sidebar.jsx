import './Sidebar.scss';
const Sidebar = () => {
  return (
    <div className="side-bar">
      <ul className="menu">
        <li className="menu-item">
          <a href="#">Home</a>
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
        <i className="fa-sharp fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Sidebar;
