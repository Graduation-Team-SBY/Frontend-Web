import React from 'react';
import { formatTime } from '../helpers/formatDate';

export default function ChatEnd({ message, profile, date }) {
  console.log(message, 'ini message');
  return (
    <div className="chat chat-end">
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
      <div className="chat-bubble bg-[#1D204C] text-[#05ECAE]">{message}</div>
      <div className="chat-footer opacity-50">{formatTime(date)}</div>
    </div>
  );
}
