import { useEffect, useState } from "react";
import axios from "../../config/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import { formatCurrencyRupiah } from "../../helpers/currency";
import { toast } from "react-toastify";

export default function DetailOrderPage() {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const showDetailOrderClient = async (id) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `/jobs/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApplyJob = async (id) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: `workers/jobs/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      // console.log(data);
      navigate("/yasa");
      toast.success("Successfully apply for the job");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showDetailOrderClient(id);
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
          <button
            className="mt-10 w-1/2 bg-[#1D204C] text-white py-2 rounded-md hover:bg-[#1D204C]/90 focus:ring-4 focus:outline-none focus:ring-[#1D204C]/50 transition duration-300"
            onClick={() => handleApplyJob(id)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
