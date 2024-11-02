/* eslint-disable react/no-unescaped-entities */
import day from "../../assets/day.png";
import staff from "../../assets/staff.png";
import room from "../../assets/room.png";
const Offer = () => {
  return (
    <div className="mb-28 mt-12">
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl mt-5 mb-3 text-purple-600">
          Special Offer
        </h1>
        <p>ENJOY SPECIAL OFFERS ONLY AT SENOTINA HOTEL.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-9">
        <div
          className="flex gap-4 hover:shadow-lg p-2 rounded-md hover:border"
          data-aos="fade-up"
        >
          <div className="rounded-md bg-[#F6F1EC] w-40 h-20 p-5">
            <img className="" src={day} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="text-lg text-purple-600 font-semibold">
              Free Breakfast Every Day
            </h1>
            <p className="text-sm text-justify">
              Every day in the morning we have a special buffe and it's free.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div
          className="flex gap-4 hover:shadow-lg p-2 rounded-md hover:border"
          data-aos="zoom-in"
        >
          <div className="rounded-md bg-[#F6F1EC] w-40 h-20 p-5">
            <img className="" src={staff} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="text-lg font-semibold text-purple-600">
              Attentive And Open Staff
            </h1>
            <p className="text-sm text-justify">
              Senotina staff is very professional and open to customers. Surely
              you will be satisfied. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div
          className="flex gap-4 hover:shadow-lg p-2 rounded-md hover:border"
          data-aos="fade-down"
        >
          <div className="rounded-md bg-[#F6F1EC] w-40 h-20 p-5">
            <img className="" src={room} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="text-lg font-semibold text-purple-600">
              Luxurious & Comfort Room
            </h1>
            <p className="text-sm text-justify">
              Senotina hotel has a very luxurious and clean room system, the
              room service is also excellent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
