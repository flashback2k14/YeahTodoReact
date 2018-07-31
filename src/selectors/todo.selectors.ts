import { IState } from "../reducers/index";
import { createSelector } from "reselect";

const getTodosState = (state: IState) => state.todos;

export const getTodos = createSelector([getTodosState], s => s.todos);

export const getParentableTodos = createSelector(
  [getTodosState],
  s => s.parentableTodos
);
