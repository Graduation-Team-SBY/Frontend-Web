import { Link } from "react-router-dom";

export default function PaymentCompletedWorkerPage() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#FAF9FE] min-h-screen py-8">
      <ul className="steps steps-vertical lg:steps-horizontal mb-8">
        <li className="step step-primary">Verifikasi Pesanan</li>
        <li className="step step-primary">Pembayaran</li>
        <li className="step step-primary">Selesai</li>
      </ul>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-[#05ECAE] text-white rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-3 text-[#1D204C]">
          Pembayaran Berhasil!
        </h2>
        <p className="text-center text-3xl font-bold mb-6 text-[#1D204C]">
          IDR 1,200,000
        </p>

        <hr className="my-6" />

        <div className="text-base text-[#1D204C] space-y-4">
          <div className="flex justify-between">
            <span>Nomer Ref</span>
            <span className="font-semibold">000085752257</span>
          </div>
          <div className="flex justify-between">
            <span>Waktu Pembayaran</span>
            <span className="font-semibold">06-09-2024, 00:00:00</span>
          </div>
          <div className="flex justify-between">
            <span>Metode Pembayaran</span>
            <span className="font-semibold">Bank Transfer</span>
          </div>
          <div className="flex justify-between">
            <span>Nama Pengirim</span>
            <span className="font-semibold">Aditya</span>
          </div>
          <div className="flex justify-between">
            <span>Jumlah</span>
            <span className="font-semibold">IDR 1,000,000</span>
          </div>
          <div className="flex justify-between">
            <span>Biaya Admin</span>
            <span className="font-semibold">IDR 2,500</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/worker"
            className="bg-[#1D204C] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#0b1434] transition duration-300"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
