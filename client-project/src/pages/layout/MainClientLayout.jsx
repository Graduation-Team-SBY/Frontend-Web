import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/NavbarClient';
import NavbarClient from '../../components/NavbarClient';

export default function MainClientLayout() {
  return (
    <>
      <NavbarClient />
      <div className="container mx-auto px-8 md:px-20 lg:px-32 py-24 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}
