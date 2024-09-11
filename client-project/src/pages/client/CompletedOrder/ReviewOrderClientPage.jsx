import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RatingReview from '../../../components/ClientComponent/RatingOrder';
import { toast } from 'react-toastify';
import axios from '../../../config/axiosInstance';
import { formatCurrencyRupiah } from '../../../helpers/currency';

export default function ReviewOrderClient() {
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold mb-4 text-[#1D204C]">
          Review Yasa
        </h2>
        <p className="text-center text-base mb-8 text-[#1D204C]">
          berikan testimoni kamu ke yasa
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
                <span className="label-text font-semibold">
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
              type="submit"
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
