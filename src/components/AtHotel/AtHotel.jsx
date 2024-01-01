import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { Link } from "react-router-dom";

const AtHotel = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-4xl text-[#8861B3]">
        Amenities At Hotel
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-12 px-5">
        <div className="flex gap-3 items-center rounded-md bg-gray-50 shadow-lg border">
          <img
            className="w-72 rounded-md"
            src="https://img.freepik.com/free-psd/burger-social-media-template_505751-2876.jpg?w=740&t=st=1704126536~exp=1704127136~hmac=569fbcd6ec4a1dc1fe80c9c1d5d3c6beda3e3f272c7f34bef0d92bd8b434aa1e"
            alt=""
          />
          <div className="space-y-5">
            <div className="flex justify-between items-center mx-3">
              <p className="text-5xl">
                <MdOutlineSportsGymnastics />
              </p>
              <p className="text-5xl opacity-50">01</p>
            </div>
            <h1 className="font-semibold text-2xl">Our Restaurant</h1>
            <p>
              This is the dolor sit amet adipisicing elit. Ducimus corrupti sit
              amet tempore placeat ipsa.
            </p>
            <Link className="font-bold flex text-[#8861B3] hover:underline items-center">
              Read more... <FaLongArrowAltRight className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-md bg-gray-50 shadow-lg border">
          <img
            className="w-72 h-full rounded-md"
            src="https://img.freepik.com/free-photo/preparation-hairdresser-makeup-artist_329181-1935.jpg?w=740&t=st=1704128152~exp=1704128752~hmac=e4ac4d423eccdd64e89247961efafab379d29386227f3cc537e6880e0519c93a"
            alt=""
          />
          <div className="space-y-5">
            <div className="flex justify-between items-center mx-3">
              <p className="text-5xl">
                <MdOutlineSportsGymnastics />
              </p>
              <p className="text-5xl opacity-50">02</p>
            </div>
            <h1 className="font-semibold text-2xl">Spa & Beauty</h1>
            <p>
              This is the dolor sit amet adipisicing elit. Ducimus corrupti sit
              amet tempore placeat ipsa.
            </p>
            <Link className="font-bold flex text-[#8861B3] hover:underline items-center">
              Read more... <FaLongArrowAltRight className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center rounded-md bg-gray-50 shadow-lg border">
          <div className="space-y-5 pl-3">
            <div className="flex justify-between items-center mx-3">
              <p className="text-5xl">
                <MdOutlineSportsGymnastics />
              </p>
              <p className="text-5xl opacity-50">03</p>
            </div>
            <h1 className="font-semibold text-2xl">Golf & Garden</h1>
            <p>
              This is the dolor sit amet adipisicing elit. Ducimus corrupti sit
              amet tempore placeat ipsa.
            </p>
            <Link className="font-bold flex text-[#8861B3] hover:underline items-center">
              Read more... <FaLongArrowAltRight className="text-2xl" />
            </Link>
          </div>
          <img
            className="w-72 h-full rounded-md"
            src="https://img.freepik.com/free-photo/empty-pavilion-garden_1339-3183.jpg?w=740&t=st=1704128280~exp=1704128880~hmac=a0023a9dd4a47afc7d80eccf6f34560fd09ee3eee42247bf34124489d56ec09a"
            alt=""
          />
        </div>
        <div className="flex gap-3 items-center rounded-md bg-gray-50 shadow-lg border">
          <div className="space-y-5 pl-3">
            <div className="flex justify-between items-center mx-3">
              <p className="text-5xl">
                <MdOutlineSportsGymnastics />
              </p>
              <p className="text-5xl opacity-50">04</p>
            </div>
            <h1 className="font-semibold text-2xl">Fitness & Gym</h1>
            <p>
              This is the dolor sit amet adipisicing elit. Ducimus corrupti sit
              amet tempore placeat ipsa.
            </p>
            <Link className="font-bold flex text-[#8861B3] hover:underline items-center">
              Read more... <FaLongArrowAltRight className="text-2xl" />
            </Link>
          </div>
          <img
            className="w-72 h-full rounded-md"
            src="https://img.freepik.com/free-vector/fitness-icons-set_1284-4730.jpg?w=740&t=st=1704128620~exp=1704129220~hmac=0ce2dff9962bfe990f4c0527653acd21f0fd997e68a665ae382ddc3b4bd06acc"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AtHotel;
