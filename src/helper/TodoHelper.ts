import TodoItem from "../models/TodoItem";

export default class TodoHelper {
  private static readonly LOCAL_STORAGE_KEY = "YeahToDo";

  private static _save = (todos: TodoItem[]): void => {
    window.localStorage.removeItem(TodoHelper.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(
      TodoHelper.LOCAL_STORAGE_KEY,
      JSON.stringify(todos)
    );
  };

  public static getTodos = (): TodoItem[] => {
    const savedTodosString = window.localStorage.getItem(
      TodoHelper.LOCAL_STORAGE_KEY
    );
    return savedTodosString ? (JSON.parse(savedTodosString) as TodoItem[]) : [];
  };

  public static getParentableTodos = (todos: TodoItem[]): TodoItem[] => {
    return todos.filter(todo => todo.parentItemId === -1);
  };

  public static add = (todos: TodoItem[], todoToAdd: TodoItem) => {
    const changedTodos = [...todos, todoToAdd];
    TodoHelper._save(changedTodos);
    return changedTodos;
  };

  public static toggle = (todos: TodoItem[], todoToToggle: TodoItem) => {
    const changedTodos = todos.map(
      (todo: TodoItem) =>
        todo.id === todoToToggle.id
          ? ({ ...todo, isCompleted: !todo.isCompleted } as TodoItem)
          : todo
    );
    TodoHelper._save(changedTodos);
    return changedTodos;
  };

  public static edit = (
    todos: TodoItem[],
    todoToEdit: TodoItem,
    value: string
  ) => {
    const changedTodos = todos.map(
      (todo: TodoItem) =>
        todo.id === todoToEdit.id
          ? ({ ...todo, text: value } as TodoItem)
          : todo
    );
    TodoHelper._save(changedTodos);
    return changedTodos;
  };

  public static delete = (todos: TodoItem[], todoToDelete: TodoItem) => {
    const changedTodos = todos.filter(todo => todo.id !== todoToDelete.id);
    TodoHelper._save(changedTodos);
    return changedTodos;
  };
}
