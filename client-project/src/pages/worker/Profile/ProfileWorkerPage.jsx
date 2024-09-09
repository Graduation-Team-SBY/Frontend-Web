import { Link } from "react-router-dom";
import CardSaldo from "../../../components/workerComponent/CardSaldo";
import StarRating from "../../../components/workerComponent/StarRating";
import Testimoni from "../../../components/workerComponent/TestimoniWorker";
import { useEffect, useState } from "react";
import axios from "../../../config/axiosInstance";
import { formatDate } from "../../../helpers/formatDate";
import { age } from "../../../helpers/age";

// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg

export default function ProfileWorkerPage() {
  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/workers/profile",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <div className="mt-10 py-8">
        <div className="flex flex-col-reverse lg:flex-row mb-6 gap-y-5 lg:gap-x-10">
          {/* disini */}
          <div className="w-full lg:w-[60%] bg-white py-10 px-8 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <img
                  className="w-16 h-16 rounded-full object-cover ring ring-white"
                  src="
                  alt="Profile"
                /> */}
                {profile[0]?.profilePicture ? (
                  <img
                    className="w-16 h-16 rounded-full object-cover ring ring-white"
                    src={profile[0]?.profilePicture}
                  />
                ) : (
                  <img
                    className="w-16 h-16 rounded-full object-cover ring ring-white"
                    alt={profile[0]?.name}
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                  />
                )}
                <div>
                  {profile[0]?.name ? (
                    <h3 className="text-xl font-semibold">
                      {profile[0]?.name}
                    </h3>
                  ) : (
                    <h3 className="text-xl font-semibold">
                      Silakan update profile
                    </h3>
                  )}
                  <StarRating />
                </div>
              </div>
              <Link
                to="/yasa/profile/update"
                className="bg-[#1D204C] text-[#FAF9FE] px-4 py-2 rounded-full"
              >
                Edit
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-20 gap-y-10 mt-20">
              <div className="">
                <p className="text-gray-400">Status</p>
                <p className="font-bold text-xl text-green-600 capitalize">
                  {localStorage.role}
                </p>
              </div>

              <div className="">
                <p className="text-gray-400">Umur</p>
                {profile[0]?.dateOfBirth ? (
                  <p className="font-bold text-xl">
                    {age(profile[0]?.dateOfBirth)}
                  </p>
                ) : (
                  <p className="font-bold text-xl text-gray-400">
                    (Belum Diisi)
                  </p>
                )}
              </div>

              <div className="">
                <p className="text-gray-400">Nomor Telephone</p>
                <p className="font-bold text-xl">
                  {profile[0]?.userData?.phoneNumber}
                </p>
              </div>

              <div className="">
                <p className="text-gray-400">Email</p>
                <p className="font-bold text-xl">
                  {profile[0]?.userData?.email}
                </p>
              </div>

              <div className="">
                <p className="text-gray-400">Bergabung pada</p>
                <p className="font-bold text-xl">
                  {formatDate(profile[0]?.userData?.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-20 gap-y-10 mt-10 mb-20">
              <div className="">
                <p className="text-gray-400">Tanggal Lahir</p>
                {/* <p className="font-bold text-xl">28 June 2001</p> */}
                {profile[0]?.dateOfBirth ? (
                  <p className="font-bold text-xl">
                    {formatDate(profile[0]?.dateOfBirth)}
                  </p>
                ) : (
                  <p className="font-bold text-xl text-gray-400">
                    (Belum Diisi)
                  </p>
                )}
              </div>

              <div className="">
                <p className="text-gray-400">My Address</p>
                {profile[0]?.address ? (
                  <p className="font-bold text-xl">{profile[0]?.address}</p>
                ) : (
                  <p className="font-bold text-xl text-gray-400">
                    (Belum Diisi)
                  </p>
                )}
              </div>
            </div>
          </div>
          <CardSaldo data={profile[0]} />
          {/* <div className="w-1/2 flex items-center justify-center">
          </div> */}
        </div>

        {/* <div className="flex space-x-4 mb-6">
        <div className="flex-1 bg-white p-5 rounded-lg shadow-md text-center">
          <span>Total Order</span>
        </div>
        <div className="flex-1 bg-white p-5 rounded-lg shadow-md text-center">
          <span>BELUM</span>
        </div>
        <div className="flex-1 bg-white p-5 rounded-lg shadow-md text-center">
          <span>SELESAI</span>
        </div>
      </div> */}

        <Testimoni />
      </div>
    </>
  );
}
