import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { Search } from "../Search/Search";
import "./Driver.css";

export const Driver = (props) => {
  return (
    <div className="main-content">
      <Search searchDriver={props.searchDriver} />
      <div className="result-search">
        <Carousel />
      </div>
    </div>
  );
};
