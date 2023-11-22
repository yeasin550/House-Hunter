/* eslint-disable react/no-unescaped-entities */

import { FaSearch, FaUsers } from 'react-icons/fa';
import { HiPhoto } from "react-icons/hi2";
import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const MostPopular = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto my-20">
        <div className="md:flex items-center gap-5">
          <div className="lg:w-1/2" data-aos="flip-left">
            <img
              src="https://img.freepik.com/free-vector/hotel-reception-concept-illustration_114360-12755.jpg?w=740&t=st=1699420439~exp=1699421039~hmac=39fffd2acf389dd3c139d4f22e1e6290aa9a5211b959c06ee7107095a2d2a69df"
              alt="bg-[#09867E] images"
              draggable="false"
            />
          </div>
          <div className="lg:w-1/2" data-aos="zoom-in">
            <h1 className="text-2xl font-bold text-[#8861B3]">
              {" "}
              Why We are Most Popular
            </h1>
            <p className=" mt-4 text-justify">
              Booking a hotel has never been simpler. Online platforms offer a
              wide hotel selection based on location, price, amenities, and
              reviews. After finding the perfect match, enter check-in and
              check-out dates, choose your room, and book securely. Flexible
              cancellation policies add peace of mind to your travel plans.
              Whether it's a vacation or a business trip, advance hotel booking
              guarantees a comfortable and hassle-free stay.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <FaUsers />
                </button>
                <h1 className="font-semibold text-[#8861B3]">Hotel booking</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <FaSearch />
                </button>
                <h1 className="font-semibold text-[#8861B3]">Hotel Search</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <HiPhoto />
                </button>
                <h1 className="font-semibold text-[#8861B3]">User Post</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <GoDeviceDesktop />
                </button>
                <h1 className="font-semibold text-[#8861B3]"> Top Hotels</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <MdOutlineShoppingBag />
                </button>
                <h1 className="font-semibold text-[#8861B3]">
                  International Hotel
                </h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <TfiWrite />
                </button>
                <h1 className="font-semibold text-[#8861B3]">
                  {" "}
                  Trusted & Quality Room
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MostPopular;