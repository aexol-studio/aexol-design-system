import * as React from 'react';
import '../i18n';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import About from './About';
import Hero1view from './Hero1';
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
              component={NoMatch}
            />
          </Switch>
      </HashRouter>
    )
  }
}

export default App
