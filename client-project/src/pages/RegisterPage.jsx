import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 bg-[#4B4AEF] min-h-screen"></div>
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-black text-4xl">Register</h1>
        <h6 className="font-bold text-gray-400">Create Account in this app</h6>

        <form className="mt-10 w-full px-20">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here your name"
              className="input input-bordered rounded-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here your email"
              className="input input-bordered rounded-full"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Type here your password"
              className="input input-bordered rounded-full"
            />
          </label>

          <button type='submit' className="btn btn-block btn-lg bg-[#4B4AEF] text-white mt-10 text-lg hover:text-black rounded-full">Register</button>
        </form>
      </div>
    </div>
  );
}
