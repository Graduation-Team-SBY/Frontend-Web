import ChatEnd from "../../components/ChatEnd";
import ChatStart from "../../components/ChatStart";
import ProfileChat from "../../components/ProfileChat";

export default function ChatRoamWorkerPage() {
  return (
    <>
      <div className="flex bg-[#FAF9FE] gap-4 h-[75vh] overflow-hidden">
        <ProfileChat />

        <div className="flex-1 p-6 flex flex-col bg-[#FFFFFF] rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-[#1D204C]">Aditya</h1>
            <button className="text-[#1D204C] hover:text-[#1D204C] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.75 7h12.5m-12.5 5h12.5m-12.5 5h12.5"
                />
              </svg>
            </button>
          </div>
          <hr className="border-t border-[#1D204C] mb-4" />

          <div className="flex-1 overflow-y-auto space-y-2 pr-2">
            <ChatStart />
            <ChatEnd />
          </div>

          <div className="flex items-center mt-4">
            <input
              className="flex-1 bg-[#FAF9FE] p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1D204C]"
              type="text"
              placeholder="Write your message"
            />
            <button className="ml-2 bg-[#1D204C] text-[#FAF9FE] px-3 py-2 rounded-lg shadow-md hover:bg-[#2a2b38] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
