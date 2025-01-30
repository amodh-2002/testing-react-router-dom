import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
