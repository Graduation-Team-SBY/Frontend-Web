import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../../config/axiosInstance';
import { toast } from 'react-toastify';

export default function UpdateProfileWorkerPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState('');

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (name) formData.append('name', name);
    if (dateOfBirth) formData.append('dateOfBirth', dateOfBirth);
    if (address) formData.append('address', address);
    if (image) formData.append('image', image);
    if (bio) formData.append('bio', bio);

    try {
      const { data } = await axios({
        method: 'PATCH',
        url: '/workers/profile',
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
        data: formData,
      });
      toast.info('Profile updated successfully');
      navigate('/yasa/profile');
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl mx-auto p-8">
        <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">
          Update Profile
        </h3>
        <form className="space-y-6" onSubmit={handleUpdate}>
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <input
                id="upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="upload"
                className="cursor-pointer block relative w-full h-full"
              >
                <img
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : 'https://via.placeholder.com/150'
                  }
                  alt="Profile"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5V2m0 0h9m-9 0L6 9m0 0v13.5"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="form-group">
              <label className="text-sm font-bold text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Type your name"
                value={name}
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-400"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="text-sm font-bold text-gray-600">
                Date of Birth
              </label>
              <input
                type="date"
                value={dateOfBirth}
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-400"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="text-sm font-bold text-gray-600">Address</label>
              <input
                type="text"
                placeholder="Type your address"
                value={address}
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-400"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm font-bold text-gray-600">
                  Biodata
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 focus:outline-none focus:border-blue-400"
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1D204C] text-white hover:bg-[#05ECAE] py-2 rounded-full hover:text-[#1D204C] transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
