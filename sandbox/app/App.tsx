import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Hero2Imgview from './Hero2Img';
import Hero1Imgview from './Hero1Img';
import HeroImgOnBottomview from './HeroImgOnBottom';
import HeroBackImgWithTileview from './HeroBackImgWithTile';
import HeroBackImgWithTextview from './HeroBackImgWithText';
import PricingTableComp from './PricingTable';
import NoMatch from './NoMatch';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path={'/'} exact={true} component={About} />
          <Route path={'/Hero2Img'} component={Hero2Imgview} />
          <Route path={'/Hero1Img'} component={Hero1Imgview} />
          <Route path={'/HeroImgOnBottom'} component={HeroImgOnBottomview} />
          <Route
            path={'/HeroBackImgWithTile'}
            component={HeroBackImgWithTileview}
          />
          <Route
            path={'/HeroBackImgWithText'}
            component={HeroBackImgWithTextview}
          />
          <Route path={'/PricingTableComp'} component={PricingTableComp} />
          <Route component={NoMatch} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
