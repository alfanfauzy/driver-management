import React, { useEffect, useState } from "react";
import { Driver } from "../Driver/Driver";
import { NavWebsite } from "../Navbar/NavWebsite";
import "./Main.css";

import { User } from "../../Data/User";

// Redux
import { addDataDriver, windowSize } from "../../store/action/dataDriver";
import { useDispatch } from "react-redux";

export const Main = () => {
  //Initial for redux
  const dispatch = useDispatch();

  const search = async (searchDriver) => {
    const dataUser = User;

    if (dataUser.length !== 0) {
      if (searchDriver === undefined || searchDriver === "") {
        dispatch(addDataDriver(dataUser));
      } else {
        const dataBySearch = dataUser.filter((driver) => {
          return driver.name.first === searchDriver;
        });
        dispatch(addDataDriver(dataBySearch));
      }
    }
  };

  const size = useWindowSize();
  dispatch(windowSize(size));

  useEffect(() => {
    search();
  });

  return (
    <div className="main">
      <NavWebsite />
      <Driver searchDriver={search} />
    </div>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
