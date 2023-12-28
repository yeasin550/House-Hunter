const OurMenu = () => {
  return (
    <div>
      <div className="py-9 bg-gray-200 rounded-sm px-12">
        <h1 className="text-2xl font-bold">Menu Services</h1>
        <p>Home / Our Menu</p>
      </div>

      <div className="md:flex items-center my-12 gap-5">
        <div className="lg:w-3/5 w-full flex flex-col gap-12">
          <h1 className="font-semibold text-[#8861B3] text-3xl">
            OUR RESTAURANT
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
            congue nihil imperdiet doming id quod mazim placerat facer possim
            assum. Typi non habent claritatem insitam; est usus legentis in iis
            qui facit eorum claritatem. Investigationes demonstraverunt lectores
            legere me lius quod ii legunt saepius. Claritas est etiam processus
            dynamicus.
          </p>
        </div>
        <div className="w-full lg:w-2/5 grid grid-cols-2 p-4 gap-5">
          <img
            className="w-56  h-40 rounded-sm mb-1"
            src="https://img.freepik.com/free-photo/view-delicious-dish-food_23-2150777655.jpg?t=st=1700668070~exp=1700671670~hmac=5b2e225ef7fcc61710b1693d2da6fa642154ec0aad043965abfc2d95877a299a&w=826"
            alt=""
          />
          <img
            className="w-56  h-40 rounded-sm mb-1"
            src="https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg?w=740&t=st=1700669988~exp=1700670588~hmac=71b8aad93225d610602f389b961bb7b255e780d9259589041f567a66dff80947"
            alt=""
          />
          <img
            className="w-56  h-40 rounded-sm mb-1"
            src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1700669971~exp=1700670571~hmac=2138aa68118cc20cc72df5997e2b63aa0988e8ea52c109ef8f3fab2009d856e3"
            alt=""
          />
          <img
            className="w-56  h-40 rounded-sm mb-1"
            src="https://img.freepik.com/free-photo/baked-quails-pan-dark-surface_2829-5596.jpg?w=740&t=st=1700670106~exp=1700670706~hmac=96d392a4a3101d95cb7d0af1cd5a422b1bf5831a01a95d51b217262bfc8eae35"
            alt=""
          />
        </div>
      </div>
      <p className="text-justify my-9">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
        tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
        quod mazim placerat facer possim assum. Typi non habent claritatem
        insitam; est usus legentis in iis qui facit eorum claritatem.
        Investigationes demonstraverunt lectores legere me lius quod ii legunt
        saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem
        consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc
        putamus parum claram, anteposuerit litterarum formas humanitatis
      </p>
      <h1 className="font-semibold text-[#8861B3] text-3xl my-6">OUR MENU</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex bg-base-100 border h-32 hover:shadow-lg hover:border-2">
          {/* Left side (1/3) for photo */}
          <div className="w-1/3 mr-4">
            <img
              src="https://img.freepik.com/free-photo/salmon-avocado-salad-isolated-white-background_123827-20214.jpg?w=740&t=st=1700668776~exp=1700669376~hmac=48a2911851d783c5063c8f5fbe43bf4eb852189030ede14dd755f7157fad33d5"
              alt="Photo"
              className="h-full w-56 object-cover rounded-md"
            />
          </div>

          {/* Right side (2/3) for description */}
          <div className="w-2/3 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-4">SALAD</h2>
              <h2 className="text-lg font-bold mb-4">€16.99</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your description goes here. You can add multiple paragraphs, text,
              or other content as needed.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
        <div className="flex bg-base-100 border h-32 hover:shadow-lg hover:border-2">
          {/* Left side (1/3) for photo */}
          <div className="w-1/3 mr-4">
            <img
              src="https://img.freepik.com/free-photo/meal-containing-croquettes-parsley_23-2149306702.jpg?w=740&t=st=1700667938~exp=1700668538~hmac=ed597c14a3dfacd3d0de451d7e1c4ad5508a13bfa41d85bdab92788348e34cb8"
              alt="Photo"
              className="h-full w-56 object-cover rounded-md"
            />
          </div>

          {/* Right side (2/3) for description */}
          <div className="w-2/3 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-4">CROQUETTES</h2>
              <h2 className="text-lg font-bold mb-4">€9.99</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your description goes here. You can add multiple paragraphs, text,
              or other content as needed.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
        <div className="flex bg-base-100 border h-32 hover:shadow-lg hover:border-2">
          {/* Left side (1/3) for photo */}
          <div className="w-1/3 mr-4">
            <img
              src="https://img.freepik.com/free-photo/seafood-pizza_74190-5945.jpg?w=740&t=st=1700668881~exp=1700669481~hmac=bd436f80c5cb9e632132c353a82a3ea048301bdae8a0dc91a643a972e0ffbf36"
              alt="Photo"
              className="h-full w-56 object-cover rounded-md"
            />
          </div>

          {/* Right side (2/3) for description */}
          <div className="w-2/3 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-4">PIZZA</h2>
              <h2 className="text-lg font-bold mb-4">€11.99</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your description goes here. You can add multiple paragraphs, text,
              or other content as needed.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
        <div className="flex bg-base-100 border h-32 hover:shadow-lg hover:border-2">
          {/* Left side (1/3) for photo */}
          <div className="w-1/3 mr-4">
            <img
              src="https://img.freepik.com/free-photo/comida-lifestyle-spaghetti-foodie-gastronomy_1350-47.jpg?w=740&t=st=1700668215~exp=1700668815~hmac=12a9ca46ffb2b49a137200e97f2a518cf4d2a7d4ac01c11714a024ecc9314fe2"
              alt="Photo"
              className="h-full w-56 object-cover rounded-md"
            />
          </div>

          {/* Right side (2/3) for description */}
          <div className="w-2/3 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-4">SPAGHETTI</h2>
              <h2 className="text-lg font-bold mb-4">€6.99</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your description goes here. You can add multiple paragraphs, text,
              or other content as needed.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
        <div className="flex bg-base-100 border h-32 hover:shadow-lg hover:border-2">
          {/* Left side (1/3) for photo */}
          <div className="w-1/3 mr-4">
            <img
              src="https://img.freepik.com/free-photo/baked-chicken-drumsticks-honey-mustard-marinade_2829-3998.jpg?w=740&t=st=1700668521~exp=1700669121~hmac=d1ae425d66ab8cd2c5dc6dce1f47047e6ae663c8690d37ee7f0c1ce5c293b58e"
              alt="Photo"
              className="h-full w-56 object-cover rounded-md"
            />
          </div>

          {/* Right side (2/3) for description */}
          <div className="w-2/3 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-4">CHICKEN</h2>
              <h2 className="text-lg font-bold mb-4">€18.99</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your description goes here. You can add multiple paragraphs, text,
              or other content as needed.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
        <div className="flex bg-base-100 border h-32 hover:shadow-lg hover:border-2">
          {/* Left side (1/3) for photo */}
          <div className="w-1/3 mr-4">
            <img
              src="https://img.freepik.com/free-photo/raw-meat_144627-33845.jpg?w=740&t=st=1700668665~exp=1700669265~hmac=acd7c6e2d5a714f3b074c10b6ebc353377db9623d9ac103f06234f34d663bff9"
              alt="Photo"
              className="h-full w-56 object-cover rounded-md"
            />
          </div>

          {/* Right side (2/3) for description */}
          <div className="w-2/3 p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-4">MEAT</h2>
              <h2 className="text-lg font-bold mb-4">€16.99</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your description goes here. You can add multiple paragraphs, text,
              or other content as needed.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
      <p className="text-justify my-9">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
        tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
        quod mazim placerat facer possim assum. Typi non habent claritatem
        insitam; est usus legentis in iis qui facit eorum claritatem.
        Investigationes demonstraverunt lectores legere me lius quod ii legunt
        saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem
        consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc
        putamus parum claram, anteposuerit litterarum formas humanitatis
      </p>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:py-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <svg
              className="h-6 mr-3"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 455.005 455.005"
              style={{ enableBackground: "new 0 0 455.005 455.005" }}
              xmlSpace="preserve"
            >
              <g>
                <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z">
                  {" "}
                </path>
                <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z">
                  {" "}
                </path>
                <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z">
                  {" "}
                </path>
                <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z">
                  {" "}
                </path>
                <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z">
                  {" "}
                </path>
                <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z">
                  {" "}
                </path>
                <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z">
                  {" "}
                </path>
              </g>
            </svg>
            <a href="#" className="font-semibold inline-block">
              Cooking BLog
            </a>
          </div>
          <a href="#">See All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
              >
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1">6 mins ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  className="h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
              >
                Best FastFood Ideas (Yummy)
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1"> 10 days ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  className="h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                <span className="ml-1">0 Comments</span>
              </span>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  Cooking
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
              >
                Why to eat salad?
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1">16 hours ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <svg
                  className="h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                <span className="ml-1">9 Comments</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="font-semibold text-3xl my-5">IMAGE GALLERY</h1> */}
      <div className="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-2 lg:mb-64">
        <div className="mx-auto max-w-screen-2xl px-4">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-[#8861B3] lg:text-3xl dark:text-white">
                Gallery
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1703773609~exp=1703774209~hmac=7fbd5c945fbf3f362f67e31c9813cd3c5eb98b5d3bc9ee9672c21ff61bcbd278"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Pizza
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://img.freepik.com/free-psd/italian-food-concept-banner-template_23-2148527232.jpg?w=826&t=st=1703774062~exp=1703774662~hmac=073c6e5d00dc354a6ec4bce7da63c43928ff0da8745d2331c16141a617f8a776"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Italian food concept banner.
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://img.freepik.com/free-psd/fast-food-concept-banner-template_23-2148777964.jpg?w=826&t=st=1703773829~exp=1703774429~hmac=3f8f108e8c3b34d4694de59939cabca5f90d18da1a117b3af6c96173bfb40f1d"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fast food concept banner
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=740&t=st=1703773674~exp=1703774274~hmac=99e14c8b1b26d3d2f9317f80b6ce7c5445d61050839cf39e60cfc471d511467c"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Crispy fried chicken
              </span>
            </a>
            {/* image - end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
