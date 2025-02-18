import { createStore } from "redux";
import Reducer from "./reducer";

const store = createStore(Reducer);

store.subscribe(() => {
  console.log("State: ", store.getState());
});

const originalDispatch = store.dispatch;
store.dispatch = (action) => {
  console.log("Dispatched action:", action);
  return originalDispatch(action);
};

export default store;
