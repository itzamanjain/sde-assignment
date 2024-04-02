import Banner from "../assets/Banner.svg";
import RecommendShow from "./RecommendShow";

const Header = () => {
  return (
    <div className="mt-5 ">
      <img src={Banner} className="mx-auto w-full h-3/4" alt="Banner" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl mt-10 font-bold text-white">
          Discover Exciting Events Happening <br />{" "}
          Near You - Stay Tuned For Updates!
        </h1>
        <p className="text-xl mt-5 text-wrap text-white">
          Find out about thrilling events happening near you, and stay updated
          for more information.
        </p>
      </div>
      <h1 className="-mt-20 ml-10 font-bold text-white text-2xl">Recommended Shows --</h1>
      <RecommendShow />
    </div>
  );
};

export default Header;
