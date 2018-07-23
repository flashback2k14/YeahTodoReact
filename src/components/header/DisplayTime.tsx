import * as React from "react";
import * as Helper from "../../helper/Helper";

interface IDisplayTimeState {
  time: Date;
}

export class DisplayTime extends React.Component<any, IDisplayTimeState> {
  private _timer: number;

  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date()
    };
    this._timer = window.setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 60 * 1000);
  }

  public componentWillUnmount() {
    clearInterval(this._timer);
  }

  public render() {
    const { time } = this.state;

    const styling = {
      fontWeight: "bold",
      fontSize: "2em"
    } as React.CSSProperties;

    return <div style={styling}>{Helper.getTimeString(time)}</div>;
  }
}
