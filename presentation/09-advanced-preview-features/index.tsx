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
    reactLifecycle2: require('../../assets/react-lifecycle-2.png'),
    reactDevTools: require('../../assets/react-devtools.gif'),
    reduxDevTools: require('../../assets/redux-devtools.png')
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
                <ListItem margin="20px 0" textSize="40px">{t('Redux DevTools')}</ListItem>
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
            <Image margin="40px auto" src={images.reactLifecycle2} height={450} />
            <Text textSize="20px" textColor="tertiary">
                <span>* Source</span>
                <span> - </span>
                <a
                    href="https://medium.com/@kartikagarwal01/react-component-lifecycle-old-vs-new-32757aee5850"
                    target="_blank"
                    style={{ color: 'white' }}
                >
                    https://medium.com/@kartikagarwal01/react-component-lifecycle-old-vs-new-32757aee5850
                </a>
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Advanced component lifecycle')} - shouldComponentUpdate
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`shouldComponentUpdate(nextProps, nextState)
    -> boolean`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('React DevTools')}
            </Heading>
            <Image margin="40px auto" src={images.reactDevTools} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Redux DevTools')}
            </Heading>
            <Image margin="40px auto" src={images.reduxDevTools} />
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