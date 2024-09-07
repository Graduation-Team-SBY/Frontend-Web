import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarWorker from '../../components/NavbarWorker';

export default function MainWorkerLayout() {
  return (
    <>
      <NavbarWorker />
      <div className="container mx-auto px-8 md:px-20 lg:px-32 py-24 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}
