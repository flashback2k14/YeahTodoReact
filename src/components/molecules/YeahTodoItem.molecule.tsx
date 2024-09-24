import { useState } from "react";
import { TodoItem } from "../../shared";
import { YeahCheckboxIcon, YeahDeleteIcon, YeahEditIcon } from "../atoms";
import { deleteTodo, editTodo, toggleTodo, useAppDispatch } from "../../store";

export const YeahTodoItem: React.FC<{ item: TodoItem }> = ({ item }) => {
  const dispatch = useAppDispatch();

  const [inEditMode, setInEditMode] = useState(false);

  return (
    <li className={`${item.isCompleted ? "text-slate-600 italic line-through" : "font-medium"}`}>
      <div className="flex justify-between items-center cursor-default">
        <label className="flex items-center cursor-pointer relative mt-1 mr-4">
          <input
            type="checkbox"
            onChange={() => dispatch(toggleTodo(item))}
            checked={item.isCompleted}
            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-slate-600 checked:bg-slate-800 checked:border-slate-800"
            id="check"
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <YeahCheckboxIcon />
          </span>
        </label>

        <div className="w-full">
          {inEditMode ? (
            <input
              className="w-11/12 mr-2 pl-1 bg-white text-black border-b-2 border-b-slate-700 text-base outline-none hover:border-b-black focus:border-b-black valid:border-b-black placeholder:text-slate-500"
              value={item.text}
              onChange={(e) => dispatch(editTodo(item, e.target.value))}
              onKeyDown={(e) => (e.key === "Enter" ? setInEditMode(!inEditMode) : null)}
            />
          ) : (
            <div className="text-base mt-1">{item.text}</div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <YeahEditIcon
            classNames="mx-2 mt-1 cursor-pointer"
            clickFn={() => setInEditMode(!inEditMode)}
          />
          <YeahDeleteIcon
            classNames="mt-1 cursor-pointer"
            clickFn={() => dispatch(deleteTodo(item))}
          />
        </div>
      </div>

      <hr className="my-2 h-0 border-t border-t-slate-100 border-b border-b-white" />
    </li>
  );
};
