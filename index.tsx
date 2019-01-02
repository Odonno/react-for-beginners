import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';

import { Presentation } from './presentation';

const CustomErrorReporter = ({ error }: { error: Error }) => <Redbox error={error} />;

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Presentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
