import * as React from "react";
import { DisplayDate, DisplayTime, OpenInfo, TodoList } from "./components";

import TodoListItemContainer from "./containers/todo/TodoListItemContainer";
import AddNewItemContainer from "./containers/footer/AddNewItemContainer";

import TodoItem from "./models/TodoItem";

interface IAppProps {
  todos: TodoItem[];
  parentableTodos: TodoItem[];
  addTodoFn: Function;
  editFn: Function;
  toggleFn: Function;
  deleteFn: Function;
}

export default class App extends React.Component<IAppProps> {
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
          <TodoList>
            {this.props.todos.map((item: TodoItem) => {
              return item.parentItemId === -1 ? (
                <TodoListItemContainer
                  item={item}
                  toggleFn={this.props.toggleFn}
                  editFn={this.props.editFn}
                  deleteFn={this.props.deleteFn}
                />
              ) : (
                <ul>
                  <TodoListItemContainer
                    item={item}
                    toggleFn={this.props.toggleFn}
                    editFn={this.props.editFn}
                    deleteFn={this.props.deleteFn}
                  />
                </ul>
              );
            })}
          </TodoList>
        </div>
        <div style={gridItem} />
        <div style={gridItem}>
          <OpenInfo />
        </div>
        <div style={gridItem} />
        <div style={gridItem} />
        <div style={gridItem}>
          <AddNewItemContainer
            addTodoFn={this.props.addTodoFn}
            parentableTodos={this.props.parentableTodos}
          />
        </div>
      </div>
    );
  }
}
