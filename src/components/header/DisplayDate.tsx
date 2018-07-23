import * as React from "react";
import DisplayDateModel from "../../models/DisplayDateModel";

interface IDisplayDateState {
  model: DisplayDateModel;
}

export class DisplayDate extends React.Component<any, IDisplayDateState> {
  constructor(props: any) {
    super(props);
    this.state = {
      model: DisplayDateModel.create(new Date())
    };
  }

  public render() {
    const flexMainContainer = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "stretch"
    };

    const flexChildContainer = {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "start",
      alignContent: "stretch"
    };

    const dayStyling = {
      fontWeight: "bold",
      fontSize: "2.1em",
      paddingRight: 4
    };

    const monthYearStyling = {
      fontSize: "0.8em",
      color: "#616161"
    };

    const { model } = this.state;

    return (
      <div style={flexMainContainer}>
        <div style={dayStyling}>{model.day}</div>
        <div style={flexChildContainer}>
          <div style={monthYearStyling}>{model.month}</div>
          <div style={monthYearStyling}>{model.year}</div>
        </div>
      </div>
    );
  }
}
