import { createStore } from "redux";
import { IState, reducer } from "../reducers/index";

const store = createStore<IState, any, any, any>(
  reducer /* preloadedState, */,
  (<any>window).__REDUX_DEVTOOLS_EXTENSION__ &&
    (<any>window).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
