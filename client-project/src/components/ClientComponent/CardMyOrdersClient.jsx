import { Link } from "react-router-dom";

export default function CardMyOrdersClient({ data }) {
  return (
    <div class="transition duration-300 ease-in-out hover:shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-[#fff] dark:border-[#fff]">
      {/* <img class="p-8 rounded-t-lg" src={data.images} alt="" /> */}{" "}
      <img
        class="rounded-3xl"
        src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight">
          {data.category.name} - data.name / data.category.name
        </h5>
        <div class="flex flex-wrap gap-1 items-center mt-2.5 mb-5">
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {data.category.name}
          </span>
        </div>
        <p className="">{data.address}</p>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold">Rp.{data.fee}</span>
          <Link
            to={`/client/order/${data._id}`}
            class=" font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-black text-white"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
