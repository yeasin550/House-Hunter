// src/components/Tabs.js
import { useState } from "react";

// const ChooseRoom = ({ image, title, content, active, onClick }) => {
//   return (
//     <div
//       className={`flex items-center p-4 cursor-pointer ${
//         active
//           ? "bg-black text-white border border-solid border-gray-700"
//           : "border-b border-gray-300 hover:border-gray-500"
//       }`}
//       onClick={onClick}
//     >
//       <img src={image} alt={title} className="w-12 h-12 mr-4 object-cover" />
//       <div>
//         <h3 className="text-lg font-semibold text-[#8863BD]">{title}</h3>
//         <p className="">{content}</p>
//       </div>
//     </div>
//   );
// };
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
        className="w-full rounded-md h-20 mb-2 object-cover"
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
        "https://demo.zantetheme.com/wp-content/uploads/2018/04/restaurant.jpg",
      title: "Deluxe Room",
    },
    {
      image: "https://demo.zantetheme.com/wp-content/uploads/2018/04/spa.jpg",
      title: "Single Room",
    },
    {
      image:
        "https://demo.zantetheme.com/wp-content/uploads/2018/04/conference.jpg",
      title: "Super Room",
    },
    {
      image:
        "https://demo.zantetheme.com/wp-content/uploads/2018/04/swimming.jpg",
      title: "Presidential Room",
    },
  ];

  return (
    <div className="my-10">
      <h1 className="text-4xl font-semibold text-center text-purple-600 mb-9">Choose Your Luxurious Room!</h1>
      <div className="lg:w-full bg-white" data-aos="zoom-in">
        {/* left side with tabs */}
        <div className="p-2 h-full flex">
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
      <div className="flex gap-3 items-center border">
        <div className="lg:w-6/12" data-aos="zoom-in">
          {/* Left side with changing photos */}
          <img
            src={tabsData[activeTab].image}
            alt={tabsData[activeTab].title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="lg:w-6/12" data-aos="zoom-in">
          Coming soon............
        </div>
      </div>
    </div>
  );
};

export default Tabs;
