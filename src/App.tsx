import * as React from "react";
import { DisplayDate, DisplayTime, OpenInfo, TodoList } from "./components";
import AddNewItemContainer from "./containers/footer/AddNewItemContainer";
import TodoListItemContainer from "./containers/todo/TodoListItemContainer";
import TodoItem from "./models/TodoItem";
import "./global.css";

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
    return (
      <div className="grid-container">
        <div className="grid-item">
          <DisplayDate />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <DisplayTime />
        </div>
        <div className="grid-item" />
        <div className="grid-item grid-item_start grid-col_2s">
          <TodoList>{this._getTodoListItems()}</TodoList>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <OpenInfo />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <AddNewItemContainer />
        </div>
      </div>
    );
  }

  private _getTodoListItems = () => {
    return this.props.parentableTodos.map((parentTodo: TodoItem) => {
      const childTodos = this.props.todos.filter((todo: TodoItem) => {
        return parentTodo.id === todo.parentItemId;
      });
      return childTodos ? (
        <div>
          <TodoListItemContainer key={parentTodo.id} item={parentTodo} />
          <ul>
            {childTodos.map((childTodo: TodoItem) => {
              return (
                <TodoListItemContainer key={childTodo.id} item={childTodo} />
              );
            })}
          </ul>
        </div>
      ) : (
        <TodoListItemContainer key={parentTodo.id} item={parentTodo} />
      );
    });
  };
}
