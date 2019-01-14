import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';
import i18n from "i18next";
import * as LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from "react-i18next";

import { resources as resources01 } from './presentation/01-beginning';
import { resources as resources02 } from './presentation/02-virtual-dom';
import { resources as resources03 } from './presentation/03-redux';
import { resources as resources04 } from './presentation/04-routing';
import { resources as resources05 } from './presentation/05-rxjs-react';

import { Presentations } from './presentation';

require('normalize.css');

const CustomErrorReporter = ({ error }: { error: Error }) => <Redbox error={error} />;

const resources = {
  en: {
    translation: {
      ...resources01.en.translation,
      ...resources02.en.translation,
      ...resources03.en.translation,
      ...resources04.en.translation,
      ...resources05.en.translation
    }
  },
  fr: {
    translation: {
      ...resources01.fr.translation,
      ...resources02.fr.translation,
      ...resources03.fr.translation,
      ...resources04.fr.translation,
      ...resources05.fr.translation
    }
  }
}

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
