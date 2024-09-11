import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchProfile } from '../redux/features/clientProfileSlice';

export default function NavbarClient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.clientProfile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.clear();
    toast.info('Berhasil Keluar');
    navigate('/');
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
              <Link
                to="/jalu"
                className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full"
              >
                Beranda
              </Link>
            </li>

            <li>
              <Link
                to="/jalu/order/my"
                className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full"
              >
                Pesanan Saya
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="lg:ml-0 text-xl flex items-center gap-2 font-black hover:text-[#05ECAE]">
          <img src='./LogoYangTu.png' className='w-10 h-10' />
          <span>YangTu</span>
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full"
              to="/jalu"
            >
              Beranda
            </Link>
          </li>

          <li>
            <Link
              to="/jalu/order/my"
              className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full"
            >
              Pesanan Saya
            </Link>
            {/* <details>
              <summary className="font-bold hover:text-[#1D204C] hover:bg-[#05ECAE] rounded-full">
                Orders
              </summary>
              <ul className="p-2 w-36">
                <li>
                  <Link to="/jalu/order/my">My Order</Link>
                </li>
                <li>
                  <Link to="/jalu/order/history">History</Link>
                </li>
              </ul>
            </details> */}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom dropdown-end flex content-center">
          <div className="avatar online" tabIndex={0} role="button">
            <div className="w-8 rounded-full">
              {profile.profilePicture ? (
                <img src={profile.profilePicture} />
              ) : (
                <img src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li>
              <Link to="/jalu/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Keluar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
