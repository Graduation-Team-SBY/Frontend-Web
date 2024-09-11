import { useEffect, useState } from 'react';
import axios from '../../config/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfilePage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);

  const fetchProfile = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'clients/profile',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setName(data.name);
      setAddress(data.address);
      setDateOfBirth(new Date(data.dateOfBirth).toISOString().split('T')[0]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const dataFrom = new FormData();
      if (name) {
        dataFrom.append('name', name);
      }

      if (dateOfBirth) {
        dataFrom.append('dateOfBirth', dateOfBirth);
      }

      if (address) {
        dataFrom.append('address', address);
      }

      if (image) {
        dataFrom.append('image', image);
      }

      const { data } = await axios({
        method: 'PATCH',
        url: '/clients/profile',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: dataFrom,
      });

      console.log(data);
      toast.info('Berhasil mengubah profile');
      navigate('/jalu/profile');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="">
      <form className="mt-4" onSubmit={handleUpdate}>
        <div className="w-full my-auto">
        <h1 className="font-black text-4xl mb-10">Ubah Profile</h1>

        <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <input
                id="upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="upload"
                className="cursor-pointer block relative w-full h-full"
              >
                <img
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
                  }
                  alt="Profile"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>

          {/* <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Ubah foto profile mu</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full rounded-full"
              onChange={handleFileChange}
            />
          </label> */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Nama</span>
            </div>
            <input
              type="text"
              placeholder="Ketikan Namamu di sini"
              defaultValue={name}
              className="input input-bordered w-full rounded-full py-6"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Tanggal Lahir</span>
            </div>
            <input
              type="date"
              defaultValue={dateOfBirth}
              className="input input-bordered w-full rounded-full py-6"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Alamat</span>
            </div>
            <input
              type="text"
              placeholder="Ketikan Alamatmu di sini"
              defaultValue={address}
              className="input input-bordered w-full rounded-full py-6"
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="py-4 w-full mt-14 rounded-full bg-[#1D204C] hover:bg-[#05ECAE] text-white hover:text-[#1D204C]"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
