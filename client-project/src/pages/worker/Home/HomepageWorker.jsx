import CardWorker from "../../../components/workerComponent/CardWorker";

// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg
export default function HomepageWorker() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          Welcome, <span className="text-[#05ECAE]">Adits!</span>
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="mt-4 bg-[#FFFFFF]">
          <div className="w-full h-40 rounded-lg"></div>
        </div>

        <div className="mt-6 bg-[#FFFFFF] p-6 rounded-lg">
          <select className="p-2 bg-[#FAF9FE] rounded">
            <option>All types</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardWorker />
        </div>
      </div>
    </>
  );
}
