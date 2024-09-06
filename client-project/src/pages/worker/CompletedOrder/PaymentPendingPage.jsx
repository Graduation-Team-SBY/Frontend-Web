import { Link } from "react-router-dom";

export default function PaymentPendingWorkerPage() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#FAF9FE] min-h-screen py-8">
      <ul className="steps steps-vertical lg:steps-horizontal mb-8">
        <li className="step step-primary">Verifikasi Pesanan</li>
        <li className="step step-primary">Pembayaran</li>
        <li className="step">Selesai</li>
      </ul>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-[#FEE2E2] text-[#DC2626] rounded-full p-4">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-3 text-[#1D204C]">
          Pembayaran Tertunda
        </h2>
        <p className="text-center text-lg mb-6 text-[#1D204C]">
          Tolong tunggu proses pembayaran selesai
        </p>

        <hr className="my-6" />

        <div className="text-base text-[#1D204C] space-y-4">
          <div className="flex justify-between">
            <span>Jumlah Total</span>
            <span className="font-semibold">IDR 1,200,000</span>
          </div>
          <div className="flex justify-between">
            <span>Tugas yang di sertakan</span>
            <span className="font-semibold">3 Tugas</span>
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

        <div className="mt-8 flex justify-center">
          <Link
            to="/payment-completed-worker"
            className="bg-[#1D204C] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#0b1434] transition duration-300"
          >
            Lanjutkan Pembayaran
          </Link>
        </div>
      </div>
    </div>
  );
}
