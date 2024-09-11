import React, { useEffect, useState } from 'react';
import { formatCurrencyRupiah } from '../../helpers/currency';
import axios from '../../config/axiosInstance';
import { toast } from 'react-toastify';

export default function Wallet({ name }) {
  const [wallet, setWallet] = useState(0);

  const fetchWallet = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/profile/wallet',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      // console.log(data);
      setWallet(data.amount);
    } catch (error) {
      // console.log(error.response.data.message)
      toast.error(error.response.data.message);
    }
  };

  const [amount, setAmount] = useState(null);
  const handleTopup = async (e) => {
    try {
      e.preventDefault();
      const modal = document.getElementById('my_modal_2');
      modal.close();

      if (amount) {
        const { data } = await axios({
          method: 'POST',
          url: '/payment/topup',
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
          data: {
            amount: Number(amount),
          },
        });
        window.snap.pay(data.trans_token, {
          onSuccess: async function (result) {
            // toast.success('Payment Success!');
            await axios({
              method: 'patch',
              url: '/profile/wallet',
              headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
              },
              data: {
                topupId: data.topupId,
              },
            });

            await fetchWallet();
            setAmount(null);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            setAmount(null);

            toast.info('Menunggu pembayaran Anda!');
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            setAmount(null);

            toast.error('Pembayaran Gagal!');
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            setAmount(null);

            toast.error('Anda menutup popup tanpa menyelesaikan pembayaran');
          },
        });
      } else {
        toast.info('Kamu harus masukin dulu nominalnya');
      }
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  return (
    <div className="card-wallet bg-white text-white p-10 w-full lg:w-1/2 rounded-2xl flex flex-col justify-between gap-8 bg-gradient-to-tl from-[#05ECAE] to-[#1D204C]">
      <div className=" flex justify-between">
        <h2 className="font-black text-lg text-gray-200">Saldo saya</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="">
        <p>{name}</p>
        <h1 className="font-black text-4xl">{formatCurrencyRupiah(wallet)}</h1>
      </div>

      <div className="flex justify-between items-center">
        <div className="bg-white text-[#1D204C] rounded-full flex">
          <button
            onClick={() => document.getElementById('my_modal_2').showModal()}
            className="flex flex-col items-center hover:bg-[#1D204C] hover:text-white rounded-l-full px-5 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6"
            >
              <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
              <path
                fillRule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">Top Up</span>
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Top Up</h3>
              {/* <p className="py-4">Press ESC key or click outside to close</p> */}
              <form className="mt-8" onSubmit={handleTopup}>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">
                      Kamu ingin top up berapa?
                    </span>
                  </div>
                  <input
                    type="number"
                    placeholder="Ketikan di sini "
                    className="input input-bordered w-full rounded-full"
                    defaultValue={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </label>
                <button
                  type="submit"
                  className="btn btn-block rounded-full mt-5 bg-[#1D204C] text-white hover:text-[#1D204C]"
                >
                  Top Up
                </button>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>Tutup</button>
            </form>
          </dialog>

          <div className="flex flex-col items-center hover:bg-[#1D204C] hover:text-white rounded-r-full px-5 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-xs">Transfer</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8"
        >
          <path
            fillRule="evenodd"
            d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
