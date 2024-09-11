import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../config/axiosInstance";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../redux/features/workerProfileSlice";

export default function UpdateProfileWorkerPage() {
  // const { profile } = useSelector((state) => state.workerProfile);
  // console.log(profile);
  // const [profile, setProfile] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState("");

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const fetchProfile = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "workers/profile",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      // console.log(data);
      setName(data.name);
      setAddress(data.address);
      setBio(data.bio);
      setDateOfBirth(new Date(data.dateOfBirth).toISOString().split("T")[0]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (name) formData.append("name", name);
    if (dateOfBirth) formData.append("dateOfBirth", dateOfBirth);
    if (address) formData.append("address", address);
    if (image) formData.append("image", image);
    if (bio) formData.append("bio", bio);

    try {
      const { data } = await axios({
        method: "PATCH",
        url: "/workers/profile",
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
        data: formData,
      });
      toast.info("Berhasil mengubah profile");
      navigate("/yasa/profile");
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl mx-auto p-8">
        <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">
          Ubah Profile
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
                      : "https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
                  }
                  alt="Profile"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="form-group">
              <label className="text-sm font-bold text-gray-600">Nama</label>
              <input
                type="text"
                placeholder="Ketikan Nama kamu di sini"
                defaultValue={name}
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-400"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="text-sm font-bold text-gray-600">
                Tanggal Lahir
              </label>
              <input
                type="date"
                defaultValue={dateOfBirth}
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-400"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="text-sm font-bold text-gray-600">Alamat</label>
              <input
                type="text"
                placeholder="Ketikan Alamat kamu di sini"
                defaultValue={address}
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
                defaultValue={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1D204C] text-white hover:bg-[#05ECAE] py-2 rounded-full hover:text-[#1D204C] transition duration-300"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
