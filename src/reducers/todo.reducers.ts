import TodoItem from "../models/TodoItem";
import { ActionTypes, ActionType } from "../actions/todo.actions";
import TodoHelper from "../helper/TodoHelper";

/**
 * Define our State interface for the current reducer
 */
export interface IState {
  todos: TodoItem[];
  parentableTodos: TodoItem[];
}

/**
 * Define our initialState
 */
export const initialState: IState = {
  todos: TodoHelper.getTodos(),
  parentableTodos: TodoHelper.getParentableTodos(TodoHelper.getTodos())
};

/**
 * Define our Reducer
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer(state: IState = initialState, action: ActionType) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const changedTodos = [...state.todos, action.payload.todo];
      TodoHelper.save(changedTodos);
      return {
        ...state,
        todos: changedTodos,
        parentableTodos: TodoHelper.getParentableTodos(changedTodos)
      };
    }

    case ActionTypes.TOGGLE_TODO: {
      const changedTodos = state.todos.map(
        (todo: TodoItem) =>
          todo.id === action.payload.todo.id
            ? ({ ...todo, isCompleted: !todo.isCompleted } as TodoItem)
            : todo
      );
      TodoHelper.save(changedTodos);
      return {
        ...state,
        todos: changedTodos,
        parentableTodos: TodoHelper.getParentableTodos(changedTodos)
      };
    }

    case ActionTypes.EDIT_TODO: {
      const changedTodos = state.todos.map(
        (todo: TodoItem) =>
          todo.id === action.payload.todo.id
            ? ({ ...todo, text: action.payload.changedValue } as TodoItem)
            : todo
      );
      TodoHelper.save(changedTodos);
      return {
        ...state,
        todos: changedTodos,
        parentableTodos: TodoHelper.getParentableTodos(changedTodos)
      };
    }

    case ActionTypes.DELETE_TODO: {
      const changedTodos = state.todos.filter(
        (todo: TodoItem) => todo.id !== action.payload.todo.id
      );
      TodoHelper.save(changedTodos);
      return {
        ...state,
        todos: changedTodos,
        parentableTodos: TodoHelper.getParentableTodos(changedTodos)
      };
    }

    default:
      return state;
  }
}
