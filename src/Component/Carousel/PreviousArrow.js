import React from "react";

export const PreviousArrow = ({
  activeIndex,
  dataDriverLength,
  goToPrevious,
}) => {
  return (
    <div>
      <button
        disabled={activeIndex === 0 || dataDriverLength < 5 ? "disabled" : ""}
        onClick={goToPrevious}
      >
        &lt; Previous Page
      </button>
    </div>
  );
};
