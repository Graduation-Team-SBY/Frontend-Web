import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="">
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black">My Profile</h1>
        <div className="flex items-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Unduh Profile
          </button>
        </div>
      </div>
      {/* Profile */}
      <div className=" mb-8 mt-20">
        <div className="">
          <div className="flex flex-wrap gap-y-5 justify-between items-center">
            <div className="flex items-center gap-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BzIly8lOyVuXcOoG-DPpFoiheFNGa2t_pQ&s"
                alt="Profile Picture"
                className="w-32 h-32 rounded-full"
              />
              <div>
                <h3 className="text-xl md:text-3xl font-bold">Muhammad Farhan Rosidi</h3>
                <p className="text-gray-400 text-lg">myusername_farhan</p>
              </div>
            </div>
            <Link
              to="/client/profile/update"
              className="bg-white px-6 rounded-full hover:bg-[#1D204C] hover:text-white"
            >
              <div className="flex items-center gap-2 h-12 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <p>Edit Profile</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-20 gap-y-10 mt-20">
            <div className="">
              <p className="text-gray-400">Status</p>
              <p className="font-bold text-xl">
                Worker / 
                <span className="text-green-600">Client</span>
              </p>
            </div>

            <div className="">
              <p className="text-gray-400">Email Address</p>
              <p className="font-bold text-xl">farhan@mail.com</p>
            </div>

            <div className="">
              <p className="text-gray-400">Nomor Telephone</p>
              <p className="font-bold text-xl">08888888889</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-20 gap-y-10 mt-10 mb-20">
            <div className="">
              <p className="text-gray-400">Date of Birth</p>
              <p className="font-bold text-xl">28 June 2001</p>
            </div>

            <div className="">
              <p className="text-gray-400">My Address</p>
              <p className="font-bold text-xl">Jl. in aja dulu no. 45 IK Surabaya</p>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="">
        <h2 className="text-2xl font-black mb-4">Histori</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card */}
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 08, 2023</p>
              <span className="bg-[#1D204C] text-white py-1 px-3 rounded-lg text-xs">
                Belanja
              </span>
            </div>
            <p className="text-sm mt-2">My Order sCleaning Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">
              My Order Besssssssssssssssih-bersih Swimming Pool
            </p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
