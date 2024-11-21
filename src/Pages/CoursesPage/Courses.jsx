
import VideoPage from "./Video";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Protfolio | Home</title>
      </Helmet>
      <div className="p-2">
      <VideoPage/>
      <Testimonials/>
      </div>
    </div>
  );
};
export default Home;
