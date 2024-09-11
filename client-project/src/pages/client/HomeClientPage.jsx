import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

import { Autoplay, EffectCreative } from "swiper/modules";
// import { formatCurrencyRupiah } from '../../helpers/currency';
import axios from "../../config/axiosInstance";
import { toast } from "react-toastify";
import Wallet from "../../components/ClientComponent/Wallet";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/features/clientProfileSlice";

export default function HomeClientPage() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.clientProfile);
  const [yasaBest, setYasaBest] = useState([]);

  const fetchBestYasa = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/clients/best-yasa",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      // console.log(data, "<<<<<< Bst yass");
      setYasaBest(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBestYasa();
  }, []);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <>
      <h1 className="hidden lg:block font-black text-5xl my-20 text-[#1D204C]">
        Halo,{" "}
        <span className="text-[#05ECAE]">
          {profile.name ? profile.name : "Jalu"}
        </span>{" "}
        !
      </h1>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 justify-between mt-10">
        <div className="my-auto w-full lg:w-1/2">
          <h1 className="lg:hidden font-black text-5xl my-10 text-[#1D204C]">
            Halo, <span className="text-[#05ECAE]">{profile.name ? profile.name : "Jalu"}</span> !
          </h1>

          <h2 className="font-bold text-xl md:text-2xl lg-text-3xl">
            Mau Ngapain Hari Ini?
          </h2>
          <div className="flex gap-6">
            <Link
              to="/jalu/order/add-shopping"
              className="bg-white mt-10 p-10 w-full rounded-xl flex flex-col justify-center items-center text-[#1D204C] hover:bg-[#05ECAE]"
            >
              <img
                className="w-[60%] md:w-[35%] lg:w-[70%] xl:w-[60%]"
                src="/shopping-bag.png"
                alt="belanja"
              />
              <span className="font-bold text-md mt-4 text-center">Nitip</span>
            </Link>
            <Link
              to="/jalu/order/add-cleaning"
              className="bg-white mt-10 p-10 w-full rounded-xl flex flex-col justify-center items-center text-[#1D204C] hover:bg-[#05ECAE]"
            >
              <img
                className="w-[60%] md:w-[35%] lg:w-[70%] xl:w-[60%]"
                src="/bucket-cleaner.png"
                alt="bersih"
              />
              <span className="font-bold text-md mt-4 text-center">
                Bebersih
              </span>
            </Link>
          </div>
        </div>

        <Wallet name={profile.name} />
      </div>

      {/* Carousel */}
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        effect={"creative"}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper mt-14"
      >
        <SwiperSlide>
          <img src="/banner1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner4.png" alt="" />
        </SwiperSlide>
      </Swiper>
      {/* Carousel */}

      <div className="mt-20">
        <h2 className="font-black text-3xl lg:text-4xl">Yasa Terbaik</h2>
        

        <div className="list-card flex gap-6 mt-5 overflow-y-auto no-scrollbar rounded-xl">
          {yasaBest.map((yasa) => {
            return (
              <div className="p-10 bg-white text-[#1D204C] rounded-xl w-96 shrink-0" key={yasa._id}>
                <blockquote className="rounded-lg bg-[#ffffff]">
                  <div className="flex items-center gap-4">
                    <img
                      alt={yasa.name}
                      src={yasa.profilePicture}
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <p className="mt-0.5 text-lg font-medium text-[#1D204C]">
                        {yasa.name}
                      </p>
                      <div className="badge badge-warning badge-outline p-3 gap-1  flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-bold text-[#1D204C]">
                          {yasa.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700 line-clamp-5">{yasa.bio}</p>
                </blockquote>
              </div>
            );
          })}
        </div>
      </div>

      
    </>
  );
}
