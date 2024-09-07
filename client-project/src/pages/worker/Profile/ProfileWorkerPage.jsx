import { Link } from "react-router-dom";
import CardSaldo from "../../../components/workerComponent/CardSaldo";
import StarRating from "../../../components/workerComponent/StarRating";
import Testimoni from "../../../components/workerComponent/TestimoniWorker";

// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg

export default function ProfileWorkerPage() {
  return (
    <>
      <div className="mt-10 py-8">
        <div className="flex flex-col-reverse lg:flex-row mb-6 gap-y-5 lg:gap-x-10">
          <div className="w-full lg:w-[60%] bg-white py-10 px-8 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full object-cover ring ring-white"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                  alt="Profile"
                />
                <div>
                  <h2 className="text-xl font-semibold">Nama Worker</h2>
                  <StarRating />
                </div>
              </div>
              <Link
                to="/worker/profile/update"
                className="bg-[#1D204C] text-[#FAF9FE] px-4 py-2 rounded-full"
              >
                Edit
              </Link>
            </div>
          </div>

            <CardSaldo />
          {/* <div className="w-1/2 flex items-center justify-center">
          </div> */}
        </div>

        {/* <div className="flex space-x-4 mb-6">
        <div className="flex-1 bg-white p-5 rounded-lg shadow-md text-center">
          <span>Total Order</span>
        </div>
        <div className="flex-1 bg-white p-5 rounded-lg shadow-md text-center">
          <span>BELUM</span>
        </div>
        <div className="flex-1 bg-white p-5 rounded-lg shadow-md text-center">
          <span>SELESAI</span>
        </div>
      </div> */}

        <Testimoni />
      </div>
    </>
  );
}
