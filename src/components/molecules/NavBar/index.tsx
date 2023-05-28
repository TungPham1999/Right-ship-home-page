import React from 'react';
import SearchInput from '../../atoms/SearchInput';
import './NavBar.scss';

interface NavBarProps {
  toggleSideBar: () => void;
}

const NavBar = ({ toggleSideBar }: NavBarProps) => {
  return (
    <nav className='navbar'>
      <div className='logo_item' onClick={toggleSideBar}>
        <span className='sidebar_open'>
          <img className='sidebar_menu_icon' src='./../images/MenuIcon.svg' alt='menu-icon' />
        </span>
        <img src='./../images/RightShipLogo.svg' alt='' />
      </div>
      <SearchInput classes='search_bar_desktop' />

      <div className='navbar_content'>
        <span className='profile'>RS</span>
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
