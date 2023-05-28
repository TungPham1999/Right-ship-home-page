/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ForwardedRef } from 'react';
import { useGetRef } from '../../../utils/useGetRef';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

interface HeaderProps {
  toggleSideBar: () => void;
}

const Header = React.forwardRef(
  (
    { toggleSideBar }: HeaderProps,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    const ref = useGetRef(forwardedRef)
    return (
      <>
        <header>
          <NavBar toggleSideBar={toggleSideBar} />
          <SideBar ref={ref} />
        </header>
      </>
    );
  }
);

export default Header;
