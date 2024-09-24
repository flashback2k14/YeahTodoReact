import { useState } from "react";
import {
  useAppDispatch,
  setParentTodoId,
  setFocusInput,
  setNewItemText,
  setRemoveChipsSelection,
} from "../../store";
import { YeahFab } from "../atoms";
import { YeahInputContainer } from "./YeahInputContainer.molecule";

export const YeahAddNewItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed left-12 right-12 flex flex-col justify-center items-center bottom-6 ${isOpen ? "z-50" : ""}`}>
      <YeahInputContainer isOpen={isOpen} />
      <YeahFab
        isOpen={isOpen}
        clickFn={() => {
          dispatch(setParentTodoId(-1));
          dispatch(setFocusInput(!isOpen));
          dispatch(setNewItemText(""));
          dispatch(setRemoveChipsSelection(isOpen));
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
};
