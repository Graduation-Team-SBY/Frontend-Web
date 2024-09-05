// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg

export default function CardWorker() {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-semibold">Memersihkan Dapur</h2>
      </div>
      <div className="mt-2 flex space-x-2">
        <span className="bg-[#FAF9FE] p-1 rounded text-xs">Household</span>
      </div>
      <div>
        <p className="mt-4 text-sm text-[#1D204C]">
          Tolong, bersihkan kamar saya, jika bisa tolong cari semua kecoa dan
          tikusnya dan makan
        </p>
      </div>
      <hr className="mt-4" />
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-[#FAF9FE] rounded-full" />
          <h3 className="text-lg font-semibold">Aditya</h3>
        </div>
        <span className="text-[#1D204C]">$80/h</span>
      </div>
    </div>
  );
}
