import * as React from "react";
import "./OpenInfo.css";

export class OpenInfo extends React.Component {
  private _refModalOverlay: any;
  private _refModal: any;

  private _toggle = () => {
    this._refModal.classList.toggle("modal_closed");
    this._refModalOverlay.classList.toggle("modal_closed");
  };

  public render() {
    return (
      <div>
        <div className="container-info" onClick={this._toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
          </svg>
        </div>

        <div
          className="modal-overlay modal_closed"
          ref={ref => (this._refModalOverlay = ref)}
        />
        <div className="modal modal_closed" ref={ref => (this._refModal = ref)}>
          <svg
            className="modal-close_button"
            onClick={this._toggle}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
          <div className="modal-content">
            <h1>Yeah! Todo</h1>
            <p>
              - created by{" "}
              <a href="https://github.com/flashback2k14" target="blank">
                flashback2k14
              </a>
            </p>
            <p>
              - inspired by{" "}
              <a
                href="https://itunes.apple.com/de/app/listify-simple-todo-app/id1410668897?mt=8"
                target="blank"
              >
                Listify - Simple Todo App
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
