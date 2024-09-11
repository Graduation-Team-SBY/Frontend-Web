export default function Testimoni({ testi }) {
  return (
    <>
      <blockquote className="h-full rounded-lg bg-[#FAF9FE] p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt={testi.client.name}
            src={testi.client.profilePicture}
            className="size-14 rounded-full object-cover"
          />

          <div>
            <p className="mt-0.5 text-lg font-medium text-[#1D204C]">
              {testi.client.name}
            </p>
            <div className="badge badge-warning badge-outline p-3 gap-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-bold text-[#1D204C]">{testi.rating}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-700 line-clamp-5">
          <strong>Pesan: </strong> {testi.description}
        </p>

        <div className="grid grid-cols-3 gap-2 mt-4">
          {testi.images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={testi.name}
              className="w-full h-full object-cover rounded-md"
            />
          ))}
        </div>
      </blockquote>
    </>
  );
}
