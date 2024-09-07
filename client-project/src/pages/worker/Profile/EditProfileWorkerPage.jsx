import ImageEditProfile from '../../../components/workerComponent/ImageEditProfile';

// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg
export default function EditProfileWorkerPage() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="flex flex-col lg:flex-row p-6 bg-[#FAF9FE] w-full mx-auto justify-center">
        <div className="bg-[#FFFFFF] p-10 rounded-2xl lg:rounded-r-none flex flex-col items-center w-[30%]">
          <h3 className="text-xl font-semibold text-[#1D204C] mb-4">
            Profile Picture
          </h3>
          <ImageEditProfile />
        </div>

        <div className="bg-[#FFFFFF] p-10 rounded-2xl lg:rounded-l-none w-[60%]">
          <h3 className="text-xl font-semibold text-[#1D204C] mb-4">
            Edit Account
          </h3>
          <form className="space-y-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Phone Number</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Gender
                </span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full bg-[#1D204C] text-[#FFFFFF] py-2 rounded-md hover:bg-[#1D204C]/90 focus:ring-4 focus:outline-none focus:ring-[#1D204C]/50 transition duration-300"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
