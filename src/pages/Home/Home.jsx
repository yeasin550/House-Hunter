import HappyClients from "../../components/HappyClients/HappyClients";
import Header from "../../components/Header/Header";
import Houses from "../../components/Houses/Houses";
import Offer from "../../components/Offer/Offer";
import AwesomeServices from "../../components/AwesomeServices/AwesomeServices";
import Subscribe from "../AboutPage/Subscribe";
// import AtHotel from "../../components/AtHotel/AtHotel";
import ChooseRoom from "../../components/ChooseRoom/ChooseRoom";
import BookTable from "../../components/BookTable/BookTable";
import FAQS from "../../components/FAQS/FAQS";
import Gallery from "../Gallery/Gallery";
// import OurLatestOffers from "../../components/OurLatestOffers/OurLatestOffers";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Houses></Houses>
            <BookTable/>
            <Offer/>
            <AwesomeServices />
            <ChooseRoom />
            <Gallery/>
            {/* <AtHotel/> */}
            {/* <OurLatestOffers/> */}
            <FAQS/>
            <HappyClients />
            <div className="my-12">
            <Subscribe/>
            </div>
        </div>
    );
};

export default Home;