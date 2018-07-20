import * as React from "react";

export class OpenSettings extends React.Component {
  private _handleSettingsClick = () => {
    alert("Settings Button clicked");
  };

  public render() {
    return <button onClick={this._handleSettingsClick}>Settings</button>;
  }
}
