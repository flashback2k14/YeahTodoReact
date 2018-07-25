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
  parentableTodos: TodoItem[];
}

export default class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    const tmpTodos = TodoHelper.getTodos();
    this.state = {
      todos: tmpTodos,
      parentableTodos: TodoHelper.getParentableTodos(tmpTodos)
    };
  }

  private _addTodo = (todo: TodoItem) => {
    this.setState((prevState, props) => {
      const tmpTodos = TodoHelper.add(
        prevState.todos,
        todo,
        this.state.todos.length + 1
      );
      return {
        todos: tmpTodos,
        parentableTodos: TodoHelper.getParentableTodos(tmpTodos)
      };
    });
  };

  private _editTodo = (todoToEdit: TodoItem, value: string) => {
    this.setState((prevState, props) => {
      const tmpTodos = TodoHelper.edit(prevState.todos, todoToEdit, value);
      return {
        todos: tmpTodos,
        parentableTodos: tmpTodos
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
      const tmpTodos = TodoHelper.delete(prevState.todos, todoToDelete);
      return {
        todos: tmpTodos,
        parentableTodos: TodoHelper.getParentableTodos(tmpTodos)
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
            editFn={this._editTodo}
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
          <AddNewItem
            addTodoFn={this._addTodo}
            parentableTodos={this.state.parentableTodos}
          />
        </div>
      </div>
    );
  }
}
