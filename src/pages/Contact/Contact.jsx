
const Contact = () => {
  return (
    <div>
      <div
        className="hero h-80 rounded-md"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
            <p>“ CONTACT US WHENEVER YOU NEED ”</p>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="text-center my-12 space-y-5 w-10/12 mx-auto">
        <h1 className="font-semibold text-4xl text-[#8861B3] ">
          Ask before booking
        </h1>
        <p>CONTACT US ANYTIME</p>
        <p>
          Before booking a hotel, its essential to consider factors like
          location, budget, and amenities. Check for guest reviews to gauge the
          hotels quality. Contact the hotel directly if you have specific
          questions or requirements, ensuring a smooth and satisfactory booking
          experience.
        </p>
      </div>
      <form className="">
        <textarea
          className="border border-[#886183] rounded-md px-5 pt-5 w-full"
          name=""
          id=""
          // cols="142"
          placeholder="Wright your text?"
          rows="5"
        ></textarea>
        <div className="flex justify-between gap-3 mt-3">
          <input
            className="w-full border border-[#886183] py-3 px-4 rounded-sm"
            placeholder="Name"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full border border-[#886183] py-3 px-4 rounded-sm"
            placeholder="Email"
            type="email"
            name=""
            id=""
          />
          <input
            className="w-full border border-[#886183] py-3 px-4 rounded-sm"
            placeholder="Phone"
            type="number"
            name=""
            id=""
          />
        </div>
        <div className="text-center">
          <button className="bg-[#8861B3] py-3 px-2 w-40 text-white font-semibold rounded-md mt-5">
            Send Message
          </button>
        </div>
      </form>
      <div className="container my-16 mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-amber-400 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Safe</h3>
          <p>Our products are secure and private out-of-the-box</p>
        </div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-amber-400 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Efficient</h3>
          <p>Feel good about your wallet and the environment</p>
        </div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className=" rounded-full border-8 border-amber-400 p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Proven</h3>
          <p>Leading the Smart Home world for 10 years</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
