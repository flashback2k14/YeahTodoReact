import * as React from "react";
import {
  AddNewItem,
  DisplayDate,
  DisplayTime,
  OpenInfo,
  TodoList
} from "./components";
import TodoItem from "./models/TodoItem";

interface IAppState {
  todos: TodoItem[];
}

export default class App extends React.Component<any, IAppState> {
  private readonly LOCAL_STORAGE_KEY = "YeahToDo";

  private _getTodos = () => {
    const savedTodosString = window.localStorage.getItem(
      this.LOCAL_STORAGE_KEY
    );
    return savedTodosString
      ? JSON.parse(savedTodosString)
      : [
          new TodoItem(1, "Start learning React", true),
          new TodoItem(2, "Start learning Redux", false)
        ];
  };

  constructor(props: any) {
    super(props);
    this.state = {
      todos: this._getTodos()
    };
  }

  private __add = (todos: TodoItem[], todoToAdd: TodoItem) => {
    const tt = todos.concat([todoToAdd.setId(this.state.todos.length + 1)]);
    window.localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(tt));
    return tt;
  };

  private _addTodo = (todo: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: this.__add(prevState.todos, todo)
      };
    });
  };

  private __toggle = (todos: TodoItem[], todoToToggle: TodoItem) => {
    const tt = todos.map((todo, index) => {
      return todo !== todoToToggle
        ? todo
        : Object.assign({}, todoToToggle, {
            isCompleted: !todoToToggle.isCompleted
          });
    });
    window.localStorage.removeItem(this.LOCAL_STORAGE_KEY);
    window.localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(tt));
    return tt;
  };

  private _toggleTodo = (todoToToggle: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: this.__toggle(prevState.todos, todoToToggle)
      };
    });
  };

  public render() {
    const gridContainer = {
      display: "grid",
      gridTemplateColumns: "104px 1fr 1fr 104px",
      gridTemplateRows: "72px 1fr 48px",
      gridGap: "5px",
      minHeight: "100vh"
    } as React.CSSProperties;

    const gridItem = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "4px"
    } as React.CSSProperties;

    const gridItemStart = {
      alignItems: "flex-start",
      paddingTop: 16
    } as React.CSSProperties;

    const gridColSpan2 = {
      gridColumn: "span 2 / auto"
    } as React.CSSProperties;

    return (
      <div style={gridContainer}>
        <div style={gridItem}>
          <DisplayDate />
        </div>
        <div style={gridItem} />
        <div style={gridItem} />
        <div style={gridItem}>
          <DisplayTime />
        </div>
        <div style={gridItem} />
        <div
          style={{
            ...gridItem,
            ...gridItemStart,
            ...gridColSpan2
          }}
        >
          <TodoList items={this.state.todos} toggleFn={this._toggleTodo} />
        </div>
        <div style={gridItem} />
        <div style={gridItem}>
          <OpenInfo />
        </div>
        <div style={gridItem} />
        <div style={gridItem} />
        <div style={gridItem}>
          <AddNewItem addTodoFn={this._addTodo} />
        </div>
      </div>
    );
  }
}
