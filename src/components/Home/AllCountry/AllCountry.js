import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import CountryCard from "../CountryCard/CountryCard";
import "./AllCountry.css";

const AllCountry = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [allCountryData, setAllCountryData] = useState([]);
  const [searchFound, setSearchFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // API call for all country details
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.worldbank.org/v2/country/all?per_page=300&format=json`)
      .then((res) => res.json())
      .then((data) => {
        setAllCountry(data[1]);
        setAllCountryData(data[1]);
        setIsLoading(false);
      })
      .catch(err=>{
        setIsLoading(false)
        alert('Something error please reload the website');
      })
  }, []);

  // Search function for searching handle
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setAllCountryData(allCountry);
      setSearchFound(false);
    } else {
      let searchData = allCountry.filter((data) => {
        return data.name
          .toLowerCase()
          .split(" ")
          .find((word) => word === e.target.value.toLowerCase());
      });
      setAllCountryData(searchData);
      searchData.length === 0 ? setSearchFound(true) : setSearchFound(false);
    }
  };

  return (
    <div className="overflow-hidden countryPrent">
      <div className="container">
        <div>
          <div className="heroTitle">
            <h3>Search Your Country Here</h3>
            <p>See the Country Details</p>
          </div>
          <div className="mb-3 mt-3 mx-auto searchContainer">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country Name"
              aria-describedby="basic-addon2"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-0 m-0 mt-3 mt-md-4">
          {/* Loading show during api call */}
          {isLoading && (
            <div className="col-12 my-5">
              <Loading />
            </div>
          )}

          {/* show message if search data not found */}
          {searchFound && (
            <div className="col-12 notFoundParent">
              <div>
                <h4 className="text-danger text-center">Country Not Found</h4>
                <p className="text-muted mb-5 text-center">
                  Please Type Country Full Name With Correct Spelling
                </p>
              </div>
            </div>
          )}

          {allCountryData.map((data) => (
            <CountryCard key={data.id} countryData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCountry;
