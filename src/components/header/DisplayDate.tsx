import * as React from "react";

export class DisplayDate extends React.Component {
  state = {
    time: new Date()
  };

  public render() {
    const { time } = this.state;
    const day = time.getDate();
    const monthFormatter = new Intl.DateTimeFormat("de-DE", {
      month: "long"
    });
    const year = time.getFullYear();
    // return <div>{`${day}. ${monthFormatter.format(time)} ${year}`}</div>;

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

    return (
      <div style={flexMainContainer}>
        <div style={dayStyling}>{day}</div>
        <div style={flexChildContainer}>
          <div style={monthYearStyling}>{monthFormatter.format(time)}</div>
          <div style={monthYearStyling}>{year}</div>
        </div>
      </div>
    );
  }
}
