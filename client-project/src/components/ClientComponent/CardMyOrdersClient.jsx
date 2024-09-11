import { Link } from 'react-router-dom';
import { formatCurrencyRupiah } from '../../helpers/currency';
import { formatDateMonth } from '../../helpers/formatDate';

export default function CardMyOrdersClient({ data }) {
  return (
    <>
      <Link to={`/jalu/order/${data._id}`}>
        <div className="w-full h-full px-4 py-3 bg-[#FFFFFF] rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-xl flex flex-col justify-between">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div className="">
                <h2 className="card-title text-2xl font-black">{data.title}</h2>
                <p className="font-semibold text-gray-400">
                  {formatDateMonth(new Date(data.createdAt))}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-outline badge-primary">
                  {data.category.name}
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-[#1D204C]">
              <p>
                <strong>Deskripsi: </strong> {data.description}
              </p>
            </div>
            <div className="mt-4 text-sm text-[#1D204C] ">
              <p className="line-clamp-3">
                <strong>Alamat: </strong> {data.address}
              </p>
            </div>
            <hr className="mt-4" />
            <div className="flex justify-between items-center mt-4">
              <span className="text-[#1D204C]">
                <strong>Biaya: </strong>
                {formatCurrencyRupiah(data.fee)}
              </span>
              {/* <Link to={`/jalu/order/${data._id}`} className="btn btn-primary">
              Lihat Detail
            </Link> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
