import {
  FaChair,
  FaMobileAlt,
  FaRegEyeSlash,
  FaShower,
  FaSpa,
  FaWheelchair,
  FaWifi,
  FaWineGlass,
  
} from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { MdComputer, MdCoffee } from "react-icons/md";
import { GiWineGlass } from "react-icons/gi";

const Services = () => {
  return (
    <div>
      <div className="py-9 bg-gray-200 rounded-sm px-12">
        <h1 className="text-2xl font-bold">Room Services</h1>
        <p>Home / Room Services</p>
      </div>
      <>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-[#945ccf]">
            Services
          </h2>
          <p className="mb-12 text-lg text-gray-500">
            Here is a few of the awesome Services we provide.
          </p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-[#945ccf]">
                        SwiftBooking Assurance
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Experience peace of mind with our instant confirmation,
                      best rates, flexible cancellations, personalized
                      suggestions, and round-the-clock customer support for a
                      worry-free hotel booking adventure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-[#945ccf]">
                        EliteStay Concierge
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Indulge in luxury and convenience! Enjoy instant
                      confirmations, unbeatable rates, flexible cancellations,
                      tailored recommendations, and 24/7 concierge support for a
                      flawless hotel booking experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-[#945ccf]">
                        FlexiReserve Advantage
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Your travel, your terms! Benefit from instant
                      confirmations, best prices, flexible cancellations,
                      personalized suggestions, and constant customer support
                      for a hassle-free and flexible hotel booking journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-[#945ccf]">
                        StayWell Navigator
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Navigate your perfect stay effortlessly! With instant
                      confirmations, best rates, flexible cancellations,
                      personalized tips, and 24/7 support, enjoy a smooth and
                      personalized hotel booking experience with StayWell
                      Navigator.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-[#945ccf]">
                        Timeless Travelers Haven
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Embark on timeless journeys with instant confirmations,
                      unbeatable rates, flexible cancellations, personalized
                      recommendations, and dedicated 24/7 customer support,
                      ensuring your hotel bookings are as memorable as your
                      travels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* source:https://tailwind.besoeasy.com */}
      </>

      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <AiFillCar />
          </div>
          <p className="text-lg">Airport Pickup</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaWifi />
          </div>
          <p className="text-lg">Wi-Fi</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaRegEyeSlash />
          </div>
          <p className="text-lg">Private Balcony</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaChair />
          </div>
          <p className="text-lg">Air Conditioner</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <MdComputer />
          </div>
          <p className="text-lg">Widescreen TV</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaSpa />
          </div>
          <p className="text-lg">Massage & Spa</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <MdCoffee />
          </div>
          <p className="text-lg">Coffee Maker</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaWheelchair />
          </div>
          <p className="text-lg">Hair Dryer</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaWineGlass />
          </div>
          <p className="text-lg">Breakfast</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaShower />
          </div>
          <p className="text-lg">Sauna</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <GiWineGlass />
          </div>
          <p className="text-lg">Mini Bar</p>
        </div>
        <div className="border-[2px] shadow-md hover:shadow-lg rounded-sm border-dotted flex flex-col items-center justify-center p-4 space-y-2">
          <div className="text-2xl">
            <FaMobileAlt />
          </div>
          <p className="text-lg">Free-to-use Smartphone</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
