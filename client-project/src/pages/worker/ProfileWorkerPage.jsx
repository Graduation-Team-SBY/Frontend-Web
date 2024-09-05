import { Link } from "react-router-dom";

export default function ProfileWorker() {
  return (
    <div className="mt-10 bg-[#FAF9FE] p-8">
      <div className="flex space-x-6 mb-6">
        <div className="flex-1 bg-[#FFFFFF] p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 rounded-full object-cover ring ring-gray-300 dark:ring-gray-600"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                alt="Profile"
              />
              <div>
                <h2 className="text-xl font-semibold">Nama Worker</h2>
                <p className="text-[#1D204C]">Rating</p>
              </div>
            </div>
            <Link
              to="/editProfile"
              className="bg-[#1D204C] text-[#FAF9FE] px-4 py-2 rounded"
            >
              EDIT
            </Link>
          </div>
        </div>

        <div className="flex-1 bg-[#FFFFFF] p-6 rounded-lg shadow-md flex items-center justify-center">
          <span className="text-lg font-medium">Informasi Saldo</span>
        </div>
      </div>

      {/* <div className="flex space-x-4 mb-6">
        <div className="flex-1 bg-[#FFFFFF] p-5 rounded-lg shadow-md text-center">
          <span>Total Order</span>
        </div>
        <div className="flex-1 bg-[#FFFFFF] p-5 rounded-lg shadow-md text-center">
          <span>BELUM</span>
        </div>
        <div className="flex-1 bg-[#FFFFFF] p-5 rounded-lg shadow-md text-center">
          <span>SELESAI</span>
        </div>
      </div> */}

      <section className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-8">
          Testimoni
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
            <p className="leading-loose text-gray-500 dark:text-gray-300 mb-6">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”
            </p>
            <div className="flex items-center">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUNlxGQJEDxszeIf86HiwKH9nNAEYxsPepw&s"
                alt="Testimonial 1"
              />
              <div className="ml-4">
                <h2 className="font-semibold text-blue-500">Robbert</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  CTO, Robert Consultancy
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
            <p className="leading-loose text-gray-500 dark:text-gray-300 mb-6">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”
            </p>
            <div className="flex items-center">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldtq86c8wAEf0lV3CBLozLpCjcIdx9ppR6g&s"
                alt="Testimonial 2"
              />
              <div className="ml-4">
                <h2 className="font-semibold text-blue-500">Mia Brown</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing Manager at Stech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
