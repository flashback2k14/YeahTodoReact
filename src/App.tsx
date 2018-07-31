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
          <TodoList>
            {this.props.todos.map((item: TodoItem) => {
              return item.parentItemId === -1 ? (
                <TodoListItemContainer item={item} />
              ) : (
                <ul>
                  <TodoListItemContainer item={item} />
                </ul>
              );
            })}
          </TodoList>
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
