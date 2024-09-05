export default function Testimoni() {
  return (
    <>
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
    </>
  );
}
