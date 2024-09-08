import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../../config/axiosInstance";
import { toast } from "react-toastify";

export default function UpdateProfileWorkerPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      if (name) formData.append("name", name);
      if (dateOfBirth) formData.append("dateOfBirth", dateOfBirth);
      if (address) formData.append("address", address);
      if (image) formData.append("image", image);

      const { data } = await axios({
        method: "PATCH",
        url: "/workers/profile",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: formData,
      });

      console.log(data, "< ini data worker");
      toast.info("Success to Update Profile");
      navigate("/worker/profile");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="flex flex-col lg:flex-row p-6 bg-[#FAF9FE] w-full max-w-4xl mx-auto">
        <div className="bg-white p-10 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none flex flex-col items-center w-full lg:w-1/3">
          <h3 className="text-xl font-semibold text-[#1D204C] mb-4">
            Profile Picture
          </h3>
        </div>

        <div className="bg-white p-10 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none w-full lg:w-2/3">
          <h3 className="text-xl font-semibold text-[#1D204C] mb-4">
            Edit Account
          </h3>
          <form className="space-y-4" onSubmit={handleUpdate}>
            <div className="relative w-32 h-32 mb-4">
              <input
                id="upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="upload" className="cursor-pointer relative block">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={"https://via.placeholder.com/150"}
                  alt="Profile"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1D204C] bg-opacity-30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 text-white"
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
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={name}
                className="input input-bordered w-full"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date of Birth</span>
              </label>
              <input
                type="date"
                placeholder="Type here"
                value={dateOfBirth}
                className="input input-bordered w-full"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={address}
                className="input input-bordered w-full"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1D204C] text-white py-2 rounded-md hover:bg-[#1D204C]/90 focus:ring-4 focus:outline-none focus:ring-[#1D204C]/50 transition duration-300"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
