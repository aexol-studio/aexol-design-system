import * as React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './examples/Root'

const renderFunc = (Component:React.ComponentType<any>) =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )

renderFunc(Root)

if (module.hot) {
  module.hot.accept('./examples/Root', () => {
    const NewRoot = require('./examples/Root').default
    renderFunc(NewRoot)
  })
}
