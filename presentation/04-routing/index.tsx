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
    Text,
    BlockQuote,
    Quote
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

const colors = {
    primary: '#282c34',
    secondary: '#61DAFB',
    tertiary: 'white',
    quaternary: '#CECECE'
};

const theme = createTheme(
    colors,
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
            <Heading margin="60px 0 0" size={1} caps lineHeight={1} textColor="secondary">
                {t('Routing')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('Handle web app navigation')}
            </Text>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Routing": "Routing",
            "Handle web app navigation": "Handle web app navigation"
        }
    },
    fr: {
        translation: {
            "Routing": "Routing",
            "Handle web app navigation": "Gestion de la navigation"
        }
    }
};