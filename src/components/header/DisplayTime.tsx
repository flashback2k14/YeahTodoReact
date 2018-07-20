import * as React from "react";
import * as Helper from "../../helper/Helper";

export class DisplayTime extends React.Component {
  private _timer: NodeJS.Timer;

  state = {
    time: new Date()
  };

  constructor(props: any) {
    super(props);
    this._timer = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    const { time } = this.state;
    const styling = {
      fontWeight: "bold",
      fontSize: "2.0em"
    };
    return <div style={styling}>{Helper.getTimeString(time)}</div>;
  }
}
