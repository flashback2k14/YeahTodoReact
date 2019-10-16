import { connect } from "react-redux";
import { IState } from "../../reducers";
import { getParentableTodos } from "../../selectors/todo.selectors";
import { addTodo } from "../../actions/todo.actions";
import AddNewItem from "../../components/footer/AddNewItem";

const mapStateToProps = (state: IState) => ({
  parentableTodos: getParentableTodos(state)
});

const mapDispatchToProps = {
  addTodoFn: addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewItem);
