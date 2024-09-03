import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 lg:px-32 py-24">
        <Outlet />
      </div>
    </>
  );
}
