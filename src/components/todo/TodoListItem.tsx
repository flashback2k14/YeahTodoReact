import * as React from "react";
import TodoItem from "../../models/TodoItem";
import "./TodoListItem.css";

interface ITodoItemProps {
  item: TodoItem;
  toggleFn: Function;
}

interface ITodoItemState {
  item: TodoItem;
}

export class TodoListItem extends React.Component<
  ITodoItemProps,
  ITodoItemState
> {
  constructor(props: ITodoItemProps) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  private _handleChecked = (e: any) => {
    // console.log(this.state.item);
    // console.log(e.target.checked);
    // this.setState({
    //   item: new TodoItem(
    //     this.state.item.id,
    //     this.state.item.text,
    //     e.target.checked
    //   )
    // });
    // console.log(e.target.checked);
    // console.log(this.state.item);
    this.props.toggleFn(this.state.item);
  };

  public render() {
    const containerTodoItem = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer"
    };

    const todoItemCompleted = {
      color: "#9e9e9e",
      textDecoration: "line-through"
    };

    const todoItem = {
      fontWeight: "bold"
    };

    const { item } = this.state;

    return (
      <li key={item.id} style={item.isCompleted ? todoItemCompleted : todoItem}>
        <div style={containerTodoItem}>
          {item.text}
          <div className="round">
            <input
              type="checkbox"
              id="checkbox"
              onClick={this._handleChecked}
              defaultChecked={item.isCompleted}
            />
            <label htmlFor="checkbox" />
          </div>
        </div>
      </li>
    );
  }
}
