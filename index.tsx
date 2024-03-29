import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';
import i18n from "i18next";
import * as LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from "react-i18next";

import resources01 from './presentation/01-beginning/resources';
import resources02 from './presentation/02-virtual-dom/resources';
import resources03 from './presentation/03-redux/resources';
import resources04 from './presentation/04-routing/resources';
import resources05 from './presentation/05-rxjs-react/resources';
import resources06 from './presentation/06-web-api/resources';
import resources07 from './presentation/07-styling/resources';
import resources08 from './presentation/08-storybook/resources';
import resources09 from './presentation/09-advanced-preview-features/resources';

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
      ...resources05.en.translation,
      ...resources06.en.translation,
      ...resources07.en.translation,
      ...resources08.en.translation,
      ...resources09.en.translation
    }
  },
  fr: {
    translation: {
      ...resources01.fr.translation,
      ...resources02.fr.translation,
      ...resources03.fr.translation,
      ...resources04.fr.translation,
      ...resources05.fr.translation,
      ...resources06.fr.translation,
      ...resources07.fr.translation,
      ...resources08.fr.translation,
      ...resources09.fr.translation
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
