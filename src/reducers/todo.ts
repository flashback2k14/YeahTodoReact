import TodoItem from "../models/TodoItem";

const todos = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "TOGGLE_TODO":
      return state.map(
        (todo: TodoItem) =>
          todo.id === action.todo.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
      );
    case "EDIT_TODO":
      return state.map(
        (todo: TodoItem) =>
          todo.id === action.todo.id ? { ...todo, text: action.value } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo: TodoItem) => todo.id !== action.todo.id);

    default:
      return state;
  }
};
export default todos;
