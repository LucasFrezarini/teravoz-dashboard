import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { Query } from "react-apollo";
import gql from "graphql-tag";

library.add(faCloud);

const DASHBOARD_QUERY = gql`
  query {
    calls {
      call_id
      their_number
      their_number_type
      type
      timestamp
    }
  }
`;

class App extends Component {
  public render() {
    return (
      <div className="h-100">
        <Header />
        <Container className="mt-3">
          <h1>Dashboard</h1>
          <hr />
          <Query query={DASHBOARD_QUERY}>
            {({ loading, error, data }: any) => {
              if (loading) return <div>Loading</div>;
              if (error) return <div>Error</div>;

              const { calls } = data;

              return (
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
                    {calls.map((call: any) => (
                      <tr>
                        <td>{call.call_id}</td>
                        <td>{call.their_number}</td>
                        <td>{call.their_number_type}</td>
                        <td>{call.type}</td>
                        <td>{call.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              );
            }}
          </Query>
        </Container>
      </div>
    );
  }
}

export default App;
