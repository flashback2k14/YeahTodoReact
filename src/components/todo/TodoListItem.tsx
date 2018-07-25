import * as React from "react";
import TodoItem from "../../models/TodoItem";
import "./TodoListItem.css";

interface ITodoItemProps {
  item: TodoItem;
  editFn: Function;
  toggleFn: Function;
  deleteFn: Function;
}

interface ITodoItemState {
  inEditMode: boolean;
}

export class TodoListItem extends React.Component<
  ITodoItemProps,
  ITodoItemState
> {
  constructor(props: ITodoItemProps) {
    super(props);
    this.state = {
      inEditMode: false
    };
  }

  private _handleEditChange = (e: any) => {
    this.props.editFn(this.props.item, e.target.value);
  };

  private _handleChecked = () => {
    this.props.toggleFn(this.props.item);
  };

  private _handleEditMode = () => {
    this.setState(prevState => {
      return {
        inEditMode: !prevState.inEditMode
      };
    });
  };

  private _handleEditCompleted = (e: any) => {
    if (e.charCode === 13) {
      this._handleEditMode();
    }
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

    const containerTodoItemText = {
      width: "100%"
    };

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
          <div style={containerTodoItemText}>
            {this.state.inEditMode ? (
              <input
                className="todo-input_edit"
                value={this.props.item.text}
                onChange={this._handleEditChange}
                onKeyPress={this._handleEditCompleted}
              />
            ) : (
              this.props.item.text
            )}
          </div>
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
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="black"
              className="edit"
              onClick={this._handleEditMode}
            >
              <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
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
        <hr className="ruler" />
      </li>
    );
  }
}
