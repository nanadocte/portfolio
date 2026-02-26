import Nav from './Nav';
import Footer from '../pages/Home/sections/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Nav></Nav>
      <main className="bg-gray-950">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
