import axios from "../../../config/axiosInstance";
import CardWorker from "../../../components/workerComponent/CardWorker";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function HomepageWorker() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/workers/jobs/worker",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          Selamat datang, <span className="text-[#05ECAE]">Adits!</span>
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="mt-4 bg-[#FFFFFF]">
          <div className="w-full h-40 rounded-lg"></div>
        </div>

        <div className="mt-6 bg-[#FFFFFF] p-6 rounded-lg">
          <select className="p-2 bg-[#FAF9FE] rounded">
            <option>Semua Tipe</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((data) => (
            <CardWorker key={data._id} work={data} />
          ))}
        </div>
      </div>
    </>
  );
}
