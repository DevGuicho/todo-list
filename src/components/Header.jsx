import React from "react";
import "../assets/styles/components/Header.css";
const Header = () => {
  return (
    <header className='header'>
      <h2 className='header__titulo'>To Do Board</h2>
      <div className='header__search'>
        <i className='fas fa-search header__search--icon'></i>
        <input
          type='text'
          name=''
          id=''
          className='header__search--input'
          placeholder='Search for task...'
        />
      </div>
      <div className='header__profile'>
        <div className='header__profile--notification'>
          <i className='far fa-bell'></i>
        </div>
        <div className='header__profile--user'>
          <div className='header__profile--icon'>
            <i className='fas fa-user'></i>
          </div>
          <div className='header__profile--info'>
            <p>Luis Vazquez Padilla</p>
            <i className='fas fa-angle-down'></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
