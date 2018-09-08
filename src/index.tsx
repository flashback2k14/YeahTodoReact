import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import store from "./store/index";

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
