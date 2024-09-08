import axios from '../../config/axiosInstance';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddOrderGmapsPage() {
  const [location, setLocation] = useState('Hacktiv');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const navigate = useNavigate();
  const [fee, setFee] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

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
          fee,
          description,
          address,
        },
      });

      console.log(data);
      navigate("/client")
      toast.info("Berhasil membuat Pekerjaan")
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.data.message === "Fill in your profile first!") {
        navigate("/client/profile")
      }
    }
  };

  return (
    <div className="flex w-full h-full gap-10">
      <div className="w-[35%]">
        <div className="mt-16">
          <div className="w-fit">
            <iframe
              className="w-full h-[50vh] rounded-xl"
              // width={820}
              // height={560}
              id="gmap_canvas"
              src={mapSrc}
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
            <a href="https://online.stopwatch-timer.net" />
            <br />
            <a href="https://www.timertimer.net" />
            <br />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '.mapouter{position: relative;text-align: right;height: 560px;width: 820px;}',
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '.gmap_canvas{overflow: hidden;background: none !important;height: 560px;width: 820px;}',
              }}
            />
          </div>
        </div>

        {/* <input
          type="text"
          className="file-input file-input-bordered w-full max-w-xs mt-5 rounded-full"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        /> */}
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="font-black text-4xl">
          Let's start with your first job post.
        </h1>
        <form onSubmit={handleNewJob}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Fee</span>
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
              <span className="label-text">Address</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full rounded-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full mt-10"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
