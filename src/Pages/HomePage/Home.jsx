
import Hero from "./HeroSection";
import CardSection from "./CardSection";
import Protfolio from "./Protfolio";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-Doctor | Home</title>
      </Helmet>
      <Hero/>
      <div className="p-6">
        <CardSection/>
        <Protfolio/>
        <Testimonials/>
        <ContactSection/>
      </div>
    </div>
  );
};
export default Home;
