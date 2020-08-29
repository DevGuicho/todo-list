import React from "react";
import "../assets/styles/components/Aside.css";
const Aside = () => {
  return (
    <aside className='aside'>
      <nav className='navbar'>
        <ol className='navbar__menu'>
          <li className='navbar__menu--item logo'>
            <i className='fas fa-check'></i>
          </li>
          <li className='navbar__menu--item'>
            <i className='fas fa-user-friends navbar__menu--icon'></i>
            <span className='navbar__menu--text'>Manage</span>
          </li>
          <li className='navbar__menu--item'>
            <i className='fas fa-server navbar__menu--icon'></i>
            <span className='navbar__menu--text'>Boards</span>
          </li>
          <li className='navbar__menu--item'>
            <i className='fas fa-calendar navbar__menu--icon'></i>
            <span className='navbar__menu--text'>Schedule</span>
          </li>
        </ol>
        <div className='navbar__menu--item conf'>
          <i className='fas fa-cog navbar__menu--icon'></i>
          <span className='navbar__menu--text'>Settings</span>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
