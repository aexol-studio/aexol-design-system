import * as React from 'react';
import { Hero5 } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class Hero5view extends React.PureComponent<IProps> {

  render() {
    return (
      <Hero5
        headerText="Thinking about going mobile?"
        paragraphText="Start seeing the masive benefits of having an app for your own bussines"
        buttonText="Contact Us"
        buttonOnClick={() => console.log('click')}
        backgroundFile="https://via.placeholder.com/1440x736"
      />
    )
  }
}

export default withRouter(Hero5view)
