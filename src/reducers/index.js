import { combineReducers } from "redux";
const steps = (state = 0, action) => {
  if (action.type === "SET_STEPS") {
    return action.value;
  }
  return state;
};

export default combineReducers({
  steps
});
