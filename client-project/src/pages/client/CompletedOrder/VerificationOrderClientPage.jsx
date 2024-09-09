import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RatingReview from '../../../components/ClientComponent/RatingOrder';
import { toast } from 'react-toastify';
import axios from '../../../config/axiosInstance';
import { formatCurrencyRupiah } from '../../../helpers/currency';

export default function VerificationOrderClient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const [order, setOrder] = useState({});

  const fetchOrder = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `clients/jobs/${id}/workers`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      setOrder(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleRating = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('rating', rating);
      formData.append('description', description);

      for (let i = 0; i < images.length; i++) {
        formData.append('image', images[i]);
      }
      const { data } = await axios({
        method: 'POST',
        url: `/clients/jobs/${id}/review`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: formData,
      });

      console.log(data);

      toast.info('berhasil memberikan rating');
      navigate('/jalu');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);


  return (
    <div className="flex justify-center items-center flex-col bg-[#FAF9FE] min-h-screen py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-gray-200 text-[#1D204C] rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold mb-4 text-[#1D204C]">
          Verifikasi Pesanan
        </h2>
        <p className="text-center text-base mb-8 text-[#1D204C]">
          Tolong lakukan verifikasi pesanan untuk melanjutkan proses.
        </p>

        <hr className="my-6" />

        <div className="text-base text-[#1D204C] space-y-4">
          <div className="flex justify-between">
            <span>Jumlah Total</span>
            <span className="font-semibold">
              {formatCurrencyRupiah(order.fee)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Tugas yang Disertakan:</span>
          </div>
          <div className="space-y-1">
            <p>{order.description}</p>
          </div>
        </div>

        <form onSubmit={handleRating}>
          <div className="mt-10">
            <RatingReview rating={rating} setRating={setRating} />

            <label className="form-control">
              <div className="label">
                <span className="label-text font-semibold">Testimoni: </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder=""
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>

            <label className="form-control w-full mt-5">
              <div className="label">
                <span className="label-text">
                  Tambahkan foto Testimoni kamu
                </span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full rounded-full"
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
            </label>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              // onClick={handleRating}
              type='submit'
              className="bg-[#1D204C] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#0b1434] transition duration-300"
            >
              Kirim Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
