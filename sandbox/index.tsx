import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app/App';
import { cssRaw } from 'typestyle';

cssRaw(`
  html,body{
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }
`);

const renderFunc = (Component: React.ComponentType<any>) =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

renderFunc(App);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    renderFunc(NewRoot);
  });
}
