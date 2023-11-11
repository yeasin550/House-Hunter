import HappyClients from "../../components/HappyClients/HappyClients";
import Header from "../../components/Header/Header";
import Houses from "../../components/Houses/Houses";
import Offer from "../../components/Offer/Offer";
import AwesomeServices from "../../components/AwesomeServices/AwesomeServices";
import Subscribe from "../AboutPage/Subscribe";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Houses></Houses>
            <Offer/>
            <AwesomeServices/>
            <HappyClients />
            <div className="my-12">
            <Subscribe/>
            </div>
        </div>
    );
};

export default Home;