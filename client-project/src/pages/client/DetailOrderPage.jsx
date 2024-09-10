import { useEffect, useState } from "react";
import axios from "../../config/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatCurrencyRupiah } from "../../helpers/currency";
import { toast } from "react-toastify";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import DetailMaps from "../../components/DetailMaps";

export default function DetailOrderPage() {
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const { id } = useParams();

  const showDetailOrderClient = async (id) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `clients/jobs/${id}/workers`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(data, "<< detail order client >>>>>");
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAcceptWorker = async (jobId, workerId) => {
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `/clients/jobs/${jobId}/${workerId}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      // console.log(data);
      toast.info("Berhasil Menerima Worker");
      toast.info("Kamu tinggal tunggu pekerjaan nya beres");

      navigate("/jalu/order/my");
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/clients/jobs/${jobId}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      toast.info("Berhasil membatalkan order nya");
      navigate("/jalu/order/my");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleConfirm = async (jobId) => {
    try {
      const { data } = await axios({
        method: "PATCH",
        url: `/clients/jobs/${jobId}/client`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);

      toast.info("Anda telah menyelesaikan order anda");

      navigate(`/jalu/order/${id}/verification`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    showDetailOrderClient(id);
  }, []);
  return (
    <div>
      <h2 className="font-black text-4xl">Detail Order</h2>
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

          {order.workerId ? (
            <div className="flex gap-6">
              <Link
                to={`/jalu/order/${order._id}/chat`}
                className="btn bg-[#1D204C] text-white rounded-full mt-10"
              >
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
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </Link>
              <button
                onClick={() => handleConfirm(id)}
                className="btn bg-[#1D204C] text-white rounded-full mt-10"
              >
                Konfirmasi selesai
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleDelete(order._id)}
              className="btn bg-[#1D204C] rounded-full text-white mt-10"
            >
              Batalkan Pekerjaan
            </button>
          )}
        </div>
      </div>

      {/* Waiting List Worker */}

      {order.workerId ? null : (
        <div className="mt-10">
          <h2 className="text-2xl font-black mb-4">Waiting List Worker</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {order.workers
              ? order.workers.map((worker) => {
                  return (
                    <div
                      key={String(worker._id)}
                      className="p-6 rounded-xl shadow-lg w-full bg-white flex justify-between items-center"
                    >
                      <div className="">
                        <p className="font-bold">{worker.name}</p>
                        {/* <span className="bg-[#1D204C] text-white py-1 px-3 rounded-lg text-xs"> */}
                        {/* </span> */}
                        <div className="badge badge-warning badge-outline p-3 gap-1 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-bold text-[#1D204C]">{worker.rating}</span>
                        </div>
                        {/* rating {worker.rating} */}
                      </div>
                      <div className="card-actions">
                        <button
                          className="btn bg-[#1D204C] text-white hover:bg-[#05ECAE] py-2 rounded-full hover:text-[#1D204C]"
                          onClick={() => handleAcceptWorker(id, worker.userId)}
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
}
