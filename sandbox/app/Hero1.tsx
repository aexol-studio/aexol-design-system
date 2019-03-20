import * as React from 'react';
import { Hero1 } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class Hero1view extends React.PureComponent<IProps> {

  render() {
    return (
      <Hero1
        headerText="Thinking About Going Mobile?"
        paragraphText="Start seeing the masive benefits of having an app for your bussines."
        buttonText="Try it!"
        buttonOnClick={() => console.log('click')}
        imgFile1="https://via.placeholder.com/270x540"
        imgFile2="https://via.placeholder.com/270x540"
        height={550}
      />
    )
  }
}

export default withRouter(Hero1view)
