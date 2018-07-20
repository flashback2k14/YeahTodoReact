import * as React from "react";
import TodoItem from "../../models/TodoItem";
import "./TodoListItem.css";

interface ITodoItemProps {
  item: TodoItem;
}

export class TodoListItem extends React.Component<ITodoItemProps, any> {
  constructor(props: ITodoItemProps) {
    super(props);
  }

  public render() {
    const containerTodoItem = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    };

    const todoItemCompleted = {
      color: "#9e9e9e",
      textDecoration: "line-through"
    };

    const todoItem = {};

    const { item } = this.props;

    return (
      <div style={containerTodoItem}>
        <li
          key={item.id}
          style={item.isCompleted ? todoItemCompleted : todoItem}
        >
          {item.text}
        </li>
        <div className="round">
          <input type="checkbox" id="checkbox" checked={item.isCompleted} />
          <label htmlFor="checkbox" />
        </div>
      </div>
    );
  }
}
