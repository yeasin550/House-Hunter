
const AboutBanner = () => {
    return (
      <div
        className="relative h-80 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://goupte.com/wp-content/uploads/2016/02/contact-banner.png)`,
        }}
      >
        <div className="absolute inset-0 bg-[#09867E] opacity-60"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1> <br />
        </div>
      </div>
    );
};

export default AboutBanner;