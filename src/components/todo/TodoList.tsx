import * as React from "react";

export class TodoList extends React.Component {
  public render() {
    const container = {
      width: "100vw",
      minHeight: "20%",
      padding: "8px 20px 0 8px",
      borderRadius: "8px",
      boxShadow:
        "0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)",
      background: "white",
      position: "relative"
    } as React.CSSProperties;

    const headline = {
      width: 72,
      color: "white",
      background: "black",
      padding: 4,
      borderRadius: 6,
      textAlign: "center",
      position: "absolute",
      top: -12,
      left: 24
    } as React.CSSProperties;

    const todoList = {
      listStyleType: "none",
      paddingLeft: 14,
      lineHeight: "1.4",
      fontSize: "1.1em"
    } as React.CSSProperties;

    return (
      <div style={container}>
        <div style={headline}>To Do</div>
        <ul style={todoList}>{this.props.children}</ul>
      </div>
    );
  }
}
