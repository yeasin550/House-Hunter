import HappyClients from "../../components/HappyClients/HappyClients";
import Header from "../../components/Header/Header";
import Houses from "../../components/Houses/Houses";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Houses></Houses>
            <HappyClients/>
        </div>
    );
};

export default Home;