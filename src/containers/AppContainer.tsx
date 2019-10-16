import { connect } from "react-redux";
import { IState } from "../reducers";
import { getTodos, getParentableTodos } from "../selectors/todo.selectors";
import {
  addTodo,
  editTodo,
  deleteTodo,
  toggleTodo
} from "../actions/todo.actions";
import App from "../App";

const mapStateToProps = (state: IState) => ({
  todos: getTodos(state),
  parentableTodos: getParentableTodos(state)
});

const mapDispatchToProps = {
  addTodoFn: addTodo,
  editFn: editTodo,
  toggleFn: toggleTodo,
  deleteFn: deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
