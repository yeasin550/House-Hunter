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
