import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';
import i18n from "i18next";
import * as LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from "react-i18next";

import { resources } from './presentation/01-beginning';
import { Presentations } from './presentation';

require('normalize.css');

const CustomErrorReporter = ({ error }: { error: Error }) => <Redbox error={error} />;

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentations />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Presentations />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
