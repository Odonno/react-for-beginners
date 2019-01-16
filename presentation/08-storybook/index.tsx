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
    reactLogo: require('../../assets/react-logo.png'),
    storybookLogo: require('../../assets/storybook-logo.svg'),
    storybookIntroduction: require('../../assets/storybook-introduction.gif')
};

const colors = {
    primary: '#282c34',
    secondary: '#61DAFB',
    tertiary: 'white',
    quaternary: '#CECECE',
    quinary: '#ED168F'
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
            <Heading margin="60px 0 0" size={1} caps fit lineHeight={1} textColor="secondary">
                {t('Sharing UI components')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('A storybook of your components')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Image src={images.storybookLogo} />
            <BlockQuote style={{ marginTop: 60 }}>
                <Quote textColor="tertiary" style={{ fontSize: 46, textAlign: 'center' }}>
                    The UI Development Environment<br /><br />
                    You'll ♥️ to use
                </Quote>
            </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Image src={images.storybookIntroduction} />
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Sharing UI components": "Sharing UI components",
            "A storybook of your components": "A Storybook of your components"
        }
    },
    fr: {
        translation: {
            "Sharing UI components": "Partage de components",
            "A storybook of your components": "Un storybook de vos components"
        }
    }
};