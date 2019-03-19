import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import About from './About';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route
              path={'/'}
              component={About}
            />
          </Switch>
      </BrowserRouter>
      )
    }
  }

export default App
