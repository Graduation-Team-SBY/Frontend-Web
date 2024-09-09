import { Link } from "react-router-dom";
import { formatCurrencyRupiah } from "../../helpers/currency";

// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg
export default function CardJobs({ jobs }) {
  return (
    <Link to={jobs._id}>
      <div className="w-full max-w-sm px-4 py-3 bg-[#FFFFFF] rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#1D204C]">
            Beli Alat Perang
          </span>
          <span className="px-3 py-1 text-xs text-[#1D204C] uppercase bg-[#05ECAE] rounded-full">
            Ongoing
          </span>
        </div>
        <p className="mt-2 text-sm text-[#1D204C]">{jobs.description}</p>
        <div className="mt-3 text-sm text-[#1D204C]">
          <p>
            <strong>Address:</strong> {jobs.address}
          </p>
          <p>
            <strong>Biaya: </strong>
            {formatCurrencyRupiah(jobs.fee)}
          </p>
          <p>
            <strong>Waktu :</strong>{" "}
            {new Date(jobs.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
