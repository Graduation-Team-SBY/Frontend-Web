import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { formatCurrencyRupiah } from '../../../helpers/currency';
import axios from '../../../config/axiosInstance';
import { Swiper, SwiperSlide } from 'swiper/react';
import DetailMaps from '../../../components/DetailMaps';
import { Navigation, Pagination } from 'swiper/modules';

export default function DetailJobWorkerPage() {
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const showData = async (id) => {
    try {
      setIsLoading(true);

      const { data } = await axios({
        method: 'GET',
        url: `/jobs/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      setOrder(data);
      console.log(data, '<<data detail');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationOrder = () => {
    navigate('/yasa/order/verification', { state: { order } });
  };

  const handleToChat = (id) => {
    navigate(`/yasa/order/${id}/chat`, { state: { order } });
  };

  useEffect(() => {
    showData(id);
  }, [id]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h2 className="font-black text-4xl">Detail Pesanan</h2>
      <div className="mt-20 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          {order.images ? (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper w-[80%]"
            >
              {order.images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img className="rounded-xl" src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <DetailMaps location={order.coordinates} />
          )}
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-black text-4xl">{order.category?.name}</h2>
          <p className="font-bold">{formatCurrencyRupiah(order.fee)}</p>

          <p className="font-bold mt-10">Deskripsi: </p>
          <p className="">{order.description}</p>

          <p className="font-bold mt-10">Alamat:</p>
          <p>{order.address}</p>
          {/* <p>{order.address}</p> */}
          <p className="font-bold mt-10">Catatan Alamat:</p>
          {order.addressNotes ? (
            <p>{order.addressNotes}</p>
          ) : (
            <p className="text-gray-400">(Tidak ada)</p>
          )}

          <div className="mt-10 flex gap-4">
            <button
              className="w-1/2 bg-[#05ECAE] text-white py-2 rounded-full transition duration-300"
              onClick={() => handleToChat(id)}
            >
              Pesan
            </button>
            {!order.status?.isWorkerConfirmed && (
              <button
                className="w-1/2 bg-[#1D204C] text-white py-2 rounded-full hover:bg-[#1D204C]/90 focus:ring-4 focus:outline-none focus:ring-[#1D204C]/50 transition duration-300"
                onClick={() => handleVerificationOrder()}
              >
                Selesai
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
