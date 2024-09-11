import { Link } from "react-router-dom";
import { formatCurrencyRupiah } from "../../helpers/currency";
import { formatDateMonth } from "../../helpers/formatDate";

export default function CardJobs({ jobs }) {
  return (
    <Link to={jobs._id}>
      <div className="w-full max-w-sm px-4 py-3 bg-[#FFFFFF] rounded-md shadow-md h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-[#1D204C]">
            <h2 className="text-2xl font-semibold">{jobs.title}</h2>
            <h6 className="text-sm text-gray-500">
              {formatDateMonth(new Date(jobs.createdAt))}
            </h6>
          </span>
          <span className="px-3 py-1 text-xs text-[#1D204C] bg-[#05ECAE] rounded-full">
            <span className="p-1 rounded text-xs">{jobs.category.name}</span>
          </span>
        </div>
        <div className="mt-4 text-sm text-[#1D204C]">
          <p>
            <strong>Deskripsi: </strong> {jobs.description}
          </p>
        </div>
        <div>
          <div className="mt-4 text-sm text-[#1D204C] ">
            <p className="line-clamp-3">
              <strong>Alamat: </strong> {jobs.address}
            </p>
          </div>
          <hr className="mt-4" />

          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="object-cover h-10 w-10 rounded-full"
                src={jobs.client.profilePicture}
                alt="Avatar"
              />
              <h3 className="text-lg font-semibold">{jobs.client.name}</h3>
            </div>
            <span className="text-[#1D204C]">
              {formatCurrencyRupiah(jobs.fee)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
