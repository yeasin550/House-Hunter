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
        {/* jdskfjas;l____________________________ */}
        <div className="text-center p-8">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Why to choose US?
          </h2>
          <div className="flex flex-wrap items-center mt-10 text-left">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://img.freepik.com/free-vector/flat-hotel-review-background_23-2148153714.jpg?w=740&t=st=1703775209~exp=1703775809~hmac=ca4faf25ba4d68a794a2f6e1f44654049b9aa9a8ddd5d8e6b76742ad2e6fb5ad"
                alt="gem"
                className="inline-block rounded w-96"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Simple integration
              </h3>
              <p className="sm:text-lg mt-6">
                Use the LocaleData gem to download translations directly into
                your Ruby on Rails projects using the provided command line
                interface. Just create a project and follow the step-by-step
                instructions.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-10 text-left">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://img.freepik.com/free-vector/hotel-review-concept_23-2148148426.jpg?w=740&t=st=1703775219~exp=1703775819~hmac=21d5533b803b9c72d076e4a7abee0a7576c966635e5f734c9597dd8014572bb0"
                alt="project members"
                className="inline-block rounded w-96"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Easy collaboration
              </h3>
              <p className="sm:text-lg mt-6">
                All LocaleData projects are private. Each project can have
                multiple collaborators with different roles and access
                permissions. You determine who can see and edit your
                translations. Just add admins, developers, translators and
                configure their access rights.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-10 text-left">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://img.freepik.com/free-vector/cheap-inn-affordable-guesthouse-college-dormitory-motel-check-hostel-services-lower-priced-accommodation-best-hostel-facilities-concept_335657-694.jpg?w=740&t=st=1703775418~exp=1703776018~hmac=bed42df5edfdec64a0b93c0f40fade541e46c33096e26867c013f7c215227086"
                alt="editor"
                className="inline-block rounded w-96"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                No more syntax errors
              </h3>
              <p className="sm:text-lg mt-6">
                LocaleData provides you easy import/export functions for your
                YAML files. Use a simple editor with many predefined languages
                to manage your locales. LocaleData also supports multiple
                translation types, such as simple text, plural forms, numbers,
                booleans, symbols, arrays, ...
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-10 text-left">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://img.freepik.com/free-vector/hotel-booking-concept-illustration_114360-2257.jpg?w=740&t=st=1703775499~exp=1703776099~hmac=0e408be220ea6ba1d73437b1ff228f49d9ca006c5d78c668b2fefed0b1c597bb"
                alt="bulk editing"
                className="inline-block rounded w-96"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Bulk editing
              </h3>
              <p className="sm:text-lg mt-6">
                Do you need to change the path of many translation keys at once?
                No problem, just use the bulk editing feature and enjoy the
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuestionsAnswers;