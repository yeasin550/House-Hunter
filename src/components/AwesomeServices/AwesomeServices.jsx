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
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight text-[#8861B3] font-semibold text-primary-800">
            Highlighted Features
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* can help image */}
          <div className="w-1/2 h-full mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className=" mx-auto"
              src="https://img.freepik.com/free-vector/hotel-travel-accommodation-concept-template_98292-3969.jpg?w=740&t=st=1703777030~exp=1703777630~hmac=a5e7118f69a4fb14cca96968e8c68c8ddf3b95438870864b544d3631c2dea48c"
              alt="can_help_banner"
            />
          </div>
          {/* end can help image */}
          <div className="w-1/2 flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-xl font-bold text-md mb-6">
                  Dynamic Personalization:
                </h3>
                <p className="text-sm">
                  Our platform leverages user data and behavior to provide a
                  highly personalized experience, with dynamic content and
                  product recommendations that change in real-time.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-xl font-bold text-md mb-6">
                  Mobile-Optimized Interface
                </h3>
                <p className="text-sm">
                  {" "}
                  Our website is designed with a mobile-first approach, offering
                  a seamless browsing experience across all devices, including
                  smartphones and tablets.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-xl font-bold text-md mb-6">
                  24/7 Customer Support
                </h3>
                <p className="text-sm">
                  ur U.S.-based customer support team is available around the
                  clock to answer any questions, resolve any issues, and provide
                  helpful solutions. Whether its through email, phone, or live
                  chat, we are always here to support you.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-xl font-bold text-md mb-6">
                  Secure Payment Processing
                </h3>
                <p className="text-sm">
                  We use cutting-edge security measures to protect our customers
                  sensitive information and ensure the safety of all
                  transactions made on our site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeServices;
