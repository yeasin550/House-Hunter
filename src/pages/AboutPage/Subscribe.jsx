/* eslint-disable no-unused-vars */

import { FaBell } from "react-icons/fa";

const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    form.reset()
  }
  return (
    <div className="p-12 max-w-screen-xl px-5 mx-auto bg-[#8861B3] text-white dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-md mb-20">
      <div className="md:flex justify-evenly items-center">
        {/* Frist div */}
        <div className="flex items-center gap-4">
          <FaBell className="text-6xl" />
          <div className="">
            <h1 className="text-2xl font-semibold">
              Get New Hotel Notifications
            </h1>
            <p>Free Subscribe Out Newsletter Now!</p>
          </div>
        </div>
        {/* second div */}
        <div className="">
          <form onSubmit={handleSubmit} className="md:flex items-center gap-10">
            <input
              className="py-2 dark:text-black w-full mt-3 md:mt-0 md:w-96 ps-3 text-lg rounded-md outline-0"
              type="email"
              name="email"
              id=""
              placeholder="Type Your Email Address"
            />
            <input
              className="bg-[#8861B3] shadow-md shadow-white px-8 py-2 mt-3 md:mt-0 rounded-md text-white cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
