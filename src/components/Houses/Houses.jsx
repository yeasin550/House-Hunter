import { useEffect, useState } from "react";
import House from "./House";
import logo from "../../assets/availables.png";
import { MagnifyingGlass } from "react-loader-spinner";
const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [totalHouse, setTotalHouse] = useState(0);
  // console.log(houses);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalHouse / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch("https://house-hunter-server-pi.vercel.app/totalHouses")
      .then((res) => res.json())
      .then((data) => setTotalHouse(data.totalHouses));
  });

  useEffect(() => {
    fetch(
      `https://house-hunter-server-pi.vercel.app/houses?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, [currentPage]);

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="w-[250px] mx-auto mt-3">
        <img
          className="w-[250px]"
          // src="https://i.ibb.co/cCPf9f7/houses.png"
          src={logo}
          alt=""
        />
      </div>

      {houses.length > 0 ? (
        <>
          <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2 xl:gap-5">
            {houses.map((house, index) => (
              <House key={house._id} house={house} digit={index + 1}></House>
            ))}
          </div>
        </>
      ) : (
        <div className="w-fit mx-auto flex flex-col items-center justify-center mt-12">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#8961b33e"
            color="#8861b3"
          />
          <p className="text-gray-400">Wait for loading please..</p>
        </div>
      )}

      <div className="w-full bg-white">
        {/* Pagination */}
        <div className="pagination p-5 w-fit ms-auto">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`w-14 h-9 text-lg border ${
                currentPage === number ? "bg-[var(--primary-color)]" : ""
              }`}
              onClick={() => handleSetCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houses;
