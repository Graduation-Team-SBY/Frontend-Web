import axios from '../../../config/axiosInstance';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { formatCurrencyRupiah } from '../../../helpers/currency';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PaymentConfirmClientPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleConfirm = async (jobId) => {
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: `/clients/jobs/${jobId}/client`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);

      toast.info('Anda telah menyelesaikan order anda');

      navigate(`/jalu/order/${id}/review`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col bg-[#FAF9FE] py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-[#FEE2E2] text-[#DC2626] rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold mb-4 text-[#1D204C]">
          Konfirmasi Pekerjaan
        </h2>
        <p className="text-center text-base mb-8 text-[#1D204C]">
          Tolong periksa kembali pekejaan apakah sudah sesuai atau belum
        </p>

        <hr className="my-6" />

        <div className="text-base text-[#1D204C] space-y-4">
          <div className="flex justify-between">
            <span className="font-bold">Jenis:</span>
            <span className="font-semibold badge badge-info text-white">
              {order.category?.name}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Jumlah Total</span>
            <span className="font-semibold">
              {formatCurrencyRupiah(order.fee)}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Detail {order.category?.name}:</span>
            <span>{order.description}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Bukti:</span>
            <div className="">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {order.status?.confirmationImages.map((image, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={image} className="w-full bg-cover rounded-xl" alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => handleConfirm(order._id)}
            className="bg-[#1D204C] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#0b1434] transition duration-300"
          >
            Lanjutkan Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
}
