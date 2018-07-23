import * as React from "react";
import TodoItem from "../../models/TodoItem";
import "./TodoListItem.css";

interface ITodoItemProps {
  item: TodoItem;
  toggleFn: Function;
}

export class TodoListItem extends React.Component<ITodoItemProps, any> {
  private _handleChecked = (e: any) => {
    this.props.toggleFn(this.props.item);
  };

  public render() {
    const containerTodoItem = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "default"
    } as React.CSSProperties;

    const todoItemCompleted = {
      color: "#9e9e9e",
      textDecoration: "line-through"
    } as React.CSSProperties;

    const todoItem = {
      fontWeight: "bold"
    } as React.CSSProperties;

    return (
      <li
        key={this.props.item.id}
        style={this.props.item.isCompleted ? todoItemCompleted : todoItem}
      >
        <div style={containerTodoItem}>
          {this.props.item.text}
          <label className="checkbox_label">
            <input
              type="checkbox"
              className="checkbox"
              onClick={this._handleChecked}
              defaultChecked={this.props.item.isCompleted}
            />
          </label>
        </div>
      </li>
    );
  }
}
