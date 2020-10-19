import React from "react";

export const NextArrow = ({ activeIndex, dataDriverLength, goToNext }) => {
  return (
    <div>
      <button
        disabled={activeIndex === 5 || dataDriverLength < 5 ? "disabled" : ""}
        onClick={goToNext}
      >
        Next Page &gt;
      </button>
    </div>
  );
};
