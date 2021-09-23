import React from "react";
import { useHistory } from "react-router";
import "./CountryCard.css";

const CountryCard = ({ countryData }) => {
  let history = useHistory();

  return (
    <div className="col mb-5">
      <div className="countryCard card">
        <div className="card-body">
          <h4>{countryData.name}</h4>
          {countryData.capitalCity !== "" && (
            <p>
              Capital City: <span>{countryData.capitalCity}</span>
            </p>
          )}
        </div>
        <div className="card-footer">
          <button
            className="btn"
            onClick={() => history.push(`/${countryData.iso2Code}`)}
          >
            See All Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
