export default function UpdateProfilePage() {
  return (
    <div className="flex w-full h-full gap-10">
      <div className="w-[35%]">
        <img
          src="https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-80 h-80 rounded-xl"
        />
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs mt-5 rounded-full"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="font-black text-4xl">Profile Detail</h1>
        <div className="w-full">
          <label htmlFor="" className="text-lg">
            Name
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Phone Number
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            placeholder="Your Password"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <button className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full">
          Save
        </button>
      </div>
    </div>
  );
}
