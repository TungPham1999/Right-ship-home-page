/* eslint-disable react-hooks/exhaustive-deps */
import React, { ForwardedRef, useCallback, useEffect, useState } from 'react';
import './SideBar.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetRef } from '../../../utils/useGetRef';
import SearchInput from '../../atoms/SearchInput';

interface SideBarItem {
  name: string;
  img: string;
  isActive: boolean;
}

const SideBar = React.forwardRef(
  (props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const ref = useGetRef(forwardedRef);

    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location || {};
    const [listSidebar, setListSidebar] = useState<SideBarItem[]>([
      {
        name: 'Dashboard',
        img: './../images/DashboardIcon.svg',
        isActive: false,
      },
      {
        name: 'Ports',
        img: './../images/AnchorIcon.svg',
        isActive: false,
      },
      {
        name: 'Customers',
        img: './../images/PersonIcon.svg',
        isActive: false,
      },
      {
        name: 'Settings',
        img: './../images/SystemIcon.svg',
        isActive: false,
      },
    ]);
    const handleRouteActive = (pathname: string) => {
      let newListSidebar = [...listSidebar];
      // reset isActive is default
      newListSidebar = newListSidebar.map((sidebar) => {
        return {
          ...sidebar,
          isActive: sidebar.isActive,
        };
      });
      // find index route active
      const indexRouteActive = listSidebar.findIndex((sidebar) =>
        // remove '/' from pathname ex: /ports to ports
        pathname.replace('/', '').includes(sidebar.name.toLocaleLowerCase())
      );
      newListSidebar[indexRouteActive > -1 ? indexRouteActive : 1].isActive =
        true;
      setListSidebar(newListSidebar);
    };
    const handleChangeSidebar = useCallback((pathname: string) => {
      handleRouteActive(pathname);
      navigate(`/${pathname}`);
    }, []);

    useEffect(() => {
      handleRouteActive(pathname);
    }, [pathname]);

    useEffect(() => {
      if (pathname === '/') {
        navigate('/ports');
      }
    }, [pathname]);

    return (
      <div className='sidebar' ref={ref}>
        <nav>
          <SearchInput classes='search_bar_mobile' />

          <div className='menu_content'>
            {listSidebar.map((sidebar: SideBarItem) => {
              return (
                <ul
                  className={`menu_items ${
                    sidebar.isActive ? 'active_item' : ''
                  }`}
                  key={sidebar.name}
                  onClick={() =>
                    handleChangeSidebar(sidebar.name.toLocaleLowerCase())
                  }
                >
                  <div className='menu_title menu_dahsboard'>
                    <span className='navlink_icon'>
                      <img className='navlink_img' src={sidebar.img} alt={sidebar.name} />
                    </span>
                    <span className='navlink_text'>{sidebar.name}</span>
                  </div>
                </ul>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
);
export default React.memo(SideBar);
