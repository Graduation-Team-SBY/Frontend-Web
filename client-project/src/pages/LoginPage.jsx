import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axiosInstance';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerLogin = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: '/login',
        data: {
          email,
          password,
        },
      });

      console.log(data);
      localStorage.setItem('access_token', data.access_token);
      let role;
      if (data.role === 'client') {
        role = 'jalu';
      } else if (data.role === 'worker') {
        role = 'yasa';
      }
      localStorage.setItem('role', role);
      toast.info('Success to login');
      navigate(`/${localStorage.role}`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="navbar bg-[#faf9fe] px-8 md:px-20 lg:px-32 fixed top-0 inset-x-0 z-50">
        <Link
          to="/"
          className="text-md hover:text-[#05ECAE] font-bold flex gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>{' '}
          <span>Kembali</span>
        </Link>
      </div>
      <div className="min-h-screen flex gap-10 container mx-auto px-5 md:px-10 lg:px-32">
        <div className="hidden lg:flex justify-center content-center lg:w-1/2 min-h-screen">
          <img className="w-[100%]" src="/login2.svg" alt="" />
        </div>
        <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center text-[#1D204C]">
          <h1 className="font-black text-4xl">Login</h1>
          <h6 className="font-bold text-gray-400">Welcome back!</h6>

          <form
            onSubmit={handlerLogin}
            className="mt-5 w-full px-5 md:px-10 lg:px-10"
          >
            <label className="form-control mt-3">
              <div className="label">
                <span className="label-text font-bold">Email</span>
              </div>
              <input
                type="text"
                name="email"
                placeholder="Type here your email"
                className="input input-bordered rounded-full p-7"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="form-control mt-3">
              <div className="label">
                <span className="label-text font-bold">Password</span>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Type here your password"
                className="input input-bordered rounded-full p-7"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button
              type="submit"
              className="btn btn-block btn-lg bg-[#1D204C] text-white mt-10 text-lg hover:text-[#1D204C] rounded-full"
            >
              Login
            </button>
          </form>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="text-blue-500 mt-10 hover:text-blue-800"
            onClick={() => document.getElementById('registerChoice').showModal()}
          >
            Kamu belum punya akun?
          </button>
          <dialog id="registerChoice" className="modal p-5 ">
            <div className="modal-box bg-[#faf9fe]">
              <h3 className="font-bold text-lg">Mau daftar jadi apa?</h3>
              <div className="grid grid-cols-2 gap-4 my-5">
                <Link to="/jalu-register" className="bg-white rounded-xl p-5 text-center shadow-md hover:bg-[#1D204C] hover:text-white">
                  <h2 className='font-bold'>Jalu</h2>
                  <p className='text-sm'>Kamu bisa meminta pertolongan kepada Yasa</p>
                </Link>
                <Link to="/yasa-register" className="bg-white rounded-xl p-5 text-center shadow-md hover:bg-[#1D204C] hover:text-white">
                  <h2 className='font-bold'>Yasa</h2>
                  <p className='text-sm'>Bantu Jalu dan dapatkan upah</p>
                </Link>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
}
