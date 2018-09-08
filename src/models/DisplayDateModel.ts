import { padLeft } from "../helper/Helper";

export default class DisplayDateModel {
  readonly day: string;
  readonly month: string;
  readonly year: number;

  private _monthFormatter = new Intl.DateTimeFormat("de-DE", {
    month: "long"
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
