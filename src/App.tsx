import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

library.add(faCloud);
class App extends Component {
  public render() {
    return (
      <div className="h-100">
        <Header />
        <Container className="mt-3">
          <h1>Dashboard</h1>
          <hr />
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Caller Number</th>
                <th>Type</th>
                <th>Status</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123456789</td>
                <td>11967744005</td>
                <td>Mobile</td>
                <td>Stand By</td>
                <td>Now</td>
              </tr>
              <tr>
                <td>123456789</td>
                <td>11967744005</td>
                <td>Mobile</td>
                <td>Stand By</td>
                <td>Now</td>
              </tr>
              <tr>
                <td>123456789</td>
                <td>11967744005</td>
                <td>Mobile</td>
                <td>Stand By</td>
                <td>Now</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
