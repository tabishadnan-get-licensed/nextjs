// ***** Actions For Counter *****
import * as COUNTER_TYPE from "@/redux/constants/counter";

// ***** onIncrementAction *****
const onIncrementAction = () => async (dispatch) => {
  dispatch({
    type: COUNTER_TYPE.INCREMENT,
  });
};

// ***** onDecrementAction *****
const onDecrementAction = () => async (dispatch) => {
  dispatch({
    type: COUNTER_TYPE.DECREMENT,
  });
};

// ***** onIncrementFiveAction *****
const onIncrementFiveAction = () => async (dispatch) => {
  dispatch({
    type: COUNTER_TYPE.INCREMENT_FIVE,
  });
};

// ***** onDecrementFiveAction *****
const onDecrementFiveAction = () => async (dispatch) => {
  dispatch({
    type: COUNTER_TYPE.DECREMENT_FIVE,
  });
};

export {
  onIncrementAction,
  onDecrementAction,
  onIncrementFiveAction,
  onDecrementFiveAction,
};
