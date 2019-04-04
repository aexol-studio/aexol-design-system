import * as React from 'react';
import { HeroImgOnBottom } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class HeroImgOnBottomview extends React.PureComponent<IProps> {

  render() {
    return (
      <HeroImgOnBottom
        headerText="Today is that day"
        paragraphText="What you’ve been looking for is already available and free!"
        buttonText="More Details"
        buttonOnClick={() => console.log('click')}
        imgFile1={<img src="https://via.placeholder.com/300x300" style={{width: '100%', objectFit: 'contain'}} />}
        imgFile2={<img src="https://via.placeholder.com/200x150" style={{width: '100%', objectFit: 'contain'}} />}
        imgFile3={<img src="https://via.placeholder.com/200x150" style={{width: '100%', objectFit: 'contain'}} />}
        imgFile4={<img src="https://via.placeholder.com/300x300" style={{width: '100%', objectFit: 'contain'}} />}
      />
    )
  }
}

export default withRouter(HeroImgOnBottomview)
