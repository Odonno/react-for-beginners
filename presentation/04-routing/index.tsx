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

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('Conditional rendering')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('React Router Components')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Redux integration')}</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('Conditional rendering')}</span>
                <span> - </span>
                <span>if/else</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const RouteComponent = (props) => {
    if (props.loading) {
        return <div>Currently loading...</div>;
    }
    if (!props.value) {
        return null;
    }
    return <div>{props.value}</div>;
}`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('Conditional rendering')}</span>
                <span> - </span>
                <span>switch</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const RouteComponent = (props) => {
    switch (props.state) {
        case 'Index':
            return <Index />;
        case 'About':
            return <About />;
        case 'Users':
            return <Users />;
        default:
            return <div>No match...</div>;
    }
}`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('React Router Components')}</span>
                <span> - </span>
                <span>Router</span>
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('React Router Components')}</span>
                <span> - </span>
                <span>Switch</span>
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                <span>{t('React Router Components')}</span>
                <span> - </span>
                <span>(Nav)Link</span>
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                <span>{t('React Router Components')}</span>
                <span> - </span>
                <span>{t('initialization')}</span>
            </Heading>
            <Text>with BrowserRouter</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('Redux integration')}</span>
                <span> - </span>
                <span>navigate to</span>
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('Redux integration')}</span>
                <span> - </span>
                <span>go back</span>
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                <span>{t('Redux integration')}</span>
                <span> - </span>
                <span>{t('initialization')}</span>
            </Heading>
            <Text>with ConnectedRouter</Text>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Routing": "Routing",
            "Handle web app navigation": "Handle web app navigation",
            "What you will learn": "What you will learn",
            "Conditional rendering": "Conditional rendering",
            "React Router Components": "React Router Components",
            "Redux integration": "Redux integration",
            "initialization": "initialization"
        }
    },
    fr: {
        translation: {
            "Routing": "Routing",
            "Handle web app navigation": "Gestion de la navigation",
            "What you will learn": "Objectif",
            "Conditional rendering": "Conditional rendering",
            "React Router Components": "React Router Components",
            "Redux integration": "Redux integration",
            "initialization": "initialisation"
        }
    }
};