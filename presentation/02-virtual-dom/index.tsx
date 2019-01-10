import * as React from 'react';
import { withI18n } from "react-i18next";

import {
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import createTheme from 'spectacle/lib/themes/default';

const images = {
  reactLogo: require('../../assets/react-logo.png')
};

const theme = createTheme(
  {
    primary: '#282c34',
    secondary: '#61DAFB',
    tertiary: 'white',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const Presentation = ({ t }) => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    theme={theme}
  >
    <Slide transition={['zoom']} bgColor="primary">
      <Image src={images.reactLogo} height={250} />
      <Heading margin="60px 0 0" size={1} fit caps lineHeight={1} textColor="secondary">
        {t('Virtual DOM')}
      </Heading>
      <Text margin="40px 0 0" textColor="tertiary">
        {t('How to create a dynamic web page')}
      </Text>
    </Slide>
  </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
  en: {
      translation: {
          "Virtual DOM": "Virtual DOM",
          "How to create a dynamic web page": "How to create a dynamic web page?"
      }
  },
  fr: {
      translation: {
          "Virtual DOM": "Virtual DOM",
          "How to create a dynamic web page": "La création de pages web dynamiques"
      }
  }
};