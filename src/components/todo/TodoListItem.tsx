import * as React from "react";
import TodoItem from "../../models/TodoItem";
import "./TodoListItem.css";

interface ITodoItemProps {
  item: TodoItem;
  toggleFn: Function;
  deleteFn: Function;
}

export class TodoListItem extends React.Component<ITodoItemProps, any> {
  private _handleChecked = () => {
    this.props.toggleFn(this.props.item);
  };

  private _handleDeleted = () => {
    this.props.deleteFn(this.props.item);
  };

  public render() {
    const todoItemCompleted = {
      color: "#9e9e9e",
      fontStyle: "italic",
      textDecoration: "line-through"
    } as React.CSSProperties;

    const todoItem = {
      fontWeight: 500
    } as React.CSSProperties;

    const containerTodoItem = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "default"
    } as React.CSSProperties;

    const containerTodoItemButtons = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    } as React.CSSProperties;

    return (
      <li
        key={this.props.item.id}
        style={this.props.item.isCompleted ? todoItemCompleted : todoItem}
      >
        <div style={containerTodoItem}>
          {this.props.item.text}
          <div style={containerTodoItemButtons}>
            <label className="checkbox_label">
              <input
                type="checkbox"
                className="checkbox"
                onClick={this._handleChecked}
                defaultChecked={this.props.item.isCompleted}
              />
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              className="delete"
              onClick={this._handleDeleted}
            >
              <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
            </svg>
          </div>
        </div>
      </li>
    );
  }
}
