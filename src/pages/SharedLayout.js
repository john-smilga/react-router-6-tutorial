import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Navbar } from '../components/Navbar';
import { Navbar } from '../components/StyledNavbar';


function SharedLayout() {
  return (
      <>
      <Navbar />
      <Outlet />
      </>
  )
}

export default SharedLayout;