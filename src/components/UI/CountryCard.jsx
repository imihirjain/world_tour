import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <>
      <li className="list-none flex ">
        <div
          className="border-1 border-[#1a171c] text-white rounded-3xl px-10 py-8 shadow-lg"
          style={{
            background: "linear-gradient(71deg, #080509, #1a171c, #080509)",
          }}
        >
          <img src={flags.svg} alt={flags.alt} className="w-64 h-36" />
          <div className="mt-2">
            <p className="text-2xl font-semibold mb-2">
              {name.common.length > 10
                ? name.common.slice(0, 10) + "..."
                : name.common}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <span className="text-white font-medium">Population: </span>
              {population.toLocaleString()}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <span className="text-white font-medium">Region: </span>
              {region}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <span className="text-white font-medium">Capital: </span>
              {capital[0]}
            </p>
            <NavLink to={`/country/${name.common}`}>
              <button className="mt-3 border-1 text-xs px-8 py-2 rounded-2xl flex items-center justify-center">
                Read More <FaLongArrowAltRight className="ml-2" />
              </button>
            </NavLink>
          </div>
        </div>
      </li>
    </>
  );
};
