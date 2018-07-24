import * as React from "react";
import {
  AddNewItem,
  DisplayDate,
  DisplayTime,
  OpenInfo,
  TodoList
} from "./components";
import TodoItem from "./models/TodoItem";
import TodoHelper from "./helper/TodoHelper";

interface IAppState {
  todos: TodoItem[];
}

export default class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: TodoHelper.getTodos()
    };
  }

  private _addTodo = (todo: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: TodoHelper.add(
          prevState.todos,
          todo,
          this.state.todos.length + 1
        )
      };
    });
  };

  private _toggleTodo = (todoToToggle: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: TodoHelper.toggle(prevState.todos, todoToToggle)
      };
    });
  };

  private _deleteTodo = (todoToDelete: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: TodoHelper.delete(prevState.todos, todoToDelete)
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
          <TodoList
            items={this.state.todos}
            toggleFn={this._toggleTodo}
            deleteFn={this._deleteTodo}
          />
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
