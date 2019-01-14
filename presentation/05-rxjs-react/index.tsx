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
    rxLogo: require('../../assets/rx-logo.png')
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
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Create fully reactive applications by combining react & rxjs": "Create fully reactive applications by combining react & rxjs"
        }
    },
    fr: {
        translation: {
            "Create fully reactive applications by combining react & rxjs": "Créer des applications 100% réactives à l'aide de react & rxjs"
        }
    }
};