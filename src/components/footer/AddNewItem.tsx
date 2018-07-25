import * as React from "react";
import TodoItem from "../../models/TodoItem";
import "./AddNewItem.css";

interface IAddNewItemProps {
  addTodoFn: Function;
  parentableTodos: TodoItem[];
}

interface IAddNewItemState {
  showContainerInput: boolean;
  itemText: string;
  selectParentTodoItemId: number;
}

export class AddNewItem extends React.Component<
  IAddNewItemProps,
  IAddNewItemState
> {
  private _txtTodo: any;

  constructor(props: IAddNewItemProps) {
    super(props);
    this.state = {
      showContainerInput: false,
      itemText: "",
      selectParentTodoItemId: -1
    };
  }

  private _handleOnChange = (event: any) => {
    this.setState({ itemText: event.target.value });
  };

  private _handleAddClick = () => {
    if (!this.state.itemText) {
      return;
    }

    console.log(this.state.selectParentTodoItemId);

    this.props.addTodoFn(
      new TodoItem(
        -1,
        this.state.itemText,
        false,
        this.state.selectParentTodoItemId
      )
    );
    this.setState({ itemText: "" }, () => this._txtTodo.focus());
  };

  private _handleAddCompleted = (e: any) => {
    if (e.charCode === 13) {
      this._handleAddClick();
    }
  };

  private _handleChipSelection = (e: any, todo: TodoItem) => {
    if (this.state.selectParentTodoItemId === todo.id) {
      this.setState({
        selectParentTodoItemId: -1
      });
      e.target.classList.toggle("chips_selected");
      return;
    }

    if (this.state.selectParentTodoItemId !== -1) {
      return;
    }

    this.setState({
      selectParentTodoItemId: todo.id
    });
    e.target.classList.toggle("chips_selected");
  };

  private _handleFabClick = () => {
    this.setState((prevState, props) => {
      return { showContainerInput: !prevState.showContainerInput };
    });
    this._txtTodo.focus();
  };

  public render() {
    return (
      <div className="container container_mod">
        <div
          className={
            this.state.showContainerInput
              ? "container-input container-input_show"
              : "container-input container-input_hide"
          }
        >
          <div className="ttt">
            <div className="container-input_add">
              <input
                className="todo-input"
                type="text"
                required
                ref={ref => (this._txtTodo = ref)}
                placeholder="Enter todo..."
                onChange={this._handleOnChange}
                value={this.state.itemText}
                onKeyPress={this._handleAddCompleted}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                className="todo-button_add"
                onClick={this._handleAddClick}
              >
                <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
              </svg>
            </div>
            <div className="container-chips">
              {this.props.parentableTodos.map(todo => (
                <div
                  key={todo.id}
                  className="chips"
                  onClick={(e: any) => this._handleChipSelection(e, todo)}
                >
                  {todo.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container-fab" onClick={this._handleFabClick}>
          <div className="fab">
            <div className="fab_icon">
              {this.state.showContainerInput ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <fieldset>
//   <div>
//     <input type="radio" name={todo.text} />
//     <label htmlFor={todo.text}>{todo.text}</label>
//   </div>
// </fieldset>
