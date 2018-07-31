import { connect } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../../actions/todo.actions";
import TodoListItem from "../../components/todo/TodoListItem";

export default connect<any, any, any>(
  null,
  {
    deleteFn: deleteTodo,
    editFn: editTodo,
    toggleFn: toggleTodo
  }
)(TodoListItem);
