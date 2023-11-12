
const HappyClients = () => {
    return (
      <div>
        <h1 className="text-center font-bold text-3xl my-5 italic text-[#8861B3]">
          Our 2100 Happy Clients
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
          <div
            className="bg-white shadow-md p-4 rounded-lg sm:flex items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Left Side (Photo) */}
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1699246762~exp=1699247362~hmac=e73be8721de1dcc765178d516a576537c9f5cda2172441cf3e3ec9b619426e2f"
                alt="Profile"
                className="md:w-56 w-full h-48 md:h-40 rounded-md mx-auto sm:mx-0"
              />
            </div>

            {/* Right Side (Information) */}
            <div className="sm:w-2/3 sm:pl-4 space-y-3">
              <div>
                <h2 className="text-xl text-[#71489e] font-semibold">
                  Sarah Johnson <span className="text-lg">(Age-28)</span>
                </h2>
                <p className="text-lg text-gray-500">
                  Joined on April 15, 2022
                </p>
              </div>
              <p className="mt-2 text-[#71489e] text-justify">
                Fantastic service! Found the perfect home. Highly recommended
                for house bookings.
              </p>
            </div>
          </div>
          <div
            className="bg-white shadow-md p-4 rounded-lg sm:flex items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Left Side (Photo) */}
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <img
                src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1699248659~exp=1699249259~hmac=acadfe4bcd35ba106f1090cdf0744bf9109821795699fc254dba9715e17efad8"
                alt="Profile"
                className="md:w-56 w-full h-48 md:h-40 rounded-md mx-auto sm:mx-0"
              />
            </div>

            {/* Right Side (Information) */}
            <div className="sm:w-2/3 sm:pl-4 space-y-3">
              <div>
                {" "}
                <h2 className="text-xl text-[#71489e] font-semibold">
                  Michael Smith <span className="text-lg">(Age-25)</span>
                </h2>
                <p className="text-lg text-gray-500">Joined on Jun 15, 2021</p>
              </div>
              <p className="mt-2 text-[#71489e] text-justify">
                Smooth booking process, excellent locations, and a friendly,
                professional team.
              </p>
            </div>
          </div>
          <div
            className="bg-white shadow-md p-4 rounded-lg sm:flex items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Left Side (Photo) */}
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1699248568~exp=1699249168~hmac=5399e204b3fbd440ba3982cff09e25c48fa80006a8ef7e3841d7874b944c95fc"
                alt="Profile"
                className="md:w-56 w-full h-48 md:h-40 rounded-md mx-auto sm:mx-0"
              />
            </div>

            {/* Right Side (Information) */}
            <div className="sm:w-2/3 sm:pl-4 space-y-3">
              <div>
                <h2 className="text-xl text-[#71489e] font-semibold">
                  David Miller <span className="text-lg">(Age-21)</span>
                </h2>
                <p className="text-lg text-gray-500">Joined on July 15, 2022</p>
              </div>
              <p className="mt-2 text-[#71489e] text-justify">
                Outstanding service! Stress-free bookings, great properties, and
                responsive staff. Recommend.
              </p>
            </div>
          </div>
          <div
            className="bg-white shadow-md p-4 rounded-lg sm:flex items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Left Side (Photo) */}
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <img
                src="https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?w=740&t=st=1699247377~exp=1699247977~hmac=16e8b6326328bfd3c029297c8881076893fb0a5342a0c6fe7845465e9d4443a0"
                alt="Profile"
                className="md:w-56 w-full h-48 md:h-40 rounded-md mx-auto sm:mx-0"
              />
            </div>

            {/* Right Side (Information) */}
            <div className="sm:w-2/3 sm:pl-4 space-y-3">
              <div>
                <h2 className="text-xl text-[#71489e] font-semibold">
                  Emily Davis <span className="text-lg">(Age-35)</span>
                </h2>
                <p className="text-lg text-gray-500">
                  Joined on April 15, 2020
                </p>
              </div>
              <p className="mt-2 text-[#71489e] text-justify">
                Exceptional experience, beautiful houses, and top-notch customer
                support. 5 stars!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HappyClients;