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
import Hero3view from './Hero3';
import Hero4view from './Hero4';
import Hero5view from './Hero5';
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
              path={'/hero3'}
              component={Hero3view}
            />
            <Route
              path={'/hero4'}
              component={Hero4view}
            />
            <Route
              path={'/hero5'}
              component={Hero5view}
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
