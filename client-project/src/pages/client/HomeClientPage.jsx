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

export default function HomeClientPage() {
  //! data undefined
  // const showUsername = async () => {
  //   try {
  //     const { data } = axios({
  //       method: "GET",
  //       url: "/profile",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.access_token}`,
  //       },
  //     });
  //     console.log(data, ">>>>>>Ini data USER");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   showUsername();
  // }, []);

  return (
    <>
      <h1 className="hidden lg:block font-black text-5xl my-20 text-[#1D204C]">
        Halo, <span className="text-[#05ECAE]">Adit</span> !
      </h1>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-10 justify-between mt-10">
        <div className="my-auto w-full lg:w-1/2">
          <h1 className="lg:hidden font-black text-5xl my-10 text-[#1D204C]">
            Halo, <span className="text-[#05ECAE]">Adit</span> !
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
              <span className="font-bold text-md mt-4 text-center">
                Nitip
              </span>
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
              <span className="font-bold text-md mt-4 text-center">Bebersih</span>
            </Link>
          </div>
        </div>

        <Wallet />
        
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
        <h2 className="font-black text-3xl lg:text-4xl">Recommendation</h2>
        <div className="flex gap-4 lg:justify-end items-center mt-5">
          <p>Filter :</p>
          <select className="select select-ghost w-fit" defaultValue="">
            <option value="">
              All
            </option>
            <option value="Bebersih">Bebersih</option>
            <option value="Nitip">Nitip</option>
          </select>
        </div>

        <div className="list-card flex gap-6 mt-5 overflow-y-auto no-scrollbar rounded-xl">
          {[1, 2, 3, 4, 5, 6].map((_, i) => {
            return (
              <Link
                to={`/${i}`}
                className="p-10 bg-white text-[#1D204C] rounded-xl w-96 shrink-0"
                key={i}
              >
                <h3 className="font-black">Pencuci Piring</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores officia tempora voluptates ea id maiores earum
                  numquam qui sapiente, eius, quisquam assumenda illo quis ipsa
                  cum? Rem eveniet odio officiis?
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-black text-3xl lg:text-4xl">Histories</h2>
        <div className="flex gap-4 lg:justify-end items-center mt-5">
          <p>Filter :</p>
          <select className="select select-ghost w-fit" defaultValue="">
            <option value="">
              All
            </option>
            <option value="Bebersih">Bebersih</option>
            <option value="Nitip">Nitip</option>
            
          </select>
        </div>

        <div className="list-card flex gap-6 mt-5 overflow-y-auto no-scrollbar rounded-xl">
          {[1, 2, 3, 4, 5, 6].map((_, i) => {
            return (
              <div
                className="p-10 bg-white text-[#1D204C] rounded-xl w-96 shrink-0"
                key={i}
              >
                <h3 className="font-black">Pencuci Piring</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores officia tempora voluptates ea id maiores earum
                  numquam qui sapiente, eius, quisquam assumenda illo quis ipsa
                  cum? Rem eveniet odio officiis?
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
