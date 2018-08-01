import * as React from "react";
import { DisplayDate, DisplayTime, OpenInfo, TodoList } from "./components";
import AddNewItemContainer from "./containers/footer/AddNewItemContainer";
import TodoListItemContainer from "./containers/todo/TodoListItemContainer";
import TodoItem from "./models/TodoItem";
import AppStyles from "./App.styles";

interface IAppProps {
  todos: TodoItem[];
  parentableTodos: TodoItem[];
  addTodoFn: Function;
  editFn: Function;
  toggleFn: Function;
  deleteFn: Function;
}

export default class App extends React.Component<IAppProps> {
  private _getTodoListItems = () => {
    return this.props.parentableTodos.map((parentTodo: TodoItem) => {
      const childTodos = this.props.todos.filter((todo: TodoItem) => {
        return parentTodo.id === todo.parentItemId;
      });
      return childTodos ? (
        <div>
          <TodoListItemContainer
            key={parentTodo.id.toString()}
            item={parentTodo}
          />
          <ul>
            {childTodos.map((childTodo: TodoItem) => {
              return (
                <TodoListItemContainer
                  key={childTodo.id.toString()}
                  item={childTodo}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <TodoListItemContainer
          key={parentTodo.id.toString()}
          item={parentTodo}
        />
      );
    });
  };

  public render() {
    return (
      <div style={AppStyles.gridContainer()}>
        <div style={AppStyles.gridItem()}>
          <DisplayDate />
        </div>
        <div style={AppStyles.gridItem()} />
        <div style={AppStyles.gridItem()} />
        <div style={AppStyles.gridItem()}>
          <DisplayTime />
        </div>
        <div style={AppStyles.gridItem()} />
        <div
          style={{
            ...AppStyles.gridItem(),
            ...AppStyles.gridItemStart(),
            ...AppStyles.gridColSpan2()
          }}
        >
          <TodoList>{this._getTodoListItems()}</TodoList>
        </div>
        <div style={AppStyles.gridItem()} />
        <div style={AppStyles.gridItem()}>
          <OpenInfo />
        </div>
        <div style={AppStyles.gridItem()} />
        <div style={AppStyles.gridItem()} />
        <div style={AppStyles.gridItem()}>
          <AddNewItemContainer />
        </div>
      </div>
    );
  }
}
