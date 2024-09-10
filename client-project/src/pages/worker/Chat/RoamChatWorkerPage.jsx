import { useEffect, useState } from "react";
import ChatEnd from "../../../components/ChatEnd";
import ChatStart from "../../../components/ChatStart";
import ProfileChat from "../../../components/workerComponent/ProfileChat";
import { io } from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";

export default function RoomChatWorkerPage() {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState("");
  const [socket, setSocket] = useState(null);
  const [senderId, setSenderId] = useState(null);

  const { id } = useParams();
  const location = useLocation();

  const order = location.state?.order || {};

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    newSocket.emit("join_room", id);

    newSocket.on("receive_message", (data) => {
      setChats((curr) => [...curr, data]);
    });

    newSocket.on("joined_room", (data) => {
      console.log(data, "<<<<< ini join room");
      if (storedRole === "jalu") {
        setSenderId(data.currJob.clientId);
      } else if (storedRole === "yasa") {
        setSenderId(data.currJob.workerId);
      }

      setChatId(data.currJob.chatId);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "" && socket) {
      const messageObj = {
        senderId: senderId,
        message: message,
        createdAt: new Date(),
      };
      socket.emit("send_message", messageObj, chatId, senderId);
      setChats((curr) => [...curr, messageObj]);
      setMessage("");
    }
  };
  return (
    <>
      <div className="flex bg-[#FAF9FE] gap-4 h-[75vh] overflow-hidden p-6 rounded-xl">
        <ProfileChat key={order._id} pro/>

        <div className="flex-1 p-6 flex flex-col bg-[#FAF9FE] rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-[#1D204C]">{order.client?.name}</h1>
            <button className="text-[#1D204C] hover:text-[#2a2b38] transition">
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

          <hr className="border-t border-[#FAF9FE] mb-4" />

          <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
            {chats.map((chat, index) =>
              chat.senderId === senderId ? (
                <ChatEnd key={index} message={chat.message} />
              ) : (
                <ChatStart key={index} message={chat.message} />
              )
            )}
          </div>

          <div className="flex items-center mt-4  rounded-lg p-2">
            <input
              className="flex-1 bg-transparent p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D204C]"
              type="text"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 bg-[#1D204C] text-[#FAF9FE] px-3 py-2 rounded-lg shadow-md hover:bg-[#2a2b38] transition"
              onClick={sendMessage}
            >
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
