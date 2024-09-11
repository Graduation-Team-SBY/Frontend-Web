import { useEffect, useState } from 'react';
import axios from '../../config/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import { formatCurrencyRupiah } from '../../helpers/currency';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import DetailMaps from '../../components/DetailMaps';

export default function DetailJobPage() {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const showDetailOrderClient = async (id) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `/jobs/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data, "<< data detail");
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApplyJob = async (id) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: `workers/jobs/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      navigate('/yasa');
      toast.success('Successfully apply for the job');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      if (error.response.data.message === 'Fill in your profile first!') {
        navigate('/yasa/profile');
      }
    }
  };

  useEffect(() => {
    showDetailOrderClient(id);
  }, [id]);

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
          
          <button
            className="mt-10 w-1/2 bg-[#1D204C] text-white py-2 rounded-full hover:bg-[#1D204C]/90 focus:ring-4 focus:outline-none focus:ring-[#1D204C]/50 transition duration-300"
            onClick={() => handleApplyJob(id)}
          >
            Melamar
          </button>
        </div>
      </div>
    </div>
  );
}
