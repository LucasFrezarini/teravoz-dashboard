import React from "react";

import { Query } from "react-apollo";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import getCalls from "../../../graphql/queries/getCalls";

const Dashboard: React.FunctionComponent = () => {
  return (
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
        <Query query={getCalls}>
          {({ loading, error, data }: any) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;

            const { calls } = data;

            return (
              <tbody>
                {calls.map((call: any) => (
                  <tr key={call.call_id}>
                    <td>{call.call_id}</td>
                    <td>{call.their_number}</td>
                    <td>{call.their_number_type}</td>
                    <td>{call.type}</td>
                    <td>{call.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            );
          }}
        </Query>
      </Table>
    </Container>
  );
};

export default Dashboard;
