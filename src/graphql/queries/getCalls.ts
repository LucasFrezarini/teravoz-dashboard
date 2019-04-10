import gql from "graphql-tag";

const getCalls = gql`
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

export default getCalls;
