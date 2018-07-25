import TodoItem from "../models/TodoItem";

let nextTodoId = 0;
export const addTodo = (todo: TodoItem) => ({
  type: "ADD_TODO",
  todo,
  id: nextTodoId++
});

export const toggleTodo = (todo: TodoItem) => ({
  type: "TOGGLE_TODO",
  todo
});

export const editTodo = (todo: TodoItem, value: string) => ({
  type: "EDIT_TODO",
  todo,
  value
});

export const deleteTodo = (todo: TodoItem) => ({
  type: "DELETE_TODO",
  todo
});
