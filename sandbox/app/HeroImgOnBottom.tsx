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
        imgFile1="https://via.placeholder.com/300x300"
        imgFile2="https://via.placeholder.com/200x150"
        imgFile3="https://via.placeholder.com/200x150"
        imgFile4="https://via.placeholder.com/300x300"
      />
    )
  }
}

export default withRouter(HeroImgOnBottomview)
