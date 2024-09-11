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

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Ubah foto profile mu</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full rounded-full"
              onChange={handleFileChange}
            />
          </label>
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
