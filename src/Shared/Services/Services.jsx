import {
  FaChair,
  FaMobileAlt,
  FaRegEyeSlash,
  FaShower,
  FaSpa,
  FaWheelchair,
  FaWifi,
  FaWineGlass,
  FaRestroom,
  FaDoorOpen,
} from "react-icons/fa";
import { MdOutlineCheckroom, MdOutlineFitnessCenter } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { FiTerminal } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import { MdComputer, MdCoffee } from "react-icons/md";
import { GiWineGlass } from "react-icons/gi";

const Services = () => {
  return (
    <div>
      <div className="py-9 bg-gray-200 rounded-sm px-12">
        <h1 className="text-2xl font-bold">Our Services</h1>
        <p>Home / Our Services</p>
      </div>
      <>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-[#945ccf]">
            Our Services
          </h2>
          <p className="mb-12 text-lg text-gray-500">
            Here is a few of the awesome Services we provide.
          </p>

          <div className="mb-20">
            <h1 className="text-center font-semibold text-3xl mb-7 text-[#8861B3]">
              Enjoy Your Best Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="border rounded-xl hover:shadow-md p-3 w-full lg:w-[370px]">
                <div className="text-center space-y-3 mb-3">
                  <p className="w-12 mx-auto text-5xl text-red-500">
                    <FaRestroom />
                  </p>
                  <h1 className="font-semibold text-lg text-[#8861B3]">
                    Private Dining Rooms
                  </h1>
                  <p>
                    This is the dolor sit amet consectetur adipisicing eligendi.
                  </p>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/dining-area-comfortable-studio-flat-hotel-room_1262-12324.jpg?w=740&t=st=1704173336~exp=1704173936~hmac=5908e190835ce3aeacd6beb1edb6f6c13015b59bbd9e9c40d97bd1cc3dc7ad18"
                  className="w-80 mx-auto rounded-md"
                  alt=""
                />
              </div>
              <div className="border rounded-xl hover:shadow-md p-3">
                <div className="text-center space-y-3 mb-3">
                  <p className="w-12 mx-auto text-5xl text-red-500">
                    <MdOutlineCheckroom />
                  </p>
                  <h1 className="font-semibold text-lg text-[#8861B3]">
                    Distinctive Rooms
                  </h1>
                  <p>
                    This is the dolor sit amet consectetur adipisicing eligendi.
                  </p>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/tidy-hotel-room-with-brown-curtains_1203-1493.jpg?w=740&t=st=1704174762~exp=1704175362~hmac=72936c11bbc374939049112b10f3819d258d539194418679682f7b15f12873dc"
                  className="w-80 mx-auto rounded-md"
                  alt=""
                />
              </div>
              <div className="border rounded-xl hover:shadow-md p-3">
                <div className="text-center space-y-3 mb-3">
                  <p className="w-12 mx-auto text-5xl text-red-500">
                    <BiSolidOffer />
                  </p>
                  <h1 className="font-semibold text-lg text-[#8861B3]">
                    Complimentary Offers
                  </h1>
                  <p>
                    This is the dolor sit amet consectetur adipisicing eligendi.
                  </p>
                </div>
                <img
                  src="https://img.freepik.com/free-psd/special-deal-super-offer-upto-60-parcent-off-isolated-3d-render-with-editable-text_47987-15330.jpg?w=740&t=st=1704174812~exp=1704175412~hmac=21819eb728c52084ee0e91071d02635cc8bb605a06f381bc8a95e40bd46904a7"
                  className="w-80 mx-auto rounded-md"
                  alt=""
                />
              </div>
              <div className="border rounded-xl hover:shadow-md p-3">
                <div className="text-center space-y-3 mb-3">
                  <p className="w-12 mx-auto text-5xl text-red-500">
                    <FaDoorOpen />
                  </p>
                  <h1 className="font-semibold text-lg text-[#8861B3]">
                    The Pool
                  </h1>
                  <p>
                    This is the dolor sit amet consectetur adipisicing eligendi.
                  </p>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/umbrella-chair_74190-2092.jpg?w=740&t=st=1704174285~exp=1704174885~hmac=47d6872c705c3b8c91a0474aaf93e57dc7a3722f03e9cbe05a2e844af9064d0d"
                  className="w-80 mx-auto rounded-md"
                  alt=""
                />
              </div>
              <div className="border rounded-xl hover:shadow-md p-3">
                <div className="text-center space-y-3 mb-3">
                  <p className="w-12 mx-auto text-5xl text-red-500">
                    <MdOutlineFitnessCenter />
                  </p>
                  <h1 className="font-semibold text-lg text-[#8861B3]">
                    Fitness Center
                  </h1>
                  <p>
                    This is the dolor sit amet consectetur adipisicing eligendi.
                  </p>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/bodybuilding-fitness-concept_23-2147671863.jpg?w=740&t=st=1704174188~exp=1704174788~hmac=8476546a58367ee6c26cf36183e98a586df1984446ebfb4665b3f156a4ccdcb1"
                  className="w-80 mx-auto rounded-md"
                  alt=""
                />
              </div>
              <div className="border rounded-xl hover:shadow-md p-3">
                <div className="text-center space-y-3 mb-3">
                  <p className="w-12 mx-auto text-5xl text-red-500">
                    <FiTerminal />
                  </p>
                  <h1 className="font-semibold text-lg text-[#8861B3]">
                    Spa Center
                  </h1>
                  <p>
                    This is the dolor sit amet consectetur adipisicing eligendi.
                  </p>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort_176420-13956.jpg?w=740&t=st=1704174238~exp=1704174838~hmac=d2aa5c758b7d6f145f34552418f5f8ac19f3e181c136a710a0ab6fe18b5e9836"
                  className="w-80 mx-auto rounded-md"
                  alt=""
                />
              </div>
            </div>
          </div>

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
