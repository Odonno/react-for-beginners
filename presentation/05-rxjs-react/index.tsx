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
    rxLogo: require('../../assets/rx-logo.png'),
    rxjsReactRelation: require('../../assets/rxjs-react-relation.png')
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <Image src={images.rxLogo} height={250} />
                <Image src={images.reactLogo} height={250} />
            </div>

            <Heading margin="60px 0 0" size={1} caps lineHeight={1} textColor="secondary">
                <span style={{ color: colors.quinary }}>rxjs</span>
                <span style={{ color: colors.tertiary }}> + </span>
                <span style={{ color: colors.secondary }}>react</span>
            </Heading>
            <Text margin="40px 0 0" fit textColor="tertiary">
                {t('Create fully reactive applications by combining react & rxjs')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('Handling UI events')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Combining Redux and rxjs')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Replacing Redux with rxjs')}</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Image src={images.rxjsReactRelation} />
            <Text textSize="20px" textColor="tertiary">
                <span>* Source</span>
                <span> - </span>
                <a
                    href="https://medium.com/@fahad19/using-rxjs-with-react-js-part-i-introduction-4d027ef55aa6"
                    target="_blank"
                    style={{ color: 'white' }}
                >
                    https://medium.com/@fahad19/using-rxjs-with-react-js-part-i-introduction-4d027ef55aa6
                </a>
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Handling UI events')} - {t('Creating observables')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Handling UI events')} - {t('Using observables')}
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Combining Redux and rxjs')} - ReduxObservable
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Combining Redux and rxjs')} - Epics
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Replacing Redux with rxjs')} - state$
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Replacing Redux with rxjs')} - action$
            </Heading>
            <Text>TODO</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Replacing Redux with rxjs')} - component$
            </Heading>
            <Text>TODO</Text>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Create fully reactive applications by combining react & rxjs": "Create fully reactive applications by combining react & rxjs",
            "What you will learn": "What you will learn",
            "Handling UI events": "Handling UI events",
            "Combining Redux and rxjs": "Combining Redux & rxjs",
            "Replacing Redux with rxjs": "Replacing Redux with rxjs",
            "Creating observables": "Creating observables",
            "Using observables": "Using observables"
        }
    },
    fr: {
        translation: {
            "Create fully reactive applications by combining react & rxjs": "Créer des applications 100% réactives à l'aide de react & rxjs",
            "What you will learn": "Objectif",
            "Handling UI events": "Gestion des UI events",
            "Combining Redux and rxjs": "Combiner Redux & rxjs",
            "Replacing Redux with rxjs": "Remplacer Redux par rxjs",
            "Creating observables": "Création des observables",
            "Using observables": "Utilisation des observables"
        }
    }
};