import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, TodoItem, TodoHelper } from "../shared";
import { RootState } from ".";

const initialState: State = {
  todos: TodoHelper.getTodos(),
  parentableTodos: TodoHelper.getParentableTodos(TodoHelper.getTodos()),
  selectedParentTodoItemId: -1,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      const changedTodos = TodoHelper.add(state.todos, action.payload);

      return {
        ...state,
        todos: changedTodos,
        parentableTodos: TodoHelper.getParentableTodos(changedTodos),
      };
    },
    toggleTodo: (state, action: PayloadAction<TodoItem>) => {
      const changedTodos = TodoHelper.toggle(state.todos, action.payload);

      return {
        ...state,
        todos: changedTodos,
        parentableTodos: TodoHelper.getParentableTodos(changedTodos),
      };
    },
    editTodo: {
      reducer(state, action: PayloadAction<TodoItem, string, { text: string }>) {
        const changedTodos = TodoHelper.edit(state.todos, action.payload, action.meta.text);

        return {
          ...state,
          todos: changedTodos,
          parentableTodos: TodoHelper.getParentableTodos(changedTodos),
        };
      },
      prepare(payload: TodoItem, text: string) {
        return { payload, meta: { text } };
      },
    },
    deleteTodo: (state, action: PayloadAction<TodoItem>) => {
      const changedTodos = TodoHelper.delete(state.todos, action.payload);

      return {
        ...state,
        todos: changedTodos,
        parentableTodos: TodoHelper.getParentableTodos(changedTodos),
      };
    },
    setParentTodoId: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        selectedParentTodoItemId: action.payload,
      };
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo, setParentTodoId } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectParentableTodos = (state: RootState) => state.todos.parentableTodos;
export const selectParentTodoItemId = (state: RootState) => state.todos.selectedParentTodoItemId;

export default todosSlice.reducer;
