// import React, { useState } from "react";
// import axios from "../config/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

export default function RegisterPage() {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");

  // const handleRegister = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const { data } = await axios({
  //       method: "POST",
  //       url: "/register",
  //       data: {
  //         email,
  //         phoneNumber,
  //         password,
  //       },
  //     });
  //     console.log(data);
  //     toast.info("Success to Register");
  //     navigate("/login");
  //   } catch (error) {
  //     // console.log(error)
  //     error.response.data.message.map((err) => {
  //       return toast.error(err);
  //     });
  //   }
  // };
  return (
    <div className="min-h-screen flex container mx-auto px-10 lg:px-36 relative">
      <div className="hidden lg:flex justify-center content-center lg:w-1/2 min-h-screen">
        <img
          className="absolute w-[50%] bottom-14 left-0"
          src="/register.svg"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center text-[#1D204C]">
        <h1 className="font-black text-5xl">Register</h1>
        <h6 className="font-bold text-gray-400">Create Account in this app</h6>

        <form
          // onSubmit={handleRegister}
          className="mt-10 w-full px-16"
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
              <span className="label-text font-bold">Phone Number</span>
            </div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Type here your number"
              className="input input-bordered rounded-full p-7"
              // onChange={(e) => setPhoneNumber(e.target.value)}
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
