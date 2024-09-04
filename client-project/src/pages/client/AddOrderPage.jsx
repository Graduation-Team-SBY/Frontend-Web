export default function AddOrderPage() {
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
        <h1 className="font-black text-4xl">
          Let's start with your first job post.
        </h1>
        <div className="w-full">
          <label htmlFor="" className="text-lg">
            Job Title
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Job Title"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Category Title
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Category Title"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Due Date
          </label>{" "}
          <br />
          <input
            type="date"
            placeholder="Your Due Date"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Description Job
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Description Job"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Price
          </label>{" "}
          <br />
          <input
            type="number"
            placeholder="Your Job Price"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <button className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full">
          Create
        </button>
      </div>
    </div>
  );
}
