import { createStore, applyMiddleware } from "redux";
import { IState, reducer } from "../reducers/index";

const store = createStore<IState, any, any, any>(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
