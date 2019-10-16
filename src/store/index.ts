import { createStore } from "redux";
import { IState, reducer } from "../reducers/index";

const store = createStore<IState, any, any, any>(
  reducer /* preloadedState, */,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
