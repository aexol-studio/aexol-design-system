import * as React from 'react';
import { HeroBackImgWithText } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class HeroBackImgWithTextview extends React.PureComponent<IProps> {

  render() {
    return (
      <HeroBackImgWithText
        headerText="Thinking about going mobile?"
        paragraphText="Start seeing the masive benefits of having an app for your own bussines"
        buttonText="Contact Us"
        buttonOnClick={() => console.log('click')}
        backgroundFile="https://via.placeholder.com/1440x736"
      />
    )
  }
}

export default withRouter(HeroBackImgWithTextview)
