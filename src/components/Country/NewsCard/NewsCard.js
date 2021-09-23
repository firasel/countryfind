import React from "react";
import rightArrow from "../../../Images/rightArrow.svg";
import "./NewsCard.css";

const NewsCard = ({ newsData }) => {
  return (
    <div className="col mb-5">
      <div className="newsCard card">
        <img
          src={newsData?.urlToImage}
          className="card-img-top"
          alt="news Img"
        />
        <div className="card-body">
          <h5>{newsData?.title.slice(0, 80)}...</h5>
        </div>
        <div className="card-foote newsCardBtn">
          <button className="btn">
            <a target="blank" href={newsData?.url}>
              <span>See More</span>
              <img src={rightArrow} alt="Arrow Img" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
