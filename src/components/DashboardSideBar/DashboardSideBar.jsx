/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import logo from "../../assets/dashLogo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const DashboardSideBar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  const [isMenuVisible, setMenuVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      hideMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const houseOwner = (
    <>
      <Link
        to="/dashboard"
        className="w-full border mb-2 mt-3 text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        My Profile
      </Link>
      <Link
        to="/dashboard/myListedHouses"
        className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        My All Listed Houses
      </Link>
      <Link
        to="/dashboard/allBookedHouses"
        className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        All Booked Houses
      </Link>
      {/* <Link
        to="/dashboard/addNewHouse"
        className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        Add New Houses
      </Link> */}
      <div
        className="relative group cursor-pointer z-50 px-3 mb-2 w-full border text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px]  rounded-md hover:shadow-md"
        onClick={toggleMenu}
        ref={dropdownRef}
      >
        Add New Houses
        {isMenuVisible && (
          <div className="absolute left-0 w-full flex flex-col mt-2 space-y-2 bg-gray-100 rounded-md text-white p-4">
            <Link
              to="/dashboard/addNewHouse"
              className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#bfa0e2] bg-purple-600 py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
            >
              Add New Houses
            </Link>
            <Link
              to="/dashboard/addNewTable"
              className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#bfa0e2] bg-purple-600 py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
            >
              Add New Table
            </Link>
          </div>
        )}
      </div>
      {/* <Link
        to="/dashboard/addNewTable"
        className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        Add New Table
      </Link> */}
      <Link
        to="/dashboard/allUsers"
        className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        All Users
      </Link>
      <Link
        to="/"
        className="w-full text-[#ffffffdd] border mb-2 bg-[#ffffff3f] py-[7px] px-3 rounded-md shadow-md cursor-pointer"
      >
        Go Back Home
      </Link>
    </>
  );

  const houseRenter = (
    <>
      <Link
        to="/dashboard"
        className="w-full text-[#ffffffdd] border mb-2 mt-3 hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        My Profile
      </Link>
      <Link
        to="/dashboard/manageBookings"
        className="w-full border mb-2 text-[#ffffffdd] hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md hover:shadow-md cursor-pointer"
      >
        Manage Bookings
      </Link>
      <Link
        to="/"
        className="w-full text-[#ffffffdd] border mb-2 bg-[#ffffff3f] py-[7px] px-3 rounded-md shadow-md cursor-pointer"
      >
        Go Back Home
      </Link>
    </>
  );

  return (
    <div className="lg:w-[270px] md:h-screen overflow-hidden relative bg-[var(--primary-color)] py-2 px-2">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="w-[60%] mx-auto" src={logo} alt="" />
        </Link>
      </div>
      <div className="my-2 w-full h-[2px] bg-gray-300"></div>
      <div className="flex flex-col">
        {user.role === "House Owner" ? houseOwner : houseRenter}
      </div>

      <div className="flex flex-col absolute w-[94%] lg:mt-0 mt-12 left-[3%] bottom-10">
        <div className="flex items-center">
          <img
            className="w-[30px] h-[30px] mb-2 rounded-full border-2 border-gray-300"
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
            alt=""
          />
          <p className="text-[#ffffffdd] text-[17px] -mt-1 ml-1">
            {user.fullname}
          </p>
        </div>
        <Link
          className="w-full text-[#ffffffdd] bg-[#ffffff3f] py-[7px] px-3 rounded-md shadow-md"
          onClick={handleLogout}
        >
          Logout
        </Link>
        <Link
          to="/dashboard/websiteOwner"
          className="w-full text-[#ffffffdd] border my-2 hover:bg-[#ffffff3f] py-[7px] px-3 rounded-md shadow-md cursor-pointer"
        >
          Website__ Owner(Creator!)
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
