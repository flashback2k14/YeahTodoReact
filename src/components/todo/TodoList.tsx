import * as React from "react";
import { TodoListItem } from "./TodoListItem";
import TodoItem from "../../models/TodoItem";

interface ITodoListProps {
  items: Array<TodoItem>;
  toggleFn: Function;
}

export class TodoList extends React.Component<ITodoListProps, any> {
  constructor(props: ITodoListProps) {
    super(props);
  }

  public render() {
    const container = {
      width: "80%",
      minHeight: "20%",
      padding: "8px 20px 0 8px",
      borderRadius: "8px",
      boxShadow:
        "0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px - 7px rgba(0, 0, 0, 0.2)",
      background: "white",
      position: "relative"
    };

    const headline = {
      width: 72,
      color: "white",
      background: "black",
      padding: 4,
      borderRadius: 6,
      textAlign: "center",
      position: "absolute",
      top: -12,
      left: 24
    };

    const todoList = {
      listStyleType: "none",
      paddingLeft: 14,
      lineHeight: "1.4",
      fontSize: "1.1em"
    };

    return (
      <div style={container}>
        <div style={headline}>To Do</div>
        <ul style={todoList}>
          {this.props.items.map((item: TodoItem) => {
            return <TodoListItem item={item} toggleFn={this.props.toggleFn} />;
          })}
        </ul>
      </div>
    );
  }
}
