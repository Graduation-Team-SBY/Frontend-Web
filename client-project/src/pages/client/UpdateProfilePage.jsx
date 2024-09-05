export default function UpdateProfilePage() {
  return (
    <div className="">
      <form className="flex gap-10 mt-4 justify-between">
        <div className="w-[30%] my-auto">
          <img
            className="object-cover h-[60%] rounded-3xl "
            src="https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mt-5 rounded-full"
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
              className="input input-bordered w-full rounded-full py-6"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Phone Number</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-full py-6"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-full py-6"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-full py-6"
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
