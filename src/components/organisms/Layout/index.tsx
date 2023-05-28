import { useCallback, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../molecules/Header';
import './Layout.scss'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const contentContainer = useRef<HTMLDivElement>(null);

  const sidebar = useRef<HTMLDivElement>(null);

  const toggleSideBar = useCallback(() => {
    if (sidebar.current && contentContainer.current) {
      sidebar.current.classList.toggle('close');
      contentContainer.current.classList.toggle('close');
    }
  }, []);

  useEffect(() => {
    if (sidebar.current && window !== undefined && contentContainer.current) {
      if (window.innerWidth < 768) {
        sidebar.current.classList.add('close');
        contentContainer.current.classList.add('close');
      } else {
        sidebar.current.classList.remove('close');
        contentContainer.current.classList.remove('close');
      }
    }
  }, []);

  return (
    <>
      <Header ref={sidebar} toggleSideBar={toggleSideBar}/>
      <div ref={contentContainer} className='content_container'>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
