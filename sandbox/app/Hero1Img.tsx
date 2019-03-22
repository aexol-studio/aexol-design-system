import * as React from 'react';
import { Hero1Img } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class Hero1Imgview extends React.PureComponent<IProps> {

  render() {
    return (
      <Hero1Img
        headerText="GraphQL Workshops"
        paragraphText="Tailored Specially For Your Company Needs & With Core Team."
        buttonText="Try it!"
        buttonOnClick={() => console.log('click')}
        imgFile="https://via.placeholder.com/668x569"
        imgPosition="center"
        height={550}
      />
    )
  }
}

export default withRouter(Hero1Imgview)
