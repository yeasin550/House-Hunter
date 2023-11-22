import {BsQuestionCircle} from 'react-icons/bs'

const QuestionsAnswers = () => {
    return (
      <div
        className="max-w-screen-xl px-5 mx-auto my-20 mb-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* title and descption */}
        <div className="text-center md:w-6/12 mx-auto">
          <h1 className="text-3xl font-semibold text-[#8861B3]">
            Questions & Answers
          </h1>
          <p className="text-lg mt-3">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ Hotels worldwide.
          </p>
        </div>
        {/* main part */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold text-[#8861B3]">
                How can I book a hotel online?
              </h1>
              <p className="text-justify">
                Booking a hotel online is easy. Use a reputable booking
                platform, search for your preferred hotel, select your dates and
                room type, and complete a secure reservation.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold text-[#8861B3]">
                What factors should I consider when choosing a hotel?
              </h1>
              <p className="text-justify">
                Consider location, price, amenities, and guest reviews to find
                the best hotel for your needs.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold text-[#8861B3]">
                How can I secure a room at the hotel of my choice?
              </h1>
              <p className="text-justify">
                To secure a room, provide your check-in and check-out dates,
                select your room type, and complete a secure online reservation.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shadow hover:shadow-2xl card p-2 dark:bg-[#09867E]">
            <h1 className="text-2xl mt-1 text-blue-800">
              <BsQuestionCircle className="dark:text-white" />
            </h1>
            <div className="">
              <h1 className="text-xl font-semibold text-[#8861B3]">
                What are the advantages of booking a hotel in advance?
              </h1>
              <p className="text-justify">
                Booking in advance ensures a worry-free stay, with flexible
                cancellation policies and the guarantee of a comfortable stay
                during your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuestionsAnswers;