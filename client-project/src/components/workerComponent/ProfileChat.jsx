import StarRating from "./StarRating";

export default function ProfileChat() {
  return (
    <>
      <div className="w-72 bg-[#FFFFFF]  p-4 rounded-2xl">
        <div className="mb-6">
          <div className="flex items-center justify-center flex-col">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-semibold text-gray-900 text-lg">Aditya</p>
              <p className="text-xs text-green-500 mt-1">Online</p>
              <div className="flex items-center justify-center mt-2">
                <StarRating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
