import { Link } from 'react-router-dom';
import CardSaldo from '../../../components/workerComponent/CardSaldo';
import StarRating from '../../../components/workerComponent/StarRating';
import Testimoni from '../../../components/workerComponent/TestimoniWorker';
import { useEffect, useState } from 'react';
import axios from '../../../config/axiosInstance';
import { formatDate } from '../../../helpers/formatDate';
import { age } from '../../../helpers/age';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../../redux/features/workerProfileSlice';

// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg

export default function ProfileWorkerPage() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.workerProfile);
  // const [profile, setProfile] = useState([]);

  // const fetchProfile = async () => {
  //   try {
  //     const { data } = await axios({
  //       method: "GET",
  //       url: "/workers/profile",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.access_token}`,
  //       },
  //     });

  //     console.log(data);
  //     setProfile(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchProfile();
    dispatch(fetchProfile());
  }, []);
  return (
    <>
      <div className="mt-4 py-8">
        <div className="flex flex-col lg:flex-row mb-6 gap-y-5 lg:gap-x-10">
          {/* disini */}
          <div className="w-full lg:w-[60%] bg-white py-14 px-10 lg:px-20 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <img
                  className="w-16 h-16 rounded-full object-cover ring ring-white"
                  src="
                  alt="Profile"
                /> */}
                {profile.profilePicture ? (
                  <img
                    className="w-16 h-16 rounded-full object-cover ring ring-white"
                    src={profile.profilePicture}
                  />
                ) : (
                  <img
                    className="w-16 h-16 rounded-full object-cover ring ring-white"
                    alt={profile.name}
                    src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
                  />
                )}
                <div>
                  {profile.name ? (
                    <h3 className="text-xl font-semibold">{profile.name}</h3>
                  ) : (
                    <h3 className="text-xl font-semibold text-gray-400">
                      (Silakan update profile)
                    </h3>
                  )}
                  {/* <StarRating /> */}
                  <div className="badge badge-warning badge-outline text-white font-bold flex gap-2 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-black">{profile.rating}</span>
                  </div>
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
                <p className="text-gray-400">Umur</p>
                {profile.dateOfBirth ? (
                  <p className="font-bold text-xl">
                    {age(profile.dateOfBirth)}
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
                  {profile.userData?.phoneNumber}
                </p>
              </div>

              <div className="">
                <p className="text-gray-400">Email</p>
                <p className="font-bold text-xl">{profile.userData?.email}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-20 gap-y-10 mt-10 mb-20">
              <div className="">
                <p className="text-gray-400">Tanggal Lahir</p>
                {/* <p className="font-bold text-xl">28 June 2001</p> */}
                {profile.dateOfBirth ? (
                  <p className="font-bold text-xl">
                    {formatDate(profile.dateOfBirth)}
                  </p>
                ) : (
                  <p className="font-bold text-xl text-gray-400">
                    (Belum Diisi)
                  </p>
                )}
              </div>

              <div className="">
                <p className="text-gray-400">My Address</p>
                {profile.address ? (
                  <p className="font-bold text-xl">{profile.address}</p>
                ) : (
                  <p className="font-bold text-xl text-gray-400">
                    (Belum Diisi)
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[40%] gap-10">
            <CardSaldo data={profile} />

            <div className="bg-white p-10 rounded-xl">
              <div className=" flex gap-10">
                <div className="">
                  <p className="text-gray-400">Status</p>
                  <p className="font-bold text-xl text-green-600 capitalize">
                    {localStorage.role}
                  </p>
                </div>
                <div className="">
                  <p className="text-gray-400">Pekerjaan yang sudah di ambil</p>
                  <p className="font-bold text-xl text-green-600 capitalize">
                    {profile.jobDone}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-gray-400">Bergabung pada</p>
                <p className="font-bold text-xl">
                  {formatDate(profile.userData?.createdAt)}
                </p>
              </div>
            </div>
          </div>
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
