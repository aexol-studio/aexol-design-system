import * as React from 'react';
import { NotFound } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class NoMatch extends React.PureComponent<IProps> {

  render() {
    return (
      <NotFound />
    )
  }
}

export default withRouter(NoMatch)
