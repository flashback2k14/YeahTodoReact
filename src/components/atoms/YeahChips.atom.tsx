import { useRef, useEffect } from "react";
import { TodoItem } from "../../shared";
import {
  useAppDispatch,
  useAppSelector,
  selectParentableTodos,
  selectParentTodoItemId,
  selectChipsRemoveSelection,
  setParentTodoId,
} from "../../store";

const toggleChipColors = (selected: HTMLDivElement) => () => {
  selected.classList.toggle("text-black");
  selected.classList.toggle("bg-white");
  selected.classList.toggle("text-white");
  selected.classList.toggle("bg-black");
};

const resetChipColors = (selected: HTMLDivElement) => {
  selected.classList.remove("text-white");
  selected.classList.remove("bg-black");
  selected.classList.add("text-black");
  selected.classList.add("bg-white");
};

export const YeahChips: React.FC = () => {
  const dispatch = useAppDispatch();
  const parentableTodos = useAppSelector(selectParentableTodos);
  const parentTodoItemId = useAppSelector(selectParentTodoItemId);
  const removeChipsSelection = useAppSelector(selectChipsRemoveSelection);

  const chipsRef = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (removeChipsSelection) {
      Object.values(chipsRef.current).map((chip) => chip && resetChipColors(chip));
    }
  }, [removeChipsSelection]);

  const handleChipSelection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, todo: TodoItem) => {
    const toggleColors = toggleChipColors(e.target as HTMLDivElement);

    if (parentTodoItemId === todo.id) {
      dispatch(setParentTodoId(-1));
      toggleColors();
      return;
    }

    if (parentTodoItemId !== -1) {
      return;
    }

    dispatch(setParentTodoId(todo.id));
    toggleColors();
  };

  return (
    <>
      {parentableTodos.map((todo: TodoItem) => (
        <div
          className="border-black border-solid border text-black text-sm bg-white rounded m-1 p-1 text-center cursor-pointer hover:text-white hover:bg-black"
          ref={(ref) => (chipsRef.current[todo.id] = ref)}
          key={todo.id}
          onClick={(e) => handleChipSelection(e, todo)}>
          {todo.text}
        </div>
      ))}
    </>
  );
};
