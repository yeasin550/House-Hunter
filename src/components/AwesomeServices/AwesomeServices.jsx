// import React from "react";
// import Tabs from "./AwesomeServices/Tabs"; 
import Tabs from "../../components/AwesomeServices/Tabs";
const AwesomeServices = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#8863BD]">
          OUR AWESOME SERVICES
        </h1>
        <p>Check out our awesome services</p>
      </div>
      {/* Display the Tabs component here */}
      <Tabs />
    </div>
  );
};

export default AwesomeServices;
