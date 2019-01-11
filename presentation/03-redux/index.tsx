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
    reactLogo: require('../../assets/react-logo.png'),
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
                {t('State management with Redux')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('An architecture that scale')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('What is Redux?')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">Global State</ListItem>
                <ListItem margin="20px 0" textSize="40px">Actions</ListItem>
                <ListItem margin="20px 0" textSize="40px">Reducers</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Connecting state to components')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">Dispatch actions</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What is Redux?')}
            </Heading>
            <Text textColor="tertiary">TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                Global State
            </Heading>
            <Text textColor="tertiary">TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                Actions
            </Heading>
            <Text textColor="tertiary">TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                Reducers
            </Heading>
            <Text textColor="tertiary">TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Connecting state to components')}
            </Heading>
            <Text textColor="tertiary">TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                Dispatch actions
            </Heading>
            <Text textColor="tertiary">TODO</Text>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "State management with Redux": "State management with Redux",
            "An architecture that scale": "An architecture that scale",
            "What you will learn": "What you will learn",
            "What is Redux?": "What is Redux?",
            "Connecting state to components": "Connecting state to components"
        }
    },
    fr: {
        translation: {
            "State management with Redux": "State management with Redux",
            "An architecture that scale": "An architecture that scale",
            "What you will learn": "Objectif",
            "What is Redux?": "C'est quoi Redux ?",
            "Connecting state to components": "Connexion entre state & components"
        }
    }
};