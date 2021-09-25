import React, { Component } from "react";
import loading from "./loading.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <img className="my-3 imgUser" src={loading} alt="loading" />
        </div>
      </div>
    );
  }
}
