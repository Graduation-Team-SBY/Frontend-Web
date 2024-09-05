import React from "react";

export default function ChatEnd() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-header">Mumei</div>
      <div className="chat-bubble bg-[#1D204C] text-[#05ECAE]">
        Ya apa kabar
      </div>
      <div className="chat-footer opacity-50">15.00</div>
    </div>
  );
}
