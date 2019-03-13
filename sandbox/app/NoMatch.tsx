import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class NoMatch extends React.PureComponent<IProps> {

  render() {
    return (
      <div style={{fontSize: 50, margin: '0 auto'}}>
        no match
      </div>

    )
  }
}

export default withRouter(NoMatch)
