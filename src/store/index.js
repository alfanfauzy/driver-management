import { createStore } from "redux";

const globalState = {
  dataDriver: [],
  windowSize: [],
};

// Reducer
const rootReducer = (state = globalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_DATA_DRIVER":
      return {
        ...state,
        dataDriver: payload,
      };
    case "WINDOW_SIZE":
      return {
        ...state,
        windowSize: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

// Store
const driverRedux = createStore(rootReducer);

export default driverRedux;
