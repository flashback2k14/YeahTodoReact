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
        {/* HEADER ROW */}
        <div className="header-row_1">
          <DisplayDate />
        </div>
        <div className="header-row_2"></div>
        <div className="header-row_3"></div>
        <div className="header-row_4">
          <DisplayTime />
        </div>
        {/* CONTENT ROW */}
        <div className="content-row_1"></div>
        <div className="content-row_2">
          <TodoList>{this._getTodoListItems()}</TodoList>
        </div>
        <div className="content-row_3"></div>
        {/* FOOTER ROW */}
        <div className="footer-row_1">
          <OpenInfo />
        </div>
        <div className="footer-row_2"></div>
        <div className="footer-row_3"></div>
        <div className="footer-row_4">
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
