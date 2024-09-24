import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./store";
export * from "./hooks";
export * from "./todosSlice";
export * from "./uiSlice";
