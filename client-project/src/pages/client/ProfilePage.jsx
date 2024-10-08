import { useEffect, useState } from 'react';
import axios from '../../config/axiosInstance';
import { Link } from 'react-router-dom';
import { age } from '../../helpers/age';
import { formatDate } from '../../helpers/formatDate';
import CardHistory from '../../components/ClientComponent/CardHistori';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../redux/features/clientProfileSlice';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const [history, setHistory] = useState([]);
  const { profile } = useSelector((state) => state.clientProfile);

  const fetchHistory = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/profile/histories',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    // fetchProfile();
    fetchHistory();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black">Profile Saya</h1>
      </div>
      {/* Profile */}
      <div className=" mb-8 mt-20">
        <div className="">
          <div className="flex flex-wrap gap-y-5 justify-between items-center">
            <div className="flex items-center gap-10">
              {profile.profilePicture ? (
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={profile.profilePicture}
                />
              ) : (
                <img
                  className="w-32 h-32 rounded-full"
                  alt={profile.name}
                  src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
                />
              )}
              <div>
                {profile.name ? (
                  <h3 className="text-xl md:text-3xl font-bold">
                    {/* Muhammad Farhan Rosidi */}
                    {profile.name}
                  </h3>
                ) : (
                  <h3 className="text-xl md:text-3xl font-bold text-gray-400">
                    {/* Muhammad Farhan Rosidi */}
                    (Belum Diisi)
                  </h3>
                )}
                <p className="text-gray-400 text-lg">
                  {profile.userData?.email}
                </p>
              </div>
            </div>
            <Link
              to="/jalu/profile/update"
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
                <p>Ubah Profile</p>
              </div>
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
              {profile.dateOfBirth ? (
                <p className="font-bold text-xl">{age(profile.dateOfBirth)}</p>
              ) : (
                <p className="font-bold text-xl text-gray-400">(Belum Diisi)</p>
              )}
            </div>

            <div className="">
              <p className="text-gray-400">Nomor Telepon</p>
              <p className="font-bold text-xl">
                {profile.userData?.phoneNumber}
              </p>
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
                <p className="font-bold text-xl text-gray-400">(Belum Diisi)</p>
              )}
            </div>

            <div className="">
              <p className="text-gray-400">Alamat</p>
              {profile.address ? (
                <p className="font-bold text-xl">{profile.address}</p>
              ) : (
                <p className="font-bold text-xl text-gray-400">(Belum Diisi)</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="">
        <h2 className="text-2xl font-black mb-4">Riwayat Pesanan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card */}
          {history.map((histories, index) => (
            <CardHistory key={index} histories={histories} />
          ))}
        </div>
      </div>
    </div>
  );
}
