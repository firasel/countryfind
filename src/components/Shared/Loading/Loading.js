import React from "react";
import loadingImg from "../../../Images/loading.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="w-100 text-center">
      <img className="loadingImg" src={loadingImg} alt="loading Gif img" />
    </div>
  );
};

export default Loading;
