import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <div className="navbar bg-[#faf9fe] px-8 md:px-20 lg:px-32 fixed top-0 inset-x-0 z-50">
        <div className="navbar-start">
          
          <Link to="/" className="lg:ml-0 text-xl font-black hover:text-[#05ECAE]">YangTu</Link>
        </div>
        
        <div className="navbar-end">
          <Link to="/login" className="bg-[#1D204C] text-white px-5 py-2 rounded-full hover:bg-[#05ECAE] hover:text-[#1D204C]">Masuk</Link>
        </div>
      </div>
      <div className="container mx-auto px-8 md:px-20 lg:px-32 py-24 min-h-screen flex items-center">
        <div className="flex flex-col w-full lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-[40%]">
            <div className="max-w-xl mb-6">
              <h2 className="text-3xl font-bold tracking-tight text-[#1D204C] sm:text-4xl sm:leading-none max-w-lg mb-6">
                Segala sesuatu yang Anda <br className="hidden md:block" />
                dapat bayangkan adalah{' '}
                <span className="inline-block text-[#1D204C]">nyata</span>
              </h2>
              <p className="text-[#1D204C] text-base md:text-lg">
                Model ekonomi yang didasarkan pada pekerjaan sementara,
                tugas-tugas jangka pendek, atau kontrak pekerjaan yang
                fleksibel, di mana individu bekerja sebagai pekerja lepas atau
                independen.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {/* <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/app-store.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt="APP"
              />
            </a>
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/google-play.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt="APP"
              />
            </a> */}
              <Link
                to="/jalu-register"
                className="bg-[#1D204C] text-white px-5 py-2 rounded-full hover:bg-[#05ECAE] hover:text-[#1D204C]"
              >
                Daftar
              </Link>
              <Link
                to="/yasa-register"
                className="bg-[#1D204C] text-white px-5 py-2 rounded-full hover:bg-[#05ECAE] hover:text-[#1D204C]"
              >
                Daftar sebagai worker
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-[60%]">
            <div className="lg:w-full">
              <img
                className="object-contain w-full h-auto hidden lg:block"
                src="./Team-work.svg"
                alt="Teamwork Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
