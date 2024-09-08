import { Link } from "react-router-dom";
import { formatCurrencyRupiah } from "../../helpers/currency";

export default function CardMyOrdersClient({ data }) {
  console.log(data);
  return (
    <div className="card bg-base-100 w-96 transition duration-300 ease-in-out hover:shadow-xl shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{data.category.name}</h2>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-outline">{data.category.name}</div>
        </div>
        <p>{data.description}</p>
        <p>Lokasi: {data.address}</p>
        <div className="flex gap-2 justify-end">
          <p className="text-2xl font-bold">{formatCurrencyRupiah(data.fee)}</p>
          <Link to={`/client/order/${data._id}`} className="btn btn-primary">
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
