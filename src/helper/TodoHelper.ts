import TodoItem from "../models/TodoItem";

export default class TodoHelper {
  private static readonly LOCAL_STORAGE_KEY = "YeahToDo";

  public static getTodos = (): TodoItem[] => {
    const savedTodosString = window.localStorage.getItem(
      TodoHelper.LOCAL_STORAGE_KEY
    );
    return savedTodosString ? (JSON.parse(savedTodosString) as TodoItem[]) : [];
  };

  public static getParentableTodos = (todos: TodoItem[]): TodoItem[] => {
    return todos.filter((todo: TodoItem) => todo.parentItemId === -1);
  };

  public static add = (todos: TodoItem[], todoToAdd: TodoItem): TodoItem[] => {
    const changedTodos = [
      ...todos,
      todoToAdd.setId(TodoHelper._getNextId(todos))
    ];
    TodoHelper._save(changedTodos);
    return changedTodos;
  };

  public static toggle = (
    todos: TodoItem[],
    todoToToggle: TodoItem
  ): TodoItem[] => {
    const changedTodos = todos
      .map(
        (todo: TodoItem) =>
          todo.id === todoToToggle.id
            ? ({ ...todo, isCompleted: !todo.isCompleted } as TodoItem)
            : todo
      )
      .map(
        (todo: TodoItem) =>
          todo.parentItemId === todoToToggle.id
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
  ): TodoItem[] => {
    const changedTodos = todos.map(
      (todo: TodoItem) =>
        todo.id === todoToEdit.id
          ? ({ ...todo, text: value } as TodoItem)
          : todo
    );
    TodoHelper._save(changedTodos);
    return changedTodos;
  };

  public static delete = (
    todos: TodoItem[],
    todoToDelete: TodoItem
  ): TodoItem[] => {
    const changedTodos = todos
      .filter((todo: TodoItem) => todo.id !== todoToDelete.id)
      .filter((todo: TodoItem) => todo.parentItemId !== todoToDelete.id);
    TodoHelper._save(changedTodos);
    return changedTodos;
  };

  private static _getNextId = (todos: TodoItem[]): number => {
    return todos.length > 0
      ? Math.max(...todos.map((todo: TodoItem) => todo.id)) + 1
      : 1;
  };

  private static _save = (todos: TodoItem[]): void => {
    window.localStorage.removeItem(TodoHelper.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(
      TodoHelper.LOCAL_STORAGE_KEY,
      JSON.stringify(todos)
    );
  };
}
