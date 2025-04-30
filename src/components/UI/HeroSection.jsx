import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse lg:flex-nowrap lg:px-50 p-10 justify-between items-center bg-black">
        {/* for left */}
        <div className="text-white space-y-4 mt-5 lg:mt-10">
          <h1 className="text-4xl font-semibold">
            Explore the World, One Country at a Time.
          </h1>
          <p className="text-sm tracking-wider">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to="/country">
            <button className="border-2 text-xs px-6 py-2 rounded-4xl flex items-center cursor-pointer justify-center hover:scale-105 transition-all duration-200 ">
              Start Exploring <FaLongArrowAltRight className="mt-1 ml-2" />
            </button>
          </NavLink>
        </div>
        {/* For right */}
        <div>
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="w-full mt-10"
          />
        </div>
      </div>
    </>
  );
};
