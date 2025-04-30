import { useEffect, useState } from "react";
import { useTransition } from "react";
import { getCountry } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";
export const Country = () => {
  const [isPending, stateTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 12;
  useEffect(() => {
    stateTransition(async () => {
      const res = await getCountry();
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);
  if (isPending) {
    return <Loader />;
  }

  // filter logic

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search);
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountry = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  // Pagination logic

  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const currentCountries = filterCountry.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filterCountry.length / countriesPerPage);

  return (
    <>
      <div>
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />

        {/* Countries Card */}
        <div className="bg-black px-20 space-y-4 text-white lg:grid lg:grid-cols-4 gap-6">
          <>
            {currentCountries.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
          </>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-6 bg-black">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 hover:bg-blue-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
