import React, { useState } from "react";
import { DataDriver } from "../Driver/DataDriver";

import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";

// Redux
import { useSelector } from "react-redux";

import "./Carousel.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataLength] = useState(6);

  const [offset, setOffset] = useState(0);
  const [perPage, setperPage] = useState(5);

  //Initial for redux
  const dataDriver = useSelector((state) => state.dataDriver);

  const dataDriverLength = dataDriver.length;

  const goToPrevious = () => {
    let index = activeIndex;
    let length = dataLength;

    if (index < 1) {
      index = length - 1;
    } else {
      index--;
      setOffset(offset - 5);
      setperPage(perPage - 5);
    }

    setActiveIndex(index);
  };

  const goToNext = () => {
    let index = activeIndex;
    let length = dataLength;

    if (index === length - 1) {
      index = 0;
    } else {
      index++;
      setOffset(offset + 5);
      setperPage(perPage + 5);
    }

    setActiveIndex(index);
  };

  return (
    <>
      <DataDriver offset={offset} perPage={perPage} />
      <div className="arrow">
        <PreviousArrow
          activeIndex={activeIndex}
          goToPrevious={goToPrevious}
          dataDriverLength={dataDriverLength}
        />
        <NextArrow
          activeIndex={activeIndex}
          goToNext={goToNext}
          dataDriverLength={dataDriverLength}
        />
      </div>
    </>
  );
};
