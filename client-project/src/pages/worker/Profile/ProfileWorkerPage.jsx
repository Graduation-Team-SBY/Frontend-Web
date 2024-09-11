import { Link } from "react-router-dom";
import CardSaldo from "../../../components/workerComponent/CardSaldo";
import StarRating from "../../../components/workerComponent/StarRating";
import Testimoni from "../../../components/workerComponent/TestimoniWorker";
import { useEffect, useState } from "react";
import axios from "../../../config/axiosInstance";
import { formatDate } from "../../../helpers/formatDate";
import { age } from "../../../helpers/age";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/features/workerProfileSlice";
import { toast } from "react-toastify";

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

  const [testi, setTesti] = useState([]);
  const fetchTestimoni = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/workers/profile/reviews",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data, "<<<<< testi");
      setTesti(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimoni();
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
                  {profile.rating ? (
                    <div className="badge badge-warning badge-outline text-white font-bold flex gap-2 p-3 mt-2">
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
                  ) : (
                    <div className="badge badge-success badge-outline text-white font-bold flex gap-2 p-3 mt-2">
                      <span>Yusa Baru</span>
                    </div>
                  )}
                </div>
              </div>
              <Link
                to="/yasa/profile/update"
                className="bg-[#1D204C] text-[#FAF9FE] px-4 py-2 rounded-full flex hover:bg-[#05ECAE] hover:text-[#1D204C]"
              >
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
                Ubah Profile
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-20 gap-y-10 mt-20">
              <div className="">
                <p className="text-gray-400">Email</p>
                <p className="font-bold text-xl">{profile.userData?.email}</p>
              </div>

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
                <p className="text-gray-400">Nomor Telepon</p>
                <p className="font-bold text-xl">
                  {profile.userData?.phoneNumber}
                </p>
              </div>

              {/* <div i */}
            </div>

            <div className="flex flex-wrap gap-x-20 gap-y-10 mt-10 mb-10">
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
                <p className="text-gray-400">Alamat Saya</p>
                {profile.address ? (
                  <p className="font-bold text-xl">{profile.address}</p>
                ) : (
                  <p className="font-bold text-xl text-gray-400">
                    (Belum Diisi)
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <p className="text-gray-400">Bio</p>
              {profile.bio ? (
                <p className="font-bold text-xl">{profile.bio}</p>
              ) : (
                <p className="font-bold text-xl text-gray-400">(Belum Diisi)</p>
              )}
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
                  <p className="text-gray-400">Pekerjaan yang diselesaikan</p>
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

        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Baca ulasan terpercaya dari pelanggan{" "}
              <span className="text-[#05ECAE]">pelanggan </span>kami
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              {testi.map((testi) => (
                <Testimoni key={testi._id} testi={testi} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
