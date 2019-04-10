import React from "react";

import { Query } from "react-apollo";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import getCalls from "../../../graphql/queries/getCalls";
import callsSubscription from "../../../graphql/subscriptions/callsSubscription";

const subscribe = (subscribeToMore: any) => {
  subscribeToMore({
    document: callsSubscription,
    updateQuery: (prev: any, { subscriptionData }: any) => {
      if (!subscriptionData.data) {
        return prev;
      }

      const { mutation, data } = subscriptionData.data.call;

      if (mutation === "CREATED") {
        return {
          ...prev,
          calls: [data, ...prev.calls],
        };
      } else if (mutation === "UPDATED") {
        const index = prev.calls.findIndex((call: any) => call.call_id === data.call_id);

        if (index === -1) {
          return prev;
        }

        const updatedCalls = prev.calls.slice(0); // copy the old data object to avoid modifying it

        updatedCalls[index] = data;

        return {
          ...prev,
          calls: updatedCalls,
        };
      } else {
        return prev;
      }
    },
  });
};

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
          {({ loading, error, data, subscribeToMore }: any) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;

            subscribe(subscribeToMore);

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
