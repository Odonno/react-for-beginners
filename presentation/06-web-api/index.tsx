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
                {t('Calling Web API')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('Create a dynamic web app working with Cloud services')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('Fetching data with axios')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Executing HTTP requests')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Handling side effects with redux-observable')}</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Fetching data with axios')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Executing HTTP requests')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Handling side effects with redux-observable')}
            </Heading>
            <Text>TODO</Text>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Calling Web API": "Calling Web API",
            "Create a dynamic web app working with Cloud services": "Create a dynamic web app working with backend services",
            "What you will learn": "What you will learn",
            "Fetching data with axios": "Fetching data with axios",
            "Executing HTTP requests": "Executing HTTP requests",
            "Handling side effects with redux-observable": "Handling side effects with redux-observable"
        }
    },
    fr: {
        translation: {
            "Calling Web API": "React & the Cloud",
            "Create a dynamic web app working with Cloud services": "Relier React à un service backend",
            "What you will learn": "Objectif",
            "Fetching data with axios": "Récupérer des données avec axios",
            "Executing HTTP requests": "Exécuter des requêtes HTTP",
            "Handling side effects with redux-observable": "Gestion des side effects avec redux-observable"
        }
    }
};