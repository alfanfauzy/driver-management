import React from "react";

export const Arrow = () => {
  const goToPrevious = () => {
    let index = activeIndex;
    let length = dataLength;
    console.log(index);
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
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
    }

    setActiveIndex(index);
  };
  return (
    <>
      <div className="arrow">
        <PreviousArrow activeIndex={activeIndex} goToPrevious={goToPrevious} />
        <NextArrow activeIndex={activeIndex} goToNext={goToNext} />
      </div>
    </>
  );
};
