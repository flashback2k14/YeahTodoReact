import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { YeahApp } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <YeahApp />
    </Provider>
  </StrictMode>,
);
