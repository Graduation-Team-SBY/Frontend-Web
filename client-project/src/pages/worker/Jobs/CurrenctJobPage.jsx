import { useEffect, useState } from "react";
import CardJobs from "../../../components/workerComponent/CardJobs";
import axios from "../../../config/axiosInstance";

export default function CurrectJobsPage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "/workers/job",
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
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6">My Jobs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((jobs) => (
            <CardJobs key={jobs._id} jobs={jobs} />
          ))}
        </div>
      </div>
    </>
  );
}
