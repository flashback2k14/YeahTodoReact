export default class TodoItem {
  constructor(
    public id: number,
    public text: string,
    public isCompleted: boolean,
    public parentItemId: number
  ) {}

  setId(id: number): TodoItem {
    this.id = id;
    return this;
  }

  public setText(text: string): TodoItem {
    this.text = text;
    return this;
  }

  setParent(parentItemId: number): TodoItem {
    this.parentItemId = parentItemId;
    return this;
  }
}
