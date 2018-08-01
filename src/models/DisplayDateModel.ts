import { padLeft } from "../helper/Helper";

export default class DisplayDateModel {
  private _monthFormatter = new Intl.DateTimeFormat("de-DE", {
    month: "long"
  });

  readonly day: string;
  readonly month: string;
  readonly year: number;

  private constructor(currentDate: Date) {
    this.day = padLeft(currentDate.getDate());
    this.month = this._monthFormatter.format(currentDate);
    this.year = currentDate.getFullYear();
  }

  public static create(currentDate: Date): DisplayDateModel {
    return new DisplayDateModel(currentDate);
  }
}
