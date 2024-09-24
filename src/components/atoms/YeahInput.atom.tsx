import { useRef, useEffect } from "react";
import { createNewTodoItem } from "../../shared";
import {
  useAppDispatch,
  useAppSelector,
  selectNewItemFocusInput,
  selectNewItemText,
  selectParentTodoItemId,
  addTodo,
  setFocusInput,
  setNewItemText,
} from "../../store";

export const YeahInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const shouldInputFocused = useAppSelector(selectNewItemFocusInput);
  const newItemText = useAppSelector(selectNewItemText);
  const parentTodoItemId = useAppSelector(selectParentTodoItemId);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldInputFocused) {
      ref.current?.focus();
    }
  }, [shouldInputFocused]);

  useEffect(() => {
    if (ref.current) {
      ref.current.value = newItemText;
    }
  }, [newItemText]);

  const addNewItem = (text: string) => {
    dispatch(addTodo(createNewTodoItem(text, parentTodoItemId)));
    dispatch(setFocusInput(true));
    dispatch(setNewItemText(""));
  };

  return (
    <input
      className="w-full h-full bg-white text-black border-b-2 border-solid text-lg outline-none hover:bborder-gray-500 focus:border-gray-500 valid:border-gray-500 placeholder:text-gray-400"
      type="text"
      placeholder="Enter todo..."
      required={true}
      ref={ref}
      onChange={(e) => dispatch(setNewItemText(e.target.value))}
      onKeyDown={(e) => (e.key === "Enter" ? addNewItem(e.currentTarget.value) : undefined)}
    />
  );
};
