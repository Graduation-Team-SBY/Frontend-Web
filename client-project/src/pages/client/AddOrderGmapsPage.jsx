import axios from '../../config/axiosInstance';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Maps from '../../components/Maps';

export default function AddOrderGmapsPage() {
  // const [location, setLocation] = useState('Hacktiv');
  const defaultCenter = {
    lat: -6.2, // Lokasi default (Jakarta)
    lng: 106.816666,
  };

  const [location, setLocation] = useState(defaultCenter);

  const navigate = useNavigate();
  const [fee, setFee] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  const handleNewJob = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/clients/jobs/belanja',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: {
          fee,
          description,
          address,
        },
      });

      console.log(data);
      navigate('/client');
      toast.info('Berhasil membuat Pekerjaan');
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.data.message === 'Fill in your profile first!') {
        navigate('/client/profile');
      }
    }
  };

  useEffect(() => {
    console.log(address)
  }, [address])
  

  return (
    <div className="flex w-full h-full gap-10">
      <div className="w-[35%]">
        <Maps location={location} setLocation={setLocation} setAddress={setAddress} />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="font-black text-4xl">
          Let's start with your first job post.
        </h1>
        <form onSubmit={handleNewJob}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Fee</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              value={fee}
              className="input input-bordered w-full rounded-full"
              onChange={(e) => setFee(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Deskripsi</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 rounded-xl"
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Address</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Address Notes</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-full"
              // value={address}
              // onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full mt-10"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
