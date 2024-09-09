import { formatCurrencyRupiah } from "../../helpers/currency";
import { formatDateMonth } from "../../helpers/formatDate";

export default function CardHistory({ histories }) {
  return (
    <>
      <div className="p-4 rounded-lg shadow-lg w-full bg-white">
        <div className="flex justify-between">
          <p className="text-sm">
            {formatDateMonth(new Date(histories.createdAt))}
          </p>
          {histories.jobDetail.categoryName === "Nitip" ? (
            <span className="bg-[#1D204C] text-white py-1 px-3 rounded-lg text-xs">
              Belanja
            </span>
          ) : (
            <span className="bg-[#05ECAE] text-white py-1 px-3 rounded-lg text-xs">
              Bersih-bersih
            </span>
          )}
        </div>

        <p className="text-sm mt-2">{histories.jobDetail.description}</p>
        <p className="text-sm">
          Price: {formatCurrencyRupiah(histories.jobDetail.fee)}
        </p>
      </div>
    </>
  );
}
