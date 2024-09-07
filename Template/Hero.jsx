// 1D204C blue
// 05ECAE mint
// FFFFFF card
// FAF9FE bg
export default function Hero() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1D204C] sm:text-4xl sm:leading-none max-w-lg mb-6">
              Segala sesuatu yang Anda <br className="hidden md:block" />
              dapat bayangkan adalah{" "}
              <span className="inline-block text-[#1D204C]">nyata</span>
            </h2>
            <p className="text-[#1D204C] text-base md:text-lg">
              model ekonomi yang didasarkan pada pekerjaan sementara,
              tugas-tugas jangka pendek, atau kontrak pekerjaan yang fleksibel,
              di mana individu bekerja sebagai pekerja lepas atau independen.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/app-store.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt="APP"
              />
            </a>
            <a
              href="/"
              className="w-32 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/google-play.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt="APP"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-4/5 lg:w-full">
            <img
              className="object-contain w-full h-auto hidden lg:block"
              src="./Team-work.svg"
              alt="Teamwork Illustration"
            />
          </div>
        </div>
      </div>
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-[#1D204C] hover:text-[#1D204C] hover:border-[#1D204C] duration-300 transform border border-[#1D204C] rounded-full hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  );
}
