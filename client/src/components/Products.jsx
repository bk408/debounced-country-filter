import { useEffect, useState } from "react";
import { countries } from "../utils/Countries";

const Products = () => {
  const [filterData, setFilterData] = useState(countries);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(value);

      const filteredValue = countries.filter((item) =>
        item.countryName.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filteredValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <div className="container">
      <div className="title">
        <h2>Country</h2>
      </div>

      <div className="input-search">
        <input type="text" placeholder="search" onChange={handleChange} />
      </div>
      <div className="box">
        {filterData.map((country) => (
          <div key={country.id}>
            <p>{country.countryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
