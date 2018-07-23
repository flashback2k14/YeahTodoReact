export default class TodoItem {
  constructor(
    public id: number,
    public text: string,
    public isCompleted: boolean
  ) {}

  setId(id: number): TodoItem {
    this.id = id;
    return this;
  }
}
