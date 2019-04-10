import React from "react";
import moment from "moment";

import callStatus from "../../../../utils/callStatus";
import PropTypes from "prop-types";

interface Props {
  call: any;
}
class CallRow extends React.PureComponent<Props> {
  public static propTypes = {
    call: PropTypes.object.isRequired,
  };

  public render(): JSX.Element {
    const { call } = this.props;
    return (
      <tr key={call.call_id}>
        <td>{call.call_id}</td>
        <td>{call.their_number}</td>
        <td>{call.their_number_type}</td>
        <td>{callStatus(call.type)}</td>
        <td>{moment(call.timestamp).format("DD/MM/YYYY HH:mm:ss")}</td>
      </tr>
    );
  }
}

export default CallRow;
