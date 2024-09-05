import CardWorker from "../../../components/workerComponent/CardWorker";

export default function HomepageWorker() {
  return (
    <>
      <div className="bg-gray-50 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Welcome, Adits!</h1>
        </div>

        <div className="mt-4">
          <div className="w-full h-40 rounded-lg shadow"></div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <div className="flex space-x-4">
            <select className="p-2 bg-gray-100 rounded">
              <option>All types</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardWorker />
        </div>
      </div>
    </>
  );
}
