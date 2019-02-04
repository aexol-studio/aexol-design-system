import * as React from 'react'
import '../i18n'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import About from './About'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route
              path={'/'}
              component={About}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
      )
    }
  }

export default App
