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

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('What is DOM?')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">DOM vs Virtual DOM</ListItem>
                <ListItem margin="20px 0" textSize="40px">(Virtual) DOM nodes</ListItem>
                <ListItem margin="20px 0" textSize="40px">diff & patch</ListItem>
            </List>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Virtual DOM": "Virtual DOM",
            "How to create a dynamic web page": "How to create a dynamic web page?",
            "What you will learn": "What you will learn",
        }
    },
    fr: {
        translation: {
            "Virtual DOM": "Virtual DOM",
            "How to create a dynamic web page": "La création de pages web dynamiques",
            "What you will learn": "Objectif",
        }
    }
};