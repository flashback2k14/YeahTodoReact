import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";
import store from "./store/index";

// https://bitsofco.de/holy-grail-layout-css-grid/ // GRID LAYOUT
// http://www.griddy.io/                           // GRID LAYOUT
// http://flexbox.help/                            // FLEXBOX LAYOUT

// http://howtocenterincss.com/?utm_content=bufferffecb&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer#contentType=text&content.text.lines=1&horizontal=center&vertical=middle&browser.IE=none
// https://github.com/Lemoncode/react-typescript-samples
// https://egghead.io/lessons/react-stop-memory-leaks-with-componentwillunmount-lifecycle-method-in-react

// https://css-tricks.com/considerations-styling-modal/                         // CSS MODAL
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_bottom   // CSS MODAL

// https://github.com/Nemak121/react-redux-todo-ts/tree/master/src            // REDUX TS
// https://medium.com/@nem121/todo-app-with-typescript-redux-e6a4c2f02079     // REDUX TS

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
