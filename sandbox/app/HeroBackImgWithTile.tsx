import * as React from 'react';
import { HeroBackImgWithTile } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

class HeroBackImgWithTileview extends React.PureComponent<IProps> {

  render() {
    return (
      <HeroBackImgWithTile
        headerText="Help finding information online"
        paragraphText="How to take advantage of both, at the same time."
        buttonText="Learn more"
        buttonOnClick={() => console.log('click')}
        backgroundFile="https://via.placeholder.com/1440x736"
        tilePosition="right"
      />
    )
  }
}

export default withRouter(HeroBackImgWithTileview)
