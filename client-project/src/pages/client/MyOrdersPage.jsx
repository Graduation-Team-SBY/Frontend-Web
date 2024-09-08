import { useEffect, useState } from "react";
import axios from "../../config/axiosInstance";
import { toast } from "react-toastify";
import CardMyOrdersClient from "../../components/ClientComponent/CardMyOrdersClient";

export default function MyOrdersPage() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/clients/jobs/active",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2 className="font-black text-4xl text-[#1D204C]">My Orders</h2>
      <div className="flex gap-4 justify-end items-center mt-5">
        <p>Filter :</p>
        <select className="select select-ghost w-fit">
          <option disabled selected>
            Category
          </option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
        {jobs.map((el) => {
          return <CardMyOrdersClient key={el._id} data={el} />;
        })}
      </div>
    </div>
  );
}
