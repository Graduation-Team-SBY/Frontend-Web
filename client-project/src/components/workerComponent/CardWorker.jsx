import { Link } from "react-router-dom";
import { formatDateMonth } from "../../helpers/formatDate";
import { formatCurrencyRupiah } from "../../helpers/currency";

export default function CardWorker({ work }) {
  return (
    <>
      <Link to={`/yasa/order/${work._id}`}>
        <div className="w-full max-w-sm px-4 py-3 bg-[#FFFFFF] rounded-md shadow-md h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-[#1D204C]">
              <h2 className="text-2xl font-semibold">{work.category.name}</h2>
              <h6 className="text-sm text-gray-500">
                {formatDateMonth(new Date(work.createdAt))}
              </h6>
            </span>
            <span className="px-3 py-1 text-xs text-[#1D204C] bg-[#05ECAE] rounded-full">
              {work.category.name === "Nitip" ? (
                <span className="p-1 rounded text-xs">Belanja</span>
              ) : (
                <span className="p-1 rounded text-xs">Rumah Tangga</span>
              )}
            </span>
          </div>
          <div className="mt-4 text-sm text-[#1D204C]">
            <p>
              <strong>Deskripsi: </strong> {work.description}
            </p>
          </div>
          <div>
            <div className="mt-4 text-sm text-[#1D204C] ">
              <p className="line-clamp-3">
                <strong>Alamat: </strong> {work.address}
              </p>
            </div>
            <hr className="mt-4" />

            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  className="object-cover h-10 rounded-full"
                  src={work.client.profilePicture}
                  alt="Avatar"
                />
                <h3 className="text-lg font-semibold">{work.client.name}</h3>
              </div>
              <span className="text-[#1D204C]">
                {formatCurrencyRupiah(work.fee)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
