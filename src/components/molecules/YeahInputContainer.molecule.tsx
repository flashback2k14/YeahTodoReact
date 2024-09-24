import { IsOpenProp, createNewTodoItem } from "../../shared";
import {
  useAppDispatch,
  useAppSelector,
  selectNewItemText,
  selectParentTodoItemId,
  addTodo,
  setFocusInput,
} from "../../store";
import { YeahInput, YeahAddIcon, YeahChips } from "../atoms";

export const YeahInputContainer: React.FC<IsOpenProp> = ({ isOpen }) => {
  const dispatch = useAppDispatch();
  const newItemText = useAppSelector(selectNewItemText);
  const parentTodoItemId = useAppSelector(selectParentTodoItemId);

  const handleAddClick = () => {
    if (!newItemText) {
      return;
    }

    dispatch(addTodo(createNewTodoItem(newItemText, parentTodoItemId)));
    dispatch(setFocusInput(true));
  };

  return (
    <div
      className={`flex justify-start items-center shadow-3xl rounded-lg mb-2 z-20 ${
        isOpen ? "opacity-100 sm:w-4/6 w-full" : "opacity-0 w-0"
      } transition-opacity ease-in-out delay-150 duration-300`}>
      <div className="flex flex-col w-full p-1 bg-white rounded">
        <div className="flex justify-start items-center w-auto p-1 bg-white rounded-t">
          <YeahInput />
          <YeahAddIcon clickFn={() => handleAddClick()} classNames={"ml-2 mr-0 cursor-pointer"} />
        </div>
        <div className="flex flex-row bg-white rounded-b overflow-auto">
          <YeahChips />
        </div>
      </div>
    </div>
  );
};
