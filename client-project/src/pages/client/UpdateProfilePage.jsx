import { useState } from "react";
import axios from "../../config/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UpdateProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const dataFrom = new FormData();
      if (name) {
        dataFrom.append("name", name);
      }

      if (dateOfBirth) {
        dataFrom.append("dateOfBirth", dateOfBirth);
      }

      if (address) {
        dataFrom.append("address", address);
      }

      if (image) {
        dataFrom.append("image", image);
      }

      const { data } = await axios({
        method: "PATCH",
        url: "/profile",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: dataFrom,
      });

      console.log(data);
      toast.info("Success to Update Profile");
      navigate("/client/profile");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="">
      <form
        className="flex gap-10 mt-4 justify-between"
        onSubmit={handleUpdate}
      >
        <div className="w-[30%] my-auto">
          {/* <img
            className="object-cover h-[60%] rounded-3xl "
            src="https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          /> */}
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mt-5 rounded-full"
            onChange={handleFileChange}
          />
        </div>
        <div className="w-[70%] my-auto pl-44">
          <h1 className="font-black text-4xl mb-10">Update Profile</h1>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={name}
              className="input input-bordered w-full rounded-full py-6"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Date of Birth</span>
            </div>
            <input
              type="date"
              placeholder="Type here"
              value={dateOfBirth}
              className="input input-bordered w-full rounded-full py-6"
              onChange={(e) => setdateOfBirth(e.target.value)}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Address</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={address}
              className="input input-bordered w-full rounded-full py-6"
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="py-4 w-full mt-14 rounded-full bg-[#1D204C] hover:bg-[#05ECAE] text-white hover:text-[#1D204C]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
// export default function UpdateProfilePage() {
//   return (
//     <>
//       <h1 className="font-black md:hidden text-3xl">Profile Detail</h1>
//       <form>
//         <div className="flex w-full h-full gap-10 xl:flex-rows">
//           <div className="w-full md:w-[35%]">
//             <img
//               src="https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//               className="w-full rounded-xl"
//             />
//             <input
//               type="file"
//               className="file-input file-input-bordered w-full max-w-xs mt-5 rounded-full"
//             />
//           </div>
//           <div className="flex-1 flex flex-col gap-4">
//             <h1 className="font-black text-4xl hidden md:block">
//               Profile Detail
//             </h1>
//             <div className="w-full">
//               <label htmlFor="" className="text-lg">
//                 Name
//               </label>{' '}
//               <br />
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="input input-bordered w-full rounded-full"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="text-lg">
//                 Phone Number
//               </label>{' '}
//               <br />
//               <input
//                 type="text"
//                 placeholder="Your Phone Number"
//                 className="input input-bordered w-full rounded-full"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="text-lg">
//                 Email
//               </label>{' '}
//               <br />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="input input-bordered w-full rounded-full"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="text-lg">
//                 Password
//               </label>{' '}
//               <br />
//               <input
//                 type="password"
//                 placeholder="Your Password"
//                 className="input input-bordered w-full rounded-full"
//               />
//             </div>
//             <button className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full">
//               Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
