import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';
const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;
