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
            <Heading margin="60px 0 0" size={1} caps fit lineHeight={1} textColor="secondary">
                {t('Advanced & preview features')}
            </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('Advanced component lifecycle')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('React DevTools')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Server Side Rendering')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Context Provider')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Lazy loading of components')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('React hooks')}</ListItem>                
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Advanced component lifecycle')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('React DevTools')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Server Side Rendering')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Context Provider')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Lazy loading of components')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('React hooks')}
            </Heading>
            <Text>TODO</Text>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Advanced & preview features": "Advanced & preview features",
            "What you will learn": "What you will learn",
            "Advanced component lifecycle": "Advanced component lifecycle",
            "React DevTools": "React DevTools",
            "Server Side Rendering": "Server Side Rendering",
            "Context Provider": "Context Provider",
            "Lazy loading of components": "Lazy loading of components",
            "React hooks": "React hooks"
        }
    },
    fr: {
        translation: {
            "Advanced & preview features": "Advanced & preview features",
            "What you will learn": "Objectif",
            "Advanced component lifecycle": "Advanced component lifecycle",
            "React DevTools": "React DevTools",
            "Server Side Rendering": "Server Side Rendering",
            "Context Provider": "Context Provider",
            "Lazy loading of components": "Lazy loading of components",
            "React hooks": "React hooks"
        }
    }
};