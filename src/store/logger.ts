const logger =
  (store: { getState: () => object }) =>
  (next: (a: unknown) => object) =>
  (action: { type: unknown }) => {
    console.group(action.type);
    console.info("dispatching", action);

    const result = next(action);

    console.log("next state", store.getState());
    console.groupEnd();

    return result;
  };

export default logger;
