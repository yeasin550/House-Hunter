import HappyClients from "../../components/HappyClients/HappyClients";
import Header from "../../components/Header/Header";
import Houses from "../../components/Houses/Houses";
import Offer from "../../components/Offer/Offer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Houses></Houses>
            <Offer/>
            <HappyClients/>
        </div>
    );
};

export default Home;