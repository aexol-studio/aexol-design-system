import * as React from 'react';
import { Hero2 } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class Hero2view extends React.PureComponent<IProps> {

  render() {
    return (
      <Hero2
        headerText="GraphQL Workshops"
        paragraphText="Tailored Specially For Your Company Needs & With Core Team."
        buttonText="Try it!"
        buttonOnClick={() => console.log('click')}
        imgFile="https://via.placeholder.com/668x569"
      />
    )
  }
}

export default withRouter(Hero2view)
