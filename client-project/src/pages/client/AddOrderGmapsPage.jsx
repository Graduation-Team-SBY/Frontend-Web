import axios from '../../config/axiosInstance';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Maps from '../../components/Maps';
import { formatCurrencyRupiah } from '../../helpers/currency';

export default function AddOrderGmapsPage() {
  const defaultCenter = {
    lat: -6.2, // Lokasi default (Jakarta)
    lng: 106.816666,
  };

  const navigate = useNavigate();
  const [title, setTitle] = useState("")
  const [fee, setFee] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [addressNotes, setAddressNotes] = useState('');
  const [coordinates, setCoordinates] = useState(defaultCenter);

  const handleNewJob = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/clients/jobs/belanja',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: {
          title,
          fee,
          description,
          address,
          addressNotes,
          coordinates,
        },
      });

      console.log(data);
      navigate('/jalu');
      toast.info('Berhasil membuat Pekerjaan');
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.data.message === 'Fill in your profile first!') {
        navigate('/jalu/profile');
      }
    }
  };

  const handleVerifOrder = () => {
    if (fee.length < 1 && description.length < 1 && addressNotes.length < 1) {
      toast.info('Lengkapi data terlebih dahulu');
    } else {
      document.getElementById('modal_confirm').showModal();
    }
  };

  return (
    <>
      <h1 className="font-black md:hidden text-4xl">
        Mari kita mulai dengan pesanan pertama Anda.
      </h1>
      <div className="flex flex-col md:flex-row w-full h-full gap-10 mt-5">
        <div className="w-full md:w-[35%]">
          <Maps
            location={coordinates}
            setLocation={setCoordinates}
            setAddress={setAddress}
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="hidden md:block font-black text-4xl">
            Mari kita mulai dengan pesanan pertama Anda.
          </h1>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Judul</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              value={title}
              className="input input-bordered w-full rounded-full"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Biaya</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              value={fee}
              className="input input-bordered w-full rounded-full"
              onChange={(e) => setFee(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Deskripsi</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 rounded-xl"
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Alamat</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Catatan Alamat</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 rounded-xl"
              placeholder="Address Notes"
              value={addressNotes}
              onChange={(e) => setAddressNotes(e.target.value)}
            ></textarea>
          </label>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full mt-10"
            onClick={handleVerifOrder}
          >
            Buat Pesanan
          </button>
          <dialog id="modal_confirm" className="modal">
            <div className="modal-box">
              <div className="flex justify-center items-center flex-col">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
                  <div className="flex justify-center items-center mb-6">
                    <div className="bg-[#05ECAE] text-white rounded-full p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <h2 className="text-center text-2xl font-semibold mb-3 text-[#1D204C]">
                    Konfirmasi Pesanan
                  </h2>
                  <p className="text-center text-3xl font-bold mb-6 text-[#1D204C]">
                    {formatCurrencyRupiah(fee)}
                  </p>

                  <hr className="my-6" />

                  <div className="text-base text-[#1D204C] space-y-4">
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">Deskripsi:</span>
                      <span>{description}</span>
                    </div>
                    <div className="flex flex-col justify-between">
                      <span className="font-semibold">Alamat:</span>
                      <span>{address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Catatan Alamat:</span>
                      <span>{addressNotes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Biaya Admin:</span>
                      <span>{formatCurrencyRupiah(2000)}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <form onSubmit={handleNewJob}>
                      <button
                        type="submit"
                        className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full mt-10"
                      >
                        Buat
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>Tutup</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
}
