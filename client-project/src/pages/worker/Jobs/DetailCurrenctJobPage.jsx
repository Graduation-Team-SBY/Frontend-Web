import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { formatCurrencyRupiah } from "../../../helpers/currency";
import axios from "../../../config/axiosInstance";

export default function DetailJobWorkerPage() {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const showData = async (id) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `/jobs/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      // console.log(data);
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerificationOrder = () => {
    navigate("/yasa/order/verification", { state: { order } });
  };

  const handleToChat = (id) => {
    navigate(`/yasa/order/${id}/chat`, { state: { order } });
  };

  useEffect(() => {
    showData(id);
  }, [id]);

  return (
    <div>
      <h2 className="font-black text-4xl">Detail Order</h2>
      <div className="mt-20 flex gap-10">
        <div className="w-1/2">
          <img
            className="rounded-xl"
            src="https://plus.unsplash.com/premium_photo-1695582868702-5b0f91584d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-black text-4xl">
            {order.title || "Cuci Piring"}
          </h2>
          <p className="mt-10">{order.description}</p>
          <p className="mt-10">{formatCurrencyRupiah(order.fee)}</p>
          <div className="mt-10 flex gap-4">
            <button
              className="w-1/2 bg-[#1D204C] text-white py-2 rounded-md hover:bg-[#1D204C]/90 focus:ring-4 focus:outline-none focus:ring-[#1D204C]/50 transition duration-300"
              onClick={() => handleVerificationOrder()}
            >
              Done
            </button>
            <button
              className="w-1/2 bg-[#05ECAE] text-white py-2 rounded-md transition duration-300"
              onClick={() => handleToChat(id)}
            >
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
