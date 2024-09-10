import { useEffect, useState } from 'react';
import axios from '../../config/axiosInstance';
import { toast } from 'react-toastify';
import CardMyOrdersClient from '../../components/ClientComponent/CardMyOrdersClient';

export default function MyOrdersPage() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchJobs = async () => {
    try {
      let url = '/clients/jobs/active';

      if (filter) {
        url += `?category=${filter}`;
      }

      const { data } = await axios({
        method: 'GET',
        url: url,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setJobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filter]);

  return (
    <div>
      <h2 className="font-black text-4xl text-[#1D204C]">My Orders</h2>
      <div className="flex gap-4 justify-end items-center mt-5">
        <p>Filter :</p>
        <select
          className="select select-ghost w-fit"
          defaultValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Bebersih">Bebersih</option>
          <option value="Nitip">Nitip</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-5">
        {jobs.map((el) => {
          return <CardMyOrdersClient key={el._id} data={el} />;
        })}
      </div>
    </div>
  );
}
