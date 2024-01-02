// src/components/Tabs.js
import { useState } from "react";

const ChooseRoom = ({ image, title, active, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center p-2 cursor-pointer w-full ${
        active
          ? " text-white border-[2px] rounded-md border-solid border-purple-700"
          : "border-b border-gray-300 hover:border-gray-500"
      }`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full rounded-md h-16 mb-2 object-cover"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#8863BD]">{title}</h3>
      </div>
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      image:
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-dark-wood-european-classic-bedroom-suite-hotel_105762-2164.jpg?w=740&t=st=1704169152~exp=1704169752~hmac=c0d001b2d06c40df8d9f491a3849db48f238a172d8713dd93ae24e83c0a1609c",
      title: "Deluxe Room",
      price: "$30 /Per night",
      bed: "1200 sq.ft | 1 king Bed | Up to 6 Guest",
    },
    {
      image:
        "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=740&t=st=1704169219~exp=1704169819~hmac=97d69362f78485c3d11b4b5b85a00b8d38ae5d5681917d7c97dba51262b49a59",
      title: "Single Room",
      price: "$40 /Per night",
      bed: "1350 sq.ft | 2 king Bed | Up to 8 Guest",
    },
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/06/04/13/49/1000_F_604134956_2iHUqteJuqoKeTuSnd51FpdHuGFkrEbX.jpg",
      title: "Super Room",
      price: "$50 /Per night",
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/06/26/18/60/1000_F_626186063_LLARMIKXdy6lC3F95ECV1L2j9FE6jQrQ.jpg",
      title: "Presidential Room",
      price: "$100 /Per night",
      bed: "1500 sq.ft | 2 king Bed | Up to 8 Guest",
    },
  ];

  return (
    <div className="my-10">
      <h1 className="text-4xl font-semibold text-center text-purple-600 mb-9">
        Choose Your Luxurious Room!
      </h1>
      <div className=" bg-white" data-aos="zoom-in">
        {/* left side with tabs */}
        <div className="p-2 h-full lg:flex">
          {tabsData.map((tab, index) => (
            <ChooseRoom
              //   className="w-full"
              key={index}
              {...tab}
              active={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </div>
      <div className="lg:flex gap-3 items-center border mx-3">
        <div
          className="lg:w-6/12 p-4 flex flex-col justify-between gap-5"
          data-aos="zoom-in"
        >
          <div className="space-y-4">
            <div className="flex justify-between text-xl">
              <h1 className="font-semibold">{tabsData[activeTab].title}</h1>
              <h1 className="font-semibold text-red-500">
                {tabsData[activeTab].price}
              </h1>
            </div>
            <p>1100 sq.ft | 1 king Bed | Up to 4 Guest</p>
            <p>
              This is the dolor sit amet consectetur adipisicing elit. Culpa
              necessitatibus consequatur nostrum iure? Similique voluptatibus
              totam nobis exercitationem perferendis id, cupiditate at et
              praesentium quas? Quae amet, magni suscipit sequi.
            </p>
          </div>
          <hr />
          <div>
            <h1 className="font-smibold text-xl text-red-500">Room Features</h1>
            <div className="flex items-center gap-4 mt-2">
              <p>
                <li>42 Inch flat screen TV</li>
                <li>In-room Safe</li>
                <li>Mini-refrigerator</li>
              </p>
              <p>
                <li>Mini-refrigerator</li>
                <li>Breakfast</li>
                <li>complimeatary bottled water</li>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12" data-aos="zoom-in">
          {/* Left side with changing photos */}
          <img
            src={tabsData[activeTab].image}
            alt={tabsData[activeTab].title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
