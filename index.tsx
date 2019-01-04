import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';
import i18n from "i18next";
import * as LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from "react-i18next";

import { PresentationWithI18n } from './presentation';

const CustomErrorReporter = ({ error }: { error: Error }) => <Redbox error={error} />;

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en: {
        translation: {
          "React for beginners": "React for beginners",
          "An introduction to web development with React": "An introduction to web development with React",
          "What you will learn": "What you will learn",
          "What is React?": "What is React?",
          "A deeper introduction": "A deeper introduction",
          "Developed by Facebook since 2013": "Developed by Facebook since 2013",
          "1 simple goal": "1 simple goal:",
          "combining HTML and JS together": "combining HTML and JS together",
          "Component lifecycle": "Component lifecycle",
          "Event handling": "Event handling"
        }
      },
      fr: {
        translation: {
          "React for beginners": "Introduction à React",
          "An introduction to web development with React": "",
          "What you will learn": "Objectif",
          "What is React?": "C'est quoi React ?",
          "A deeper introduction": "Les fonctionnalités",
          "Developed by Facebook since 2013": "Développé par Facebook depuis 2013",
          "1 simple goal": "Un objectif simple :",
          "combining HTML and JS together": "la réunion de HTML et de JS",
          "Component lifecycle": "La vie d'un component",
          "Event handling": "Gestion des événements"
        }
      }
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <PresentationWithI18n />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <PresentationWithI18n />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
