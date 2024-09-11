import { formatCurrencyRupiah } from "../../helpers/currency";
import { formatDateMonth } from "../../helpers/formatDate";

export default function CardHistory({ histories }) {
  return (
    <>
      <div className="relative p-4 rounded-lg shadow-lg w-full bg-white">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-bold text-gray-900">
              {histories.jobDetail.title}
            </h2>
            <div>
              {histories.jobDetail.categoryName === "Nitip" ? (
                <span className="bg-[#1D204C] text-white px-4 py-1 rounded-full">
                  Nitip
                </span>
              ) : (
                <span className="bg-[#05ECAE] text-[#1D204C] px-2.5 py-0.5 rounded-full">
                  Bebersih
                </span>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-bold">Deskripsi: </span>
            {histories.jobDetail.description}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-bold">Waktu Pemesanan: </span>
            {formatDateMonth(new Date(histories.jobDetail.createdAt))}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-bold">Biaya: </span>
            {formatCurrencyRupiah(histories.jobDetail.fee)}
          </p>
        </div>

        <div className="mt-2 flex items-start">
          <div>
            <p className="text-sm text-gray-600 font-medium">
              <span className="font-bold">Yasa: </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-900">
            <span className="font-light"> {histories.worker?.name}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
