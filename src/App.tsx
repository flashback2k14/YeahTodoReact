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
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [new TodoItem(1, "Lorem", false), new TodoItem(2, "Ipsum", true)]
    };
  }

  private _addTodo = (todo: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: prevState.todos.concat([todo.setId(this.state.todos.length + 1)])
      };
    });
  };

  private _toggleTodo = (todoToToggle: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: prevState.todos.map((todo, index) => {
          return todo !== todoToToggle
            ? todo
            : Object.assign({}, todoToToggle, {
                isCompleted: !todoToToggle.isCompleted
              });
        })
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
