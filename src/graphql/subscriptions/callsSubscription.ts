import gql from "graphql-tag";

const callsSubscription = gql`
  subscription {
    call {
      mutation
      data {
        call_id
        their_number
        their_number_type
        type
        timestamp
      }
    }
  }
`;

export default callsSubscription;
