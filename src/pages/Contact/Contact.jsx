
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
    </div>
  );
};

export default Contact;
