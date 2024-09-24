import { padLeft } from "../helper";

export type AppendClassNames = {
  classNames: string;
};

export type AddClickFunction = {
  clickFn: () => void;
};

export type IsOpenProp = {
  isOpen: boolean;
};

export type State = {
  todos: TodoItem[];
  parentableTodos: TodoItem[];
  selectedParentTodoItemId: number;
};

export type UiState = {
  newItem: {
    shouldFocusInput: boolean;
    text: string;
  };
  chips: {
    removeSelection: boolean;
  };
};

export type TodoItem = {
  id: number;
  text: string;
  isCompleted: boolean;
  parentItemId: number;
};

export const createNewTodoItem = (text: string, parentItemId: number): TodoItem => ({
  id: -1,
  text,
  isCompleted: false,
  parentItemId,
});

export default class DisplayDateModel {
  readonly day: string;
  readonly month: string;
  readonly year: number;

  private _monthFormatter = new Intl.DateTimeFormat("de-DE", {
    month: "long",
  });

  public static create(currentDate: Date): DisplayDateModel {
    return new DisplayDateModel(currentDate);
  }

  private constructor(currentDate: Date) {
    this.day = padLeft(currentDate.getDate());
    this.month = this._monthFormatter.format(currentDate);
    this.year = currentDate.getFullYear();
  }
}
