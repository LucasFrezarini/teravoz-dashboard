import React from "react";
import { Query } from "react-apollo";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import getCalls from "../../../graphql/queries/getCalls";
import callsSubscription from "../../../graphql/subscriptions/callsSubscription";
import CallsTable from "../../shared/CallsTable";

class Dashboard extends React.PureComponent {
  public constructor(props: any) {
    super(props);

    this.subscribe = this.subscribe.bind(this);
  }

  public render(): JSX.Element {
    return (
      <Container className="mt-3 d-flex flex-column">
        <h1>Dashboard</h1>
        <Query query={getCalls}>
          {({ loading, error, data, subscribeToMore }: any) => {
            if (loading) {
              return <Spinner animation="grow" className="align-self-center" variant="primary" />;
            }

            if (error) {
              return <Alert variant="danger">Error while trying to fetch the current calls.</Alert>;
            }

            return <CallsTable calls={data.calls} subscribeToCalls={() => this.subscribe(subscribeToMore)} />;
          }}
        </Query>
      </Container>
    );
  }

  private subscribe(subscribeToMore: any): void {
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

          let updatedCalls = prev.calls.slice(0); // copy the old data object to avoid modifying it

          if (data.type === "call.finished") {
            updatedCalls.splice(index, 1);
          } else {
            updatedCalls[index] = data;
          }

          return {
            ...prev,
            calls: updatedCalls,
          };
        } else {
          return prev;
        }
      },
    });
  }
}

export default Dashboard;
