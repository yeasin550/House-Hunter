
const OurMenu = () => {
    return (
      <div>
        <div className="py-9 bg-gray-200 rounded-sm px-12">
          <h1 className="text-2xl font-bold">Menu Services</h1>
          <p>Home / Our Menu</p>
        </div>

        <div className="md:flex items-center my-12 gap-5">
          <div className="lg:w-3/5 w-full flex flex-col gap-12">
            <h1 className="font-semibold text-3xl">OUR RESTAURANT</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Nam liber tempor cum soluta
              nobis eleifend option congue nihil imperdiet doming id quod mazim
              placerat facer possim assum. Typi non habent claritatem insitam;
              est usus legentis in iis qui facit eorum claritatem.
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynamicus.
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
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Typi non
          habent claritatem insitam; est usus legentis in iis qui facit eorum
          claritatem. Investigationes demonstraverunt lectores legere me lius
          quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
          sequitur mutationem consuetudium lectorum. Mirum est notare quam
          littera gothica, quam nunc putamus parum claram, anteposuerit
          litterarum formas humanitatis
        </p>
        <h1 className="font-semibold text-3xl my-6">OUR MENU</h1>
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
                Your description goes here. You can add multiple paragraphs,
                text, or other content as needed.
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
                Your description goes here. You can add multiple paragraphs,
                text, or other content as needed.
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
                Your description goes here. You can add multiple paragraphs,
                text, or other content as needed.
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
                Your description goes here. You can add multiple paragraphs,
                text, or other content as needed.
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
                Your description goes here. You can add multiple paragraphs,
                text, or other content as needed.
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
                Your description goes here. You can add multiple paragraphs,
                text, or other content as needed.
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
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer possim assum. Typi non
          habent claritatem insitam; est usus legentis in iis qui facit eorum
          claritatem. Investigationes demonstraverunt lectores legere me lius
          quod ii legunt saepius. Claritas est etiam processus dynamicus, qui
          sequitur mutationem consuetudium lectorum. Mirum est notare quam
          littera gothica, quam nunc putamus parum claram, anteposuerit
          litterarum formas humanitatis
        </p>
        <h1 className="font-semibold text-3xl my-5">IMAGE GALLERY</h1>
      </div>
    );
};

export default OurMenu;