import ImageEditProfile from "../../../components/workerComponent/ImageEditProfile";

export default function EditProfileWorkerPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 bg-[#FAF9FE] rounded-lg max-w-4xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg lg:rounded-r-none flex flex-col items-center">
          <ImageEditProfile />
        </div>

        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg lg:rounded-l-none">
          <h3 className="text-xl font-semibold mb-4">Edit Account</h3>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Name</label>
              <input
                className="mt-1 p-2 border border-gray-300 rounded-md"
                defaultValue="Aditya Saputra"
                type="text"
                id="name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Gender</label>
              <select
                id="gender"
                className="mt-1 p-2 border border-gray-300 rounded-md bg-white"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Profile Picture</label>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#1D204C] text-white p-2 rounded-md hover:bg-[#1D204C]/90 transition duration-300"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
