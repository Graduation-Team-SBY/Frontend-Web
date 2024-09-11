import React, { useState } from 'react';
import axios from '../config/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function WorkerRegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: '/workers/register',
        data: {
          email,
          phoneNumber,
          password,
        },
      });
      // console.log(data);
      toast.info('Berhasil Mendaftar sebagai Yasa');
      navigate('/login');
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
          <img className="w-[100%]" src="/register2.svg" alt="" />
        </div>
        <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center text-[#1D204C]">
          <h1 className="font-black text-4xl">Pendaftaran Yasa</h1>
          <h6 className="font-bold text-gray-400">
            Create Account in this app
          </h6>

          <form
            onSubmit={handleRegister}
            className="mt-10 w-full px-5 md:px-10 lg:px-10"
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
                <span className="label-text font-bold">Phone Number</span>
              </div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Type here your number"
                className="input input-bordered rounded-full p-7"
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              Register
            </button>
          </form>

          <Link
            to="/login"
            className="text-center text-blue-500 hover:text-blue-800 mt-10"
          >
            Kamu sudah punya akun?
          </Link>
        </div>
      </div>
    </>
  );
}
