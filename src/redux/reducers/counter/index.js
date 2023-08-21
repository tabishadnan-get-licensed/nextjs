"use client";

// ***** Counter Reducer *****

import * as COUNTER_TYPE from "@/redux/constants/counter";

const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_TYPE.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case COUNTER_TYPE.DECREMENT:
      return {
        counter: state.counter - 1,
      };
    case COUNTER_TYPE.INCREMENT_FIVE:
      return {
        counter: state.counter + 5,
      };
    case COUNTER_TYPE.DECREMENT_FIVE:
      return {
        counter: state.counter - 5,
      };
    default:
      return state;
  }
};

export default counter;
