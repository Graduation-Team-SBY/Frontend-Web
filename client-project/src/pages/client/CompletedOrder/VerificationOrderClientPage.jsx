import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingReview from "../../../components/ClientComponent/RatingOrder";

export default function VerificationOrderClient() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center flex-col bg-[#FAF9FE] min-h-screen py-8">
      <ul className="steps steps-vertical lg:steps-horizontal mb-8">
        <li className="step step-primary">Verifikasi Pesanan</li>
        <li className="step">Pembayaran</li>
        <li className="step">Selesai</li>
      </ul>

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
            <span className="font-semibold">IDR 1,200,000</span>
          </div>
          <div className="flex justify-between">
            <span>Tugas yang Disertakan</span>
            <span className="font-semibold">3 tasks</span>
          </div>
          <div className="space-y-1">
            <span>Detail Tugas:</span>
            <ul className="list-disc pl-5">
              <li>Tugas 1: Design Review - IDR 400,000</li>
              <li>Tugas 2: Backend Development - IDR 500,000</li>
              <li>Tugas 3: UI Testing - IDR 300,000</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <RatingReview rating={rating} setRating={setRating} />
          <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
            Deskripsi (Opsional)
          </label>
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#1D204C]"
            rows="4"
            placeholder="Tambahkan catatan atau komentar..."
          ></textarea>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/payment-pending-client"
            className="bg-[#1D204C] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#0b1434] transition duration-300"
          >
            Kirim Verifikasi
          </Link>
        </div>
      </div>
    </div>
  );
}
