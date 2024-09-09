import { useEffect, useState } from "react";
import axios from "../../../config/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrencyRupiah } from "../../../helpers/currency";
import { toast } from "react-toastify";

export default function VerificationOrderWorkerPage() {
  const location = useLocation();
  const [order, setOrder] = useState(location.state?.order || {});
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!order._id) {
      const fetchJob = async () => {
        try {
          const { data } = await axios({
            method: "GET",
            url: `/jobs/${order._id}`,
            headers: {
              Authorization: `Bearer ${localStorage.access_token}`,
            },
          });

          setOrder(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchJob();
    }
  }, [order]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    try {
      const { data } = await axios({
        method: "PATCH",
        url: `/workers/jobs/${order._id}/worker`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });

      console.log("Verification submitted:", data);
      toast.success("Successfully");
      navigate("/worker/order/jobs");
    } catch (error) {
      console.error("Error submitting verification:", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col bg-[#FAF9FE] min-h-screen py-8">
      <ul className="steps steps-vertical lg:steps-horizontal mb-8">
        <li className="step step-primary">Verifikasi Pesanan</li>
        <li className="step">Pembayaran</li>
        <li className="step">Selesai</li>
      </ul>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-[#E5E7EB] text-[#1D204C] rounded-full p-4">
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

        <h2 className="text-center text-xl font-semibold mb-3 text-[#1D204C]">
          Verifikasi Pesanan
        </h2>
        <p className="text-center text-lg mb-6 text-[#1D204C]">
          Tolong unggah file bukti untuk verifikasi.
        </p>

        <hr className="my-6" />

        <form onSubmit={handleVerificationSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Bukti
            </label>
            <input
              type="file"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1D204C] file:text-white hover:file:bg-[#0b1434]"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="text-base text-[#1D204C] space-y-4">
            <div className="flex justify-between">
              <span>Jumlah Total</span>
              <span className="font-semibold">
                IDR {formatCurrencyRupiah(order.fee)}
              </span>
            </div>
            <div className="space-y-1">
              <span>Detail Tugas:</span>
              <ul className="list-disc pl-5">
                <li>Tugas 1: {order.description}</li>
                <li>Tugas 2: Backend Development - IDR 500,000</li>
                <li>Tugas 3: UI Testing - IDR 300,000</li>
              </ul>
            </div>
          </div>

          {/* <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi (Opsional)
              </label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#1D204C]"
                rows="4"
                placeholder="Masukan pesan untuk client"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div> */}

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-[#1D204C] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#0b1434] transition duration-300"
            >
              Kirim Verifikasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
