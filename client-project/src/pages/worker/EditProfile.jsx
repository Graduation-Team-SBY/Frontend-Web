export default function EditProfilePage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 bg-[#FAF9FE] rounded-lg max-w-4xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg lg:rounded-r-none flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://cms.disway.id/uploads/f7cb1e5206fe678360ca8496acf70728.jpg"
              alt="Profile"
            />
          </div>
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
              <div className="relative w-24 h-24 mb-4">
            {/* Hidden file input */}
            <input
              id="upload"
              type="file"
              className="hidden"
              accept="image/*"
            />

            <label htmlFor="upload" className="cursor-pointer relative block">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://variety.com/wp-content/uploads/2023/07/GettyImages-1511418315.jpg?w=1024"
                alt="Profile"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-700 opacity-80"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </div>
            </label>
          </div>
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
