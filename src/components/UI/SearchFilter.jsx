export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const setCompare = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };
  return (
    <>
      <div>
        <div className="bg-black text-white flex flex-col lg:flex-row lg:justify-between lg:px-30 gap-2 justify-start font-outfit px-10 py-28 ">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            className="border-2 rounded-xl px-2 w-64"
          />
          <div>
            <button
              className="px-4 cursor-pointer py-0.5 border-1 rounded-2xl"
              onClick={() => setCompare("asc")}
            >
              Asc
            </button>
          </div>
          <div>
            <button
              className="px-4 cursor-pointer py-0.5 border-1 rounded-2xl"
              onClick={() => setCompare("desc")}
            >
              Desc
            </button>
          </div>
          <div>
            <select
              className="text-white bg-black w-36 border-1 px-4 py-1 rounded-2xl "
              value={filter}
              onChange={handleSelectChange}
            >
              <option className="border-none" value="all">
                All
              </option>
              <option className="border-none" value="Africa">
                Africa
              </option>
              <option className="border-none" value="Americas">
                America
              </option>
              <option className="border-none" value="Asia">
                Asia
              </option>
              <option className="border-none" value="Europe">
                Europe
              </option>
              <option className="border-none" value="Oceania">
                Oceania
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
