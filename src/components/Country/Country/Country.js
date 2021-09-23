import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import News from "../News/News";
import "./Country.css";

const Country = () => {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState({});
  const [newsShow, setNewsShow] = useState(false);

  // API call for single country details
  useEffect(() => {
    fetch(`https://api.worldbank.org/v2/country/${countryCode}?format=json`)
      .then((res) => res.json())
      .then((data) => setCountryData(data[1][0]));
  }, [countryCode]);

  return (
    <div>
      {countryData?.iso2Code !== "" && (
        <div className="container countryFlag mt-4">
          <img
            className="w-100"
            src={`https://flagcdn.com/256x192/${countryData.iso2Code?.toLowerCase()}.png`}
            alt="country flag"
          />
        </div>
      )}
      <h2 className="text-center mt-3">{countryData?.name}</h2>
      {countryData?.region?.value !== "" && (
        <p className="text-center mb-0 countryDetail">
          <span>Country Region: </span>
          {countryData?.region?.value}
        </p>
      )}
      {countryData?.incomeLevel?.value !== "" && (
        <p className="text-center countryDetail">
          <span>Income Level: </span>
          {countryData?.incomeLevel?.value}
        </p>
      )}

      {/* Country About and country News start */}
      <div>
        <div className="countryMenu">
          <button className={`${!newsShow && 'countryMenuActive'}`} onClick={() => setNewsShow(false)}>Country About</button>
          <button className={`${newsShow && 'countryMenuActive'}`} onClick={() => setNewsShow(true)}>News</button>
        </div>
        {!newsShow ? (
          <div className="container pb-4">
            <h5 className="text-center fw-bold mb-3">About This Country</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              unde nulla delectus neque ea minus incidunt ratione debitis atque
              fugiat, nam illum excepturi tenetur adipisci consequuntur
              consequatur, nostrum quo impedit at quam optio nemo eos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              vel quae illum iusto, placeat unde aut magni voluptatem nostrum
              beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur perferendis quidem, alias itaque placeat ad dolorem
              iusto laboriosam earum, impedit sapiente! Voluptates dolorum
              assumenda adipisci error esse quis aut eligendi?
            </p>
          </div>
        ) : (
          <div className="container">
            <h5 className="text-center fw-bold mb-3">News Of This Country</h5>
            <News countryCode={countryCode} />
          </div>
        )}
      </div>
      {/* Country About and country News end */}
    </div>
  );
};

export default Country;
