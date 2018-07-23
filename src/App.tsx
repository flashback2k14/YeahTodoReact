import * as React from "react";
import {
  AddNewItem,
  DisplayDate,
  DisplayTime,
  OpenSettings,
  TodoList
} from "./components";
import TodoItem from "./models/TodoItem";

interface IAppState {
  todos: Array<TodoItem>;
}

export default class App extends React.Component<any, IAppState> {
  private _isDevMode = false;
  private _hideNotReady = true;

  constructor(props: any) {
    super(props);
    this.state = {
      todos: [new TodoItem(1, "Lorem", false), new TodoItem(2, "Ipsum", true)]
    };
  }

  private _setId = (todo: TodoItem) => {
    todo.id = this.state.todos.length + 1;
    return todo;
  };

  addTodo = (todo: TodoItem) => {
    this.setState((prevState, props) => {
      return {
        todos: prevState.todos.concat([this._setId(todo)])
      };
    });
  };

  private _toggle = (todo: TodoItem) => {
    console.log("_toggle - before: " + JSON.stringify(todo));
    const t = Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    console.log("_toggle - after : " + JSON.stringify(t));
    return t;
  };

  toggleTodo = (todoToToggle: TodoItem) => {
    // console.log("toggleTodo - before: " + JSON.stringify(todoToToggle));
    this.setState((prevState, props) => {
      console.log(prevState);
      return {
        todos: prevState.todos.map((todo, index) => {
          console.log(index + " map todos: " + JSON.stringify(todo));
          return todo !== todoToToggle ? todo : this._toggle(todoToToggle);
        })
      };
    });
    // console.log("toggleTodo - after: " + JSON.stringify(todoToToggle));
  };

  public render() {
    const setEmptySpaceText = () => (this._isDevMode ? "Empty Space" : "");

    const gridContainer = {
      display: "grid",
      gridTemplateColumns: "104px 1fr 1fr 104px",
      gridTemplateRows: "72px 1fr 48px",
      gridGap: "5px",
      minHeight: "100vh"
    };
    const gridItem = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: this._isDevMode ? "lightblue" : "#EEEEEE",
      borderRadius: "4px"
    };
    const gridItemStart = {
      alignItems: "start",
      paddingTop: 16
    };
    const gridColSpan2 = {
      gridColumn: "span 2 / auto"
    };

    return (
      <div style={gridContainer}>
        <div style={gridItem}>
          <DisplayDate />
        </div>
        <div style={gridItem}>{setEmptySpaceText()}</div>
        <div style={gridItem}>{setEmptySpaceText()}</div>
        <div style={gridItem}>
          <DisplayTime />
        </div>
        <div style={gridItem}>{setEmptySpaceText()}</div>
        <div
          style={{
            ...gridItem,
            ...gridItemStart,
            ...gridColSpan2
          }}
        >
          <TodoList items={this.state.todos} toggleFn={this.toggleTodo} />
        </div>
        <div style={gridItem}>{setEmptySpaceText()}</div>
        <div style={gridItem}>{this._hideNotReady ? "" : <OpenSettings />}</div>
        <div style={gridItem}>{setEmptySpaceText()}</div>
        <div style={gridItem}>{setEmptySpaceText()}</div>
        <div style={gridItem}>
          <AddNewItem addTodoFn={this.addTodo} />
        </div>
      </div>
    );
  }
}
