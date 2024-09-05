import { Link } from "react-router-dom";
import CardSaldo from "../../../components/workerComponent/CardSaldo";
import StarRating from "../../../components/workerComponent/StarRating";
import Testimoni from "../../../components/workerComponent/TestimoniWorker";

export default function ProfileWorkerPage() {
  return (
    <>
      <div className="mt-10 bg-[#FAF9FE] p-8">
        <div className="flex space-x-6 mb-6">
          <div className="flex-1 bg-[#FFFFFF] p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full object-cover ring ring-gray-300 dark:ring-gray-600"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                  alt="Profile"
                />
                <div>
                  <h2 className="text-xl font-semibold">Nama Worker</h2>
                  <StarRating />
                </div>
              </div>
              <Link
                to="/editProfile"
                className="bg-[#1D204C] text-[#FAF9FE] px-4 py-2 rounded"
              >
                EDIT
              </Link>
            </div>
          </div>

          <div className="flex-1 bg-[#FFFFFF] p-6 rounded-lg shadow-md flex items-center justify-center">
            <CardSaldo />
          </div>
        </div>

        {/* <div className="flex space-x-4 mb-6">
        <div className="flex-1 bg-[#FFFFFF] p-5 rounded-lg shadow-md text-center">
          <span>Total Order</span>
        </div>
        <div className="flex-1 bg-[#FFFFFF] p-5 rounded-lg shadow-md text-center">
          <span>BELUM</span>
        </div>
        <div className="flex-1 bg-[#FFFFFF] p-5 rounded-lg shadow-md text-center">
          <span>SELESAI</span>
        </div>
      </div> */}

        <Testimoni />
      </div>
    </>
  );
}
