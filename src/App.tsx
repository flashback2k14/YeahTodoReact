import * as React from "react";
import {
  AddNewItem,
  DisplayDate,
  DisplayTime,
  OpenSettings,
  TodoList
} from "./components";
import TodoItem from "./models/TodoItem";

export default class App extends React.Component {
  private _isDevMode = false;
  private _hideNotReady = true;

  private _gridContainer = {
    display: "grid",
    gridTemplateColumns: "104px 1fr 1fr 104px",
    gridTemplateRows: "72px 1fr 48px",
    gridGap: "5px",
    minHeight: "100vh"
  };
  private _gridItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: this._isDevMode ? "lightblue" : "#EEEEEE",
    borderRadius: "4px"
  };
  private _gridItemStart = {
    alignItems: "start",
    paddingTop: 16
  };
  private _gridColSpan2 = {
    gridColumn: "span 2 / auto"
  };

  public render() {
    const setEmptySpaceText = () => (this._isDevMode ? "Empty Space" : "");

    const todos = [
      new TodoItem(1, "Lorem", false),
      new TodoItem(2, "Ipsum", true)
    ];

    return (
      <div style={this._gridContainer}>
        <div style={this._gridItem}>
          <DisplayDate />
        </div>
        <div style={this._gridItem}>{setEmptySpaceText()}</div>
        <div style={this._gridItem}>{setEmptySpaceText()}</div>
        <div style={this._gridItem}>
          <DisplayTime />
        </div>
        <div style={this._gridItem}>{setEmptySpaceText()}</div>
        <div
          style={{
            ...this._gridItem,
            ...this._gridItemStart,
            ...this._gridColSpan2
          }}
        >
          <TodoList items={todos} />
        </div>
        <div style={this._gridItem}>{setEmptySpaceText()}</div>
        <div style={this._gridItem}>
          {this._hideNotReady ? "" : <OpenSettings />}
        </div>
        <div style={this._gridItem}>{setEmptySpaceText()}</div>
        <div style={this._gridItem}>{setEmptySpaceText()}</div>
        <div style={this._gridItem}>
          <AddNewItem />
        </div>
      </div>
    );
  }
}
