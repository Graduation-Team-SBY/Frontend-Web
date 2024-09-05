export default function ProfilePage() {
  return (
    <div className="p-8 rounded-lg shadow-lg">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">My Profile</h2>
        <div className="flex items-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Unduh Profile
          </button>
        </div>
      </div>
      {/* Profile */}
      <div className="flex justify-between gap-4 mb-8">
        <div className="p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <img
              src="https://w7.pngwing.com/pngs/329/299/png-transparent-doraemon-character-youtube-television-channel-doraemon-doraemon-television-cartoon-anime-thumbnail.png"
              alt="Profile Picture"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold">Muhammad Farhan Rosidi</h3>
              <p className="text-gray-400">myusername_farhan</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">Status</p>
            <p className="font-medium">
              Worker / <span className="text-green-600">Client</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">My Address</p>
            <p className="font-medium">Jl. in aja dulu no. 45 IK Surabaya</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">Nomor Telephone</p>
            <p className="font-medium">08888888889</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">Email Address</p>
            <p className="font-medium">farhan@mail.com</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">Password</p>
            <p className="font-medium">Jl. in aja dulu no. 45 IK Surabaya</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">Date of Birth</p>
            <p className="font-medium">28 June 2001</p>
          </div>
        </div>

        {/* Side Content */}
        <div className="p-4 rounded-lg flex items-start gap-4">
          <button
            className="
          shadow-lg p-4 rounded-xl"
          >
            <div className="flex items-center gap-2 h-12">
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="text-gray-400 ml-4">My Orders</p>
            </div>
          </button>
          <button
            className="
          shadow-lg p-4 rounded-xl"
          >
            <div className="flex items-center gap-2 h-12">
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
                  d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
                />
              </svg>
              <p className="text-gray-400 ml-4">My Deal Job</p>
            </div>
          </button>
          <button
            className="
          shadow-lg p-4 rounded-xl"
          >
            <div className="flex items-center gap-2 h-12">
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
              <p className="text-gray-400 ml-4">Edit Profile</p>
            </div>
          </button>
        </div>
      </div>

      {/* History */}
      <div className="p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Histori</h2>
        <div className="flex flex-wrap gap-4">
          {/* Card */}
          <div className="p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between">
              <p className="text-sm">March 08, 2023</p>
              <span className="bg-[#1D204C] text-white py-1 px-3 rounded-lg text-xs">
                Belanja
              </span>
            </div>
            <p className="text-sm mt-2">My Order sCleaning Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-64">
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
          <div className="p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-64">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg w-64">
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
