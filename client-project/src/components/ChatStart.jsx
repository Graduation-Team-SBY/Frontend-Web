import React from "react";

export default function ChatStart() {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-header">Aditya</div>
      <div className="chat-bubble bg-[#05ECAE] text-[#1D204C]">
        Hello nama saya aditya
      </div>
      <div className="chat-footer opacity-50">15.00</div>
    </div>
  );
}
