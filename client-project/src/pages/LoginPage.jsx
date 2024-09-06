// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../config/axiosInstance";
// import { toast } from "react-toastify";

export default function LoginPage() {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handlerLogin = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const { data } = await axios({
  //       method: "POST",
  //       url: "/login",
  //       data: {
  //         email,
  //         password,
  //       },
  //     });

  //     // console.log(data)
  //     localStorage.setItem("access_token", data.access_token);
  //     toast.info("Success to login");
  //     navigate("/");
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };
  return (
    <div className="min-h-screen flex gap-10 container mx-auto px-5 md:px-10 lg:px-32">
      <div className="hidden lg:flex justify-center content-center lg:w-1/2 min-h-screen">
        <img
          className="w-[100%]"
          src="/login2.svg"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center text-[#1D204C]">
        <h1 className="font-black text-5xl">Login</h1>
        <h6 className="font-bold text-gray-400">Welcome back!</h6>

        <form
          // onSubmit={handlerLogin}
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
              // onChange={(e) => setEmail(e.target.value)}
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
              // onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="btn btn-block btn-lg bg-[#1D204C] text-white mt-10 text-lg hover:text-[#1D204C] rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
