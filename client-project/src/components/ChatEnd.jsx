import React from "react";

export default function ChatEnd({ message }) {
  console.log(message, "ini message")
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={message}
          />
        </div>
      </div>
      <div className="chat-header">Mumei</div>
      <div className="chat-bubble bg-[#1D204C] text-[#05ECAE]">{message}</div>
      <div className="chat-footer opacity-50">15.00</div>
    </div>
  );
}
