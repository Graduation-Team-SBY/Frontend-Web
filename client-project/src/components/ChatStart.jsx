import React from 'react';
import { formatTime } from '../helpers/formatDate';

export default function ChatStart({ message, profile, date }) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          {profile ? (
            <img alt="Tailwind CSS chat bubble component" src={profile} />
          ) : (
            <img
              alt={message}
              src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
            />
          )}
        </div>
      </div>
      <div className="chat-bubble bg-[#79ECCD] text-[#1D204C]">{message}</div>
      <div className="chat-footer opacity-50">{formatTime(date)}</div>
    </div>
  );
}
