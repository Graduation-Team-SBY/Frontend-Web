import axios from "../../../config/axiosInstance";
import CardWorker from "../../../components/workerComponent/CardWorker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/features/workerProfileSlice";

export default function HomepageWorker() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.workerProfile);

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/workers/jobs/worker",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      // console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    dispatch(fetchProfile());
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          Selamat datang,{" "}
          <span className="text-[#05ECAE]">{profile?.name}</span>!
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="bg-blue-100 rounded-lg p-6 h-[25vh] flex items-center justify-between">
          <div>
            {/* <h1 className="text-lg font-bold text-gray-800">Logo Here</h1> */}
            <h2 className="text-2xl font-semibold text-gray-900 mt-1">
              YangTu
            </h2>
            <p className="text-gray-600">
              Bekerja yang didasarkan pada pekerjaan sementara, tugas-tugas
              jangka pendek, atau kontrak pekerjaan yang fleksibel.
            </p>
            {/* <button className="mt-4 bg-black text-white py-2 px-4 rounded">
            </button> */}
          </div>
          {/* <div>
            <img
              src="./work.svg"
              alt="Premium"
              className="w-28 h-28 object-cover"
            />
          </div> */}
        </div>

        {/* <div className="mt-6 bg-[#FFFFFF] p-6 rounded-lg">
          <select className="p-2 bg-[#FAF9FE] rounded">
            <option>Semua Tipe</option>
          </select>
        </div> */}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((data) => (
            <CardWorker key={data._id} work={data} />
          ))}
        </div>
      </div>
    </>
  );
}
