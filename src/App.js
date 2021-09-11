import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={3} country="in" />
      </div>
    );
  }
}

//news category:- business entertainment general health science sports technology
