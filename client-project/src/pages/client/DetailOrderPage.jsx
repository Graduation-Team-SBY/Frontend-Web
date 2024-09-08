import { useEffect, useState } from "react";
import axios from "../../config/axiosInstance";

export default function DetailOrderPage() {
  const [order, setOrder] = useState({});
  const showDetailOrderClient = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `clients/jobs/66dc2230a7edc1a7b528093b/workers`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(data, "<< data detatail order");
      setOrder(order);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showDetailOrderClient();
  }, []);
  return (
    <div>
      {JSON.stringify(order)}
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
          <p className="mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            labore cum beatae, libero sunt nam rerum autem culpa mollitia
            eveniet iure dolores, laboriosam illum rem quo adipisci cumque.
            Architecto, nihil.
          </p>
        </div>
      </div>
    </div>
  );
}
