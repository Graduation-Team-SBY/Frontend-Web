import { toast } from 'react-toastify';
import axios from '../../config/axiosInstance';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

export default function AddOrderPage() {
  const navigate = useNavigate();
  const [fee, setFee] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [images, setImages] = useState([]);

  const handleNewJob = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fee', fee);
    formData.append('description', description);
    formData.append('address', address);

    for (let i = 0; i < images.length; i++) {
      formData.append('image', images[i]);
    }

    try {
      const { data } = await axios({
        method: 'POST',
        url: '/clients/jobs/bersih',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
          // 'Content-Type': 'multipart/form-data',
        },
        data: formData,
      });
      console.log(data);

      navigate('/jalu');
      toast.info("Berhasil membuat Pekerjaan")
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
      if (error.response.data.message === "Fill in your profile first!") {
        navigate("/jalu/profile")
      }
    }
  };

  return (
    <div className="flex w-full h-full gap-10">
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

          <label className="form-control w-full mt-5">
            <div className="label">
              <span className="label-text">
                Tambahkan foto ruangan yang ingin di bersihkan
              </span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full rounded-full"
              multiple
              onChange={(e) => setImages(e.target.files)}
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
