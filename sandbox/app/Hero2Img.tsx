import * as React from 'react';
import { Hero2Img } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class Hero2Imgview extends React.PureComponent<IProps> {

  render() {
    return (
      <Hero2Img
        headerText="Thinking About Going Mobile?"
        paragraphText="Start seeing the masive benefits of having an app for your bussines."
        buttonText="Try it!"
        buttonOnClick={() => console.log('click')}
        imgFile1={<img src="https://via.placeholder.com/270x540" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />}
        imgFile2={<img src="https://via.placeholder.com/270x540" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />}
        height={800}
      />
    )
  }
}

export default withRouter(Hero2Imgview)
