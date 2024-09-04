import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar px-6 bg-[#faf9fe] lg:px-32 fixed top-0 inset-x-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden hover:text-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/client/dashboard">Home</Link>
            </li>

            <li>
              <Link to="/client/orders">Order</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="ml-5 lg:ml-0 text-xl font-black">
          AssistMaster
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/client/dashboard">Home</Link>
          </li>

          <li>
            <Link to="/client/orders">Order</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end flex content-center">
          <div className="avatar online" tabIndex={0} role="button">
            <div className="w-10 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
