import TodoItem from "../models/TodoItem";

export default class TodoHelper {
  private static readonly LOCAL_STORAGE_KEY = "YeahToDo";

  public static getTodos = () => {
    const savedTodosString = window.localStorage.getItem(
      TodoHelper.LOCAL_STORAGE_KEY
    );
    return savedTodosString
      ? JSON.parse(savedTodosString)
      : [
          new TodoItem(1, "Start learning React", true, -1),
          new TodoItem(3, "State", true, 1),
          new TodoItem(4, "Props", true, 1),
          new TodoItem(2, "Start learning Redux", false, -1),
          new TodoItem(5, "Actions", false, 2),
          new TodoItem(6, "Reducer", false, 2)
        ];
  };

  public static add = (todos: TodoItem[], todoToAdd: TodoItem, id: number) => {
    const tt = todos.concat([todoToAdd.setId(id)]);
    window.localStorage.removeItem(TodoHelper.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(
      TodoHelper.LOCAL_STORAGE_KEY,
      JSON.stringify(tt)
    );
    return tt;
  };

  public static toggle = (todos: TodoItem[], todoToToggle: TodoItem) => {
    const tt = todos.map(todo => {
      return todo !== todoToToggle
        ? todo
        : Object.assign({}, todoToToggle, {
            isCompleted: !todoToToggle.isCompleted
          });
    });
    window.localStorage.removeItem(TodoHelper.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(
      TodoHelper.LOCAL_STORAGE_KEY,
      JSON.stringify(tt)
    );
    return tt;
  };

  public static edit = (
    todos: TodoItem[],
    todoToEdit: TodoItem,
    value: string
  ) => {
    const tt = todos.map(todo => {
      return todo !== todoToEdit
        ? todo
        : Object.assign({}, todoToEdit, {
            text: value
          });
    });
    window.localStorage.removeItem(TodoHelper.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(
      TodoHelper.LOCAL_STORAGE_KEY,
      JSON.stringify(tt)
    );
    return tt;
  };

  public static delete = (todos: TodoItem[], todoToDelete: TodoItem) => {
    const tt = todos.filter(todo => todo.id !== todoToDelete.id);
    window.localStorage.removeItem(TodoHelper.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(
      TodoHelper.LOCAL_STORAGE_KEY,
      JSON.stringify(tt)
    );
    return tt;
  };
}
