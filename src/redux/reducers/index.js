import { combineReducers } from "redux";
import counter from "@/redux/reducers/counter";
import { COMPLETE_RESET_REDUCERS } from "../constants/reset";

// ***** All Reducers Call Here *****
const appReducer = combineReducers({
  // ***** Counter *****
  counter,
});

// ***** Root Reducer *****
const rootReducer = (state, action) => {
  if (action.type === COMPLETE_RESET_REDUCERS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
