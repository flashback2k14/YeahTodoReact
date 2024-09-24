import { configureStore } from "@reduxjs/toolkit";
import logger from "./logger";
import todosSlice from "./todosSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    ui: uiSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});
