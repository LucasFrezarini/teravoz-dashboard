import React from "react";
import Table from "react-bootstrap/Table";
import CallRow from "./CallRow";
import PropTypes from "prop-types";

interface Props {
  calls: any[];
  subscribeToCalls: () => void;
}

class CallsTable extends React.PureComponent<Props> {
  public static propTypes = {
    calls: PropTypes.array.isRequired,
    subscribeToCalls: PropTypes.func.isRequired,
  };
  public componentDidMount(): void {
    this.props.subscribeToCalls();
  }

  public render(): JSX.Element {
    const { calls } = this.props;

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
            <CallRow call={call} key={call.call_id} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default CallsTable;
