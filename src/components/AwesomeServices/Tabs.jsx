// src/components/Tabs.js
import  { useState } from "react";

const Tab = ({ image, title, content, active, onClick }) => {
  return (
    <div
      className={`flex items-center p-4 cursor-pointer ${
        active
          ? "bg-black text-white border border-solid border-gray-700"
          : "border-b border-gray-300 hover:border-gray-500"
      }`}
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-12 h-12 mr-4 object-cover" />
      <div>
        <h3 className="text-lg font-semibold text-[#8863BD]">{title}</h3>
        <p className="">{content}</p>
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
      title: "Restaurant",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh e.",
    },
    {
      image: "https://demo.zantetheme.com/wp-content/uploads/2018/04/spa.jpg",
      title: "Spa - Beauty & Health",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh .",
    },
    {
      image:
        "https://demo.zantetheme.com/wp-content/uploads/2018/04/conference.jpg",
      title: "Conference Room",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh .",
    },
    {
      image:
        "https://demo.zantetheme.com/wp-content/uploads/2018/04/swimming.jpg",
      title: "Swimming Pool",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh .",
    },
  ];

  return (
    <div className="lg:flex my-10">
      <div className="lg:w-8/12" data-aos="zoom-in">
        {/* Left side with changing photos */}
        <img
          src={tabsData[activeTab].image}
          alt={tabsData[activeTab].title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="lg:w-5/12 bg-white" data-aos="zoom-in">
        {/* Right side with tabs */}
        <div className="p-2 h-full">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              {...tab}
              active={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
