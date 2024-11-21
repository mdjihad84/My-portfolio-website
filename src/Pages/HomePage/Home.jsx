
import Hero from "./HeroSection";
import CardSection from "./CardSection";
import Protfolio from "./Protfolio";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-Doctor | Home</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
        <CardSection/>
        <Protfolio/>
      </div>
    </div>
  );
};
export default Home;
