import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components/UI/Loader";
import { getCountryByName } from "../api/postApi";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryInfo = () => {
  const params = useParams();
  const [isPending, stateTransition] = useTransition();
  const [country, setCountry] = useState();
  const navigate = useNavigate();
  console.log(params);

  useEffect(() => {
    stateTransition(async () => {
      const res = await getCountryByName(params.id);
      console.log(res.data);
      if (res.status == 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap lg:px-50 p-10 justify-between font-outfit items-center gap-6 bg-black">
        {country && (
          <>
            <div className="flex gap-10 border-2 bg-[#202020] p-10 ">
              <div>
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt}
                  width={600}
                  className="h-120 w-180"
                />
              </div>
              <div className="text-white space-y-4 mt-5 lg:mt-0">
                <h1 className="text-4xl font-semibold">
                  {country.name.common}
                </h1>
                <p className="text-sm tracking-wider">
                  <span>Native Names:-</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span>Population:- </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span>Region:- </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region:- </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital:- </span>
                  {country.capital}
                </p>
                <p>
                  <span>Top Level Domain:- </span>
                  {country.tld}
                </p>
                <p>
                  <span>Currencies:- </span>
                  {Object.keys(country.currencies).map(
                    (currElem) => country.currencies[currElem].name
                  )}
                </p>
                <p>
                  <span>Languages:- </span>
                  {Object.keys(country.languages).map(
                    (key) => country.languages[key]
                  )}
                </p>
                <div className="flex justify-end mt-24" onClick={handleClick}>
                  <button className="text-white px-10 py-0.5 bg-gray-400 cursor-pointer border-1 rounded-3xl">
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
