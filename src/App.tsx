import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Header from "./components/shared/Header";
import Dashboard from "./components/pages/Dashboard";

library.add(faCloud);

class App extends Component {
  public render() {
    return (
      <div className="h-100">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
