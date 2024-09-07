import { useState } from "react";

export default function ImageEditProfile() {
  const [profileImage, setProfileImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <>
      <div className="relative w-32 h-32 mb-4">
        <input
          id="upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="upload" className=" cursor-pointer relative block">
          <img
            className="w-full h-full object-cover rounded-full"
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#1D204C] bg-opacity-30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-[#1D204C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
        </label>
      </div>
    </>
  );
}
