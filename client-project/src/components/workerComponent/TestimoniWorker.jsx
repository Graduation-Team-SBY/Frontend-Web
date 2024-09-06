export default function Testimoni() {
  // 1D204C blue
  // 05ECAE mint
  // FFFFFF card
  // FAF9FE bg
  return (
    <>
      <section className="">
        <div className="container py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center">
            see the rating given by the{" "}
            <span className="text-[#05ECAE] ">Clients </span>say
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-[#FFFFFF] rounded-lg md:p-8">
              <p className="leading-loose text-[#1D204C]">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-[#1D204C]">Robbert</h1>
                  <span className="text-sm text-[#1D204C]">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#FFFFFF] rounded-lg  md:p-8">
              <p className="leading-loose text-[#1D204C]">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="mx-4">
                  <h1 className="font-semibold text-[#1D204C]">Mia Brown</h1>
                  <span className="text-sm text-[#1D204C]">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
