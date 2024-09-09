import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function NavbarWorker() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    toast.info("Success to logout");
  };

  return (
    <div className="navbar bg-[#faf9fe] px-8 md:px-20 lg:px-32 fixed top-0 inset-x-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden hover:text-[#05ECAE]"
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
              <Link to="/yasa">Home</Link>
            </li>

            <li>
              <Link to="/yasa/order/jobs">Work</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="ml-5 lg:ml-0 text-xl font-black hover:text-[#05ECAE]"
        >
          AssistMaster
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full"
              to="/yasa"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full"
              to="/yasa/order/jobs"
            >
              Work
            </Link>
          </li>
          <li>
            {/* <Link
              className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full"
              to="/worker"
            >
              Worker
            </Link> */}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end flex content-center">
          <div className="avatar online" tabIndex={0} role="button">
            <div className="w-8 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li>
              <Link to="/yasa/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
