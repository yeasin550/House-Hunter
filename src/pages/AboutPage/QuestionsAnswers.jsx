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
          <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://picsum.photos/400/240"
                alt="gem"
                className="inline-block rounded shadow-lg border border-merino-400"
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
          <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://picsum.photos/400/240"
                alt="project members"
                className="inline-block rounded shadow-lg border border-merino-400"
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
          <div className="flex flex-wrap items-center mt-20 text-left  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://picsum.photos/400/240"
                alt="editor"
                className="inline-block rounded shadow-lg border border-merino-400"
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
          <div className="flex flex-wrap items-center mt-20 text-left text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src="https://picsum.photos/400/240"
                alt="bulk editing"
                className="inline-block rounded shadow-lg border border-merino-400"
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