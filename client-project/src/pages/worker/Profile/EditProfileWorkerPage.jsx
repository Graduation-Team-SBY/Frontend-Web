import ImageEditProfile from "../../../components/workerComponent/ImageEditProfile";

// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg
export default function EditProfileWorkerPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 bg-[#FAF9FE] rounded-lg max-w-4xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/3 bg-[#FFFFFF] p-6 rounded-lg lg:rounded-r-none flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#1D204C] mb-4">
            Profile Picture
          </h3>
          <ImageEditProfile />
        </div>

        <div className="w-full lg:w-2/3 bg-[#FFFFFF] p-6 rounded-lg lg:rounded-l-none">
          <h3 className="text-xl font-semibold text-[#1D204C] mb-4">
            Edit Account
          </h3>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#1D204C]">Name</label>
              <input
                className="mt-1 p-2 rounded-md"
                defaultValue="Aditya Saputra"
                type="text"
                id="name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#1D204C] outline-none">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#1D204C]">
                Gender
              </label>
              <select
                id="gender"
                className="mt-1 p-2 rounded-md bg-[#FFFFFF] outline-none"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1D204C] text-[#FFFFFF] py-2 rounded-md hover:bg-[#1D204C]/90 focus:ring-4 focus:outline-none focus:ring-[#1D204C]/50 transition duration-300"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
