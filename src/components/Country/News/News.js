import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import NewsCard from "../NewsCard/NewsCard";
import "./News.css";
require('dotenv').config();

const News = ({ countryCode }) => {
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  // API call for news data only one country
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data.articles);
        setIsLoading(false);
      });
  }, [countryCode,apiKey]);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-0 m-0 mt-3 mt-md-4">
      {/* Show the loading on API calls */}
      {isLoading && (
        <div className="col-12">
          <Loading />
        </div>
      )}

      {/* The News will show if found news data after API calling */}
      {allNews?.length !== 0 &&
        allNews?.map((data, index) => <NewsCard key={index} newsData={data} />)}

      {/* It will show if no news is received after the API call */}
      {allNews?.length === 0 && !isLoading && (
        <div className="col-12">
          <h4 className="mb-5 text-center text-danger errMsg">
            No news found in This Country
          </h4>
        </div>
      )}
    </div>
  );
};

export default News;
