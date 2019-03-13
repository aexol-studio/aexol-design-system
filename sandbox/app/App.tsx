import * as React from 'react';
import '../i18n';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import About from './About';
import Hero1view from './Hero1';
import Hero2view from './Hero2';
import Hero4view from './Hero4';
import NoMatch from './NoMatch';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route
              path={'/'}
              exact={true}
              component={About}
            />
            <Route
              path={'/hero1'}
              component={Hero1view}
            />
            <Route
              path={'/hero2'}
              component={Hero2view}
            />
            <Route
              path={'/hero4'}
              component={Hero4view}
            />
            <Route
              component={NoMatch}
            />
          </Switch>
      </HashRouter>
    )
  }
}

export default App
