import TodoItem from "../models/TodoItem";

/**
 * Define every action name constant here
 */
export enum ActionTypes {
  ADD_TODO = "[todos] ADD_TODO",
  TOGGLE_TODO = "[todos] TOGGLE_TODO",
  EDIT_TODO = "[todos] EDIT_TODO",
  DELETE_TODO = "[todos] DELETE_TODO"
}

/**
 * Define return types of our actions
 * Every action returns a type and a payload
 */
export interface IAddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: TodoItem };
}
export interface IToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { todo: TodoItem };
}
export interface IEditTodoAction {
  type: ActionTypes.EDIT_TODO;
  payload: {
    todo: TodoItem;
    changedValue: string;
  };
}
export interface IDeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: { todo: TodoItem };
}

/**
 * Define our actions creators
 */
export function addTodo(todoToAdd: TodoItem): IAddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: todoToAdd
    }
  };
}

export function toggleTodo(todoToToggle: TodoItem): IToggleTodoAction {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: { todo: todoToToggle }
  };
}

export function editTodo(todoToEdit: TodoItem, text: string): IEditTodoAction {
  return {
    type: ActionTypes.EDIT_TODO,
    payload: { todo: todoToEdit, changedValue: text }
  };
}

export function deleteTodo(todoToDelete: TodoItem): IDeleteTodoAction {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: { todo: todoToDelete }
  };
}

/**
 * Define the Action type
 */
export type ActionType =
  | IAddTodoAction
  | IToggleTodoAction
  | IEditTodoAction
  | IDeleteTodoAction;
