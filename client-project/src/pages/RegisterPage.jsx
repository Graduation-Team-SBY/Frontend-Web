import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex container mx-auto px-10 lg:px-36 relative">
      <div className="hidden lg:flex justify-center content-center lg:w-1/2 min-h-screen">
          <img className="absolute w-[50%] bottom-14 left-0" src="/register.svg" alt="" />
        
      </div>
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center text-[#1D204C]">
        <h1 className="font-black text-5xl">Register</h1>
        <h6 className="font-bold text-gray-400">Create Account in this app</h6>

        <form className="mt-10 w-full px-16">
          <label className="form-control mt-3">
            <div className="label">
              <span className="label-text font-bold">Email</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Type here your email"
              className="input input-bordered rounded-full p-7"
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
            />
          </label>

          <button
            type="submit"
            className="btn btn-block btn-lg bg-[#1D204C] text-white mt-10 text-lg hover:text-[#1D204C] rounded-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
