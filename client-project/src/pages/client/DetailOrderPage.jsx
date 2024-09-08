import { useEffect, useState } from "react";
import axios from "../../config/axiosInstance";
import { useParams } from "react-router-dom";
import { formatCurrencyRupiah } from "../../helpers/currency";

export default function DetailOrderPage() {
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
  useEffect(() => {
    showDetailOrderClient(id);
  }, []);
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
          <h2 className="font-black text-4xl">Cuci Piring</h2>
          <p className="mt-10">{order.description}</p>
          <p className="mt-10">{formatCurrencyRupiah(order.fee)}</p>
        </div>
      </div>

      {/* Waiting List Worker */}

      <div className="mt-5">
        <h2 className="text-2xl font-black mb-4">Waiting List Worker</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card */}
          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 08, 2023</p>
              <span className="bg-[#1D204C] text-white py-1 px-3 rounded-lg text-xs">
                Belanja
              </span>
            </div>
            <p className="text-sm mt-2">My Order sCleaning Swimming Pool</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Deny</button>
              <button className="btn btn-primary">Accept</button>
            </div>
          </div>

          <div className="p-4 rounded-lg shadow-lg w-full bg-white">
            <div className="flex justify-between">
              <p className="text-sm">March 07, 2023</p>
              <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
                Bersih-bersih
              </span>
            </div>
            <p className="text-sm mt-2">My Order Bersih-bersih Swimming Pool</p>
            <p className="text-sm">Price: Rp. 50.000</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Deny</button>
              <button className="btn btn-primary">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
