import { useAppSelector, selectParentableTodos, selectTodos } from "../../store";
import { YeahTodoItem } from "../molecules";

export const YeahTodoList: React.FC = () => {
  const parentableTodos = useAppSelector(selectParentableTodos);
  const todos = useAppSelector(selectTodos);

  return (
    <div className="relative min-h-10 sm:w-4/5 w-11/12 py-9 pr-5 pl-2 rounded-lg shadow-4xl bg-white">
      <div className="absolute -top-3 left-6 w-20 text-white bg-black p-1 rounded-md text-center">
        To Do
      </div>

      <ul className="pl-4 text-base">
        {parentableTodos.map((parentTodo) => {
          const childTodos = todos.filter((todo) => parentTodo.id === todo.parentItemId);

          return childTodos ? (
            <div key={parentTodo.id}>
              <YeahTodoItem key={parentTodo.id} item={parentTodo} />
              <ul className="ml-8">
                {childTodos.map((childTodo) => (
                  <YeahTodoItem key={childTodo.id} item={childTodo} />
                ))}
              </ul>
            </div>
          ) : (
            <YeahTodoItem key={parentTodo.id} item={parentTodo} />
          );
        })}
      </ul>
    </div>
  );
};
