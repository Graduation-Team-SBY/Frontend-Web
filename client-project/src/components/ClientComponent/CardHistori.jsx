import { formatCurrencyRupiah } from '../../helpers/currency';
import { formatDateMonth } from '../../helpers/formatDate';

export default function CardHistory({ histories }) {
  return (
    <>
      <div className="p-4 rounded-lg shadow-lg w-full bg-white">
        <h2 className="font-bold text-lg">{histories.jobDetail.title}</h2>
        <div className="flex justify-between">
          <p className="text-sm">
            {formatDateMonth(new Date(histories.createdAt))}
          </p>
          {histories.jobDetail.categoryName === 'Nitip' ? (
            <span className="bg-[#1D204C] badge text-white p-4">Nitip</span>
          ) : (
            <span className="bg-[#05ECAE] badge text-[#1D204C] p-4">
              Bebersih
            </span>
          )}
        </div>

        <p className='mt-2 font-bold'>Deskripsi:</p>
        <p className="">{histories.jobDetail.description}</p>

        <p className='mt-2 font-bold'>Biaya:</p>
        <p className="">
          {formatCurrencyRupiah(histories.jobDetail.fee)}
        </p>
      </div>
    </>
  );
}
