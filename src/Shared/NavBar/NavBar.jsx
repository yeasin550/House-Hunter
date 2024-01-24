/* eslint-disable react-hooks/exhaustive-deps */
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/navLogo.png";
// import './NavBar.css';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
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
  // NavBar List Items
  const listItems = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-semibold border-b-2 text-purple-600 border-[#8861B3]"
            : "font-semibold text-purple-600 border-[#8861B3]"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-semibold border-b-2 text-purple-600 border-[#8861B3]"
            : "font-semibold text-purple-600 border-[#8861B3]"
        }
        to="/services"
      >
        Services
      </NavLink>

      <div
        className="relative group cursor-pointer z-50"
        onClick={toggleMenu}
        ref={dropdownRef}
      >
        {/* <span className="hover:font-bold">Pages</span> */}
        <span
          className={`cursor-pointer ${
            isClicked
              ? "font-semibold text-purple-600 border-[#8861B3]"
              : "font-semibold"
          }`}
          onClick={handleClick}
        >
          Pages
        </span>
        {isMenuVisible && (
          <div className="absolute left-0 flex flex-col mt-2 space-y-2 bg-purple-600 rounded-md text-white p-4 w-32">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold bg-[#1967D2] rounded-md p-2"
                  : "default hover:bg-[#1967D2] rounded- hover:p-[3px]"
              }
              to="/about"
              onClick={hideMenu}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold bg-[#1967D2] rounded-md p-2"
                  : "default hover:bg-[#1967D2] rounded- hover:p-[3px]"
              }
              to="/contact"
              onClick={hideMenu}
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold bg-[#1967D2] rounded-md p-2"
                  : "default hover:bg-[#1967D2] rounded- hover:p-[3px]"
              }
              to="/gallery"
              onClick={hideMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold bg-[#1967D2] rounded-md p-2"
                  : "default hover:bg-[#1967D2] rounded- hover:p-[3px]"
              }
              to="/ourMenu"
              onClick={hideMenu}
            >
              Our Menu
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold bg-[#1967D2] rounded-md p-2"
                  : "default hover:bg-[#1967D2] rounded- hover:p-[3px]"
              }
              to="/blogs"
              onClick={hideMenu}
            >
              Blogs
            </NavLink>
          </div>
        )}
      </div>

      {user ? (
        <Link
          to="/dashboard"
          className="bg-[var(--primary-color)] rounded-md text-white py-1 px-3"
        >
          Dashboard
        </Link>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="sticky top-0 left-0 bg-white z-50">
      <div className="navbar mx-auto p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItems}
            </ul>
          </div>
          <div className="flex items-center">
            <Link to="/" className=" text-lg font-semibold text-purple-600">
              {/* <p className="text-2xl text-center">🏡</p> */}
              <img className="w-[100px]" src={logo} alt="" />

              {/* House Hunter */}
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1 space-x-6 text-[17px] text-[var(--primary-color)]">
            {listItems}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <div
                  id="parent-user-profile"
                  className="flex items-center gap-x-1"
                >
                  <label
                    id="user-pic"
                    tabIndex={0}
                    className=" btn btn-ghost btn-circle avatar flex-row-reverse"
                  >
                    <div className="w-14 rounded-full border-2 border-purple-600 hover:shadow-lg">
                      <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
                >
                  <Link
                    to="/dashboard"
                    className="badge bg-[var(--primary-color)] text-white -mb-1 cursor-pointer w-full font-normal p-4 text-[17px] rounded-md hover:py-4"
                  >
                    {user?.fullname}
                  </Link>
                  <li className="hover:border-2 rounded-lg border-purple-600 text-[16px]">
                    <Link to="/dashboard" className="justify-between">
                      Dashboard
                      <span className="badge border-purple-600">New</span>
                    </Link>
                  </li>
                  <li className="hover:border-2 rounded-lg border-purple-600 text-[16px]">
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/websiteOwner"
                      className="text-[17px] w-full text-white hover:text-[#ffffffdd] border my-2 bg-[var(--primary-color)] hover:bg-[#9775b6] py-[7px] px-3 rounded-md shadow-md cursor-pointer"
                    >
                      Website Owner
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="custom-btn">
                  Login Now
                </Link>
                <Link to="/websiteOwnerDetails" className="custom-btn">
                  Owner
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
