import * as React from "react";
import TodoItem from "../../models/TodoItem";
import "./AddNewItem.css";

interface IAddNewItemProps {
  addTodoFn: Function;
}

interface IAddNewItemState {
  showContainerInput: boolean;
  itemText: string;
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
      itemText: ""
    };
  }

  private _handleOnChange = (event: any) => {
    this.setState({ itemText: event.target.value });
  };

  private _handleAddClick = () => {
    if (!this.state.itemText) {
      return;
    }
    this.props.addTodoFn(new TodoItem(-1, this.state.itemText, false));
    this.setState({ itemText: "" }, () => this._txtTodo.focus());
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
          <div className="container-input_add">
            <input
              className="todo-input"
              type="text"
              ref={ref => (this._txtTodo = ref)}
              placeholder="Enter todo..."
              onChange={this._handleOnChange}
              value={this.state.itemText}
            />
            <button className="todo-button_add" onClick={this._handleAddClick}>
              add
            </button>
          </div>
        </div>
        <div className="container-fab">
          <div className="fab" onClick={this._handleFabClick}>
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