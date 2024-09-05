import { useState } from "react";

export default function AddOrderGmapsPage() {
  const [location, setLocation] = useState("Hacktiv");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

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
                  ".mapouter{position: relative;text-align: right;height: 560px;width: 820px;}",
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".gmap_canvas{overflow: hidden;background: none !important;height: 560px;width: 820px;}",
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
        <div className="w-full">
          <label htmlFor="" className="text-lg">
            Job Title
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Job Title"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Category Title
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Category Title"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Address
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Address"
            className="input input-bordered w-full rounded-full"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Due Date
          </label>{" "}
          <br />
          <input
            type="date"
            placeholder="Your Due Date"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Description Job
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Your Description Job"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <div>
          <label htmlFor="" className="text-lg">
            Price
          </label>{" "}
          <br />
          <input
            type="number"
            placeholder="Your Job Price"
            className="input input-bordered w-full rounded-full"
          />
        </div>
        <button className="btn btn-block btn-lg bg-[#1D204C] text-white rounded-full">
          Create
        </button>
      </div>
    </div>
  );
}
