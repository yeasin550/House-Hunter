const Gallery = () => {
  return (
    <div>
      <div className="py-9 bg-gray-200 rounded-sm px-12">
        <h1 className="text-2xl font-bold">Gallery Services</h1>
        <p>Home / Gallery</p>
      </div>
      <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:pt-14 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                Gallery
              </h2>
              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text.
              </p>
            </div>
            <a
              href="#"
              className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a>
          </div>
        </div>
      </div>

      {/* gallery-section-1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/patio-balcony-with-chair-around-sea-ocean-view_74190-6864.jpg?w=740&t=st=1703774310~exp=1703774910~hmac=b1a4044a4b9603d3db4583548dbe3b4cb3a6e45398e0ede5b0c155ec8e349dac"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/umbrella-holiday-resort-luxury-pool_1203-4659.jpg?w=740&t=st=1703774306~exp=1703774906~hmac=edd5ad5de36f87c01a26d6fcdf85524e30e7224c10237b27fbe977bc15409a60"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150759.jpg?w=740&t=st=1703774469~exp=1703775069~hmac=d0cd9a5502200e4e84831f8303e65af266485fa71552490786ab169479f4731b"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=740&t=st=1703774471~exp=1703775071~hmac=fe9b30805f7b9e3c7d2376474d9f59d99601af7193da2c737cb24663a7ba9eb1"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/spa-salon-with-beach-view_53876-31335.jpg?w=740&t=st=1703774477~exp=1703775077~hmac=95619c9387a3fa651e268bd231b219a5c4473872a1502a8b9d4661a5d5f6aad7"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2294.jpg?w=740&t=st=1703774481~exp=1703775081~hmac=96025f6f4fe1777056b25fbdcb2e5061fc84a9e82056f7720efe042a936ab422"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?w=740&t=st=1703774499~exp=1703775099~hmac=06a3af1afad1a5efaabcd0db099e5a33f6fb2c015762ba9e53f303fd81089da9"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?t=st=1703774589~exp=1703778189~hmac=b785e4532e884c3524de7bb32b1a064ef36ce784630641eaa5119e8d5076195e&w=740"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/outdoor-swimming-pool_1203-2669.jpg?w=740&t=st=1703774600~exp=1703775200~hmac=7acca9999ffed38bd24c858c9be408c23d3b977304131a513cd04670bea14466"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?w=740&t=st=1703774608~exp=1703775208~hmac=ffc40c126df0ade69c0156127672b242dc4231dbcf0d0f5bc8bc0fc7d89e036a"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor-green-sofa_105762-2140.jpg?w=740&t=st=1703774656~exp=1703775256~hmac=951624a0b453693e2b6a53ea8de1825e5aa5733c934d4a5d90b5cbb895485e3a"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?w=740&t=st=1703774663~exp=1703775263~hmac=9d393af7239577c7291cbbd1e5db81487e3cbeda8e23532124646f1739817053"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        {/* Repeat this div for each image */}
      </div>
      {/* gallery-section-2 */}
      <>
        <div className="p-5 sm:p-8">
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img src="https://source.unsplash.com/bYuI23mnmDQ" />
            <img src="https://source.unsplash.com/Nllx4R-2c3o" />
            <img src="https://source.unsplash.com/lp40q07DIe0" />
            <img src="https://source.unsplash.com/wfalq01jJuU" />
            <img src="https://source.unsplash.com/rMHNK_skwwU" />
            <img src="https://source.unsplash.com/WBMjuGpbrCQ" />
            <img src="https://source.unsplash.com/nCUZ5BYBL_o" />
            <img src="https://source.unsplash.com/3u4fzMQZhjc" />
            <img src="https://source.unsplash.com/haOIqIPSwps" />
            <img src="https://source.unsplash.com/3UrYD7NNVxk" />
            <img src="https://source.unsplash.com/fm1JKDItlVM" />
            <img src="https://source.unsplash.com/qPpq1EVs8vw" />
            <img src="https://source.unsplash.com/xRyL63AwZFE" />
            <img src="https://source.unsplash.com/XeNKWTiCPNw" />
            <img src="https://source.unsplash.com/DFt3T5r_4FE" />
            <img src="https://source.unsplash.com/Ebwp2-6BG8E" />
          </div>
        </div>
        {/*credit by Surjith S M */}
      </>
    </div>
  );
};

export default Gallery;
