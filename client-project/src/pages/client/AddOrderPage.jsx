export default function AddOrderPage() {
  return (
    <>
      <h1 className="text-4xl">Let's start with your first job post.</h1>
      <div className="mt-[50px] flex w-full justify-between">
        <div className="w-[400px]">
          <img
            src="https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[400px] h-[530px] rounded-[50px]"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <label htmlFor="" className="text-lg font-semibold">
              Job Title:
            </label>
            <input
              type="text"
              placeholder="Job here"
              className="input input-bordered w-[755px] max-w-xs"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-lg font-semibold">
              Category Title:
            </label>
            <input
              type="text"
              placeholder="Category title"
              className="input input-bordered w-[755px] max-w-xs"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-lg font-semibold">
              Due Date:
            </label>
            <input
              type="date"
              placeholder="Due date"
              className="input input-bordered w-[755px] max-w-xs"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-lg font-semibold">
              Description Title:
            </label>
            <input
              type="text"
              placeholder="Description Title"
              className="input input-bordered w-[755px] max-w-xs"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-lg font-semibold">
              Job Price:
            </label>
            <input
              type="text"
              placeholder="Job Price"
              className="input input-bordered w-[755px] max-w-xs"
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="" className="text-lg font-semibold">
              Job Title:
            </label>
            <input
              type="text"
              placeholder="Job here"
              className="input input-bordered w-[755px] max-w-xs"
            />
          </div>
          <button className="btn btn-xs bg-[#1D214E] text-white sm:btn-sm md:btn-md lg:btn-lg">
            Create
          </button>
        </div>
      </div>
    </>
  );
}
