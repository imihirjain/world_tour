import countryFacts from "../api/countryData.json";
export const About = () => {
  return (
    <>
      <div className="flex flex-col p-10 bg-black text-white justify-center items-center font-outfit">
        <div>
          <h2 className="text-3xl font-semibold mt-20">
            Here are the Interesting Facts <br />
            We're proud of
          </h2>
        </div>
        {/* card */}
        <div className="mt-8 flex lg:grid lg:grid-cols-3 gap-6 px-20 justify-center items-center flex-wrap ">
          {countryFacts.map((country) => {
            const { id, countryName, capital, population, interestingFact } =
              country;
            return (
              <div
                className="border-[1px] border-[#1a171c] text-white rounded-3xl px-5 py-8 w-80 shadow-lg"
                key={id}
                style={{
                  background:
                    "linear-gradient(71deg, #080509, #1a171c, #080509)",
                }}
              >
                <h2 className="text-2xl font-semibold mb-2">{countryName}</h2>
                <p className="text-sm text-gray-400 mb-1">
                  <span className="text-white font-medium">Capital:</span>{" "}
                  {capital}
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  <span className="text-white font-medium">Population:</span>{" "}
                  {population}
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  <span className="text-white font-medium">
                    Interesting fact :
                  </span>
                  {interestingFact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
