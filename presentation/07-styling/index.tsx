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
                {t('Styling (CSS-in-JS)')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('Design beautiful applications in React')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('Use CSS classes')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Apply inline styles')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Enhanced styling with Aphrodite')}</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Use CSS classes')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`.genericClass {
    color: '#123456',
    font-size: 22px
}`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
            <LiveProvider style={{ margin: '40px 0' }} code={`import './Component.css';
            
const Component = () => (
    <div className="genericClass">
        Content
    </div>
);`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Apply inline styles')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const Component = () => (
    <div 
        style={{ 
            color: '#123456', 
            fontSize: 22 
        }}
    >
        Content
    </div>
);`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Apply inline styles')} - variables
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const styles = {
    root: {
        color: '#123456', 
        fontSize: 22
    }
};
    
const Component = () => (
    <div style={styles.root}>
        Content
    </div>
);`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Enhanced styling with Aphrodite')} - CSS-in-JS
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
    }
});
    
const Component = () => (
    <div>
        <span className={css(styles.red)}>
            This is red.
        </span>
        <span className={css(styles.red, styles.blue)}>
            This is blue.
        </span>
    </div>
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 16 }} />
            </LiveProvider>
            <LiveProvider style={{ margin: '40px 0' }} code={`<div>
    <span class="red_1fdv34">
        This is red.
    </span>
    <span class="blue_bd12gs">
        This is blue.
    </span>
</div>`}>
                <LiveEditor readOnly={true} style={{ fontSize: 18 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Enhanced styling with Aphrodite')} - pseudo states
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const styles = StyleSheet.create({
    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    }
});
    
const Component = () => (
    <div>
        <span className={css(styles.hover)}>
            Turns red on hover.
        </span>
    </div>
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Enhanced styling with Aphrodite')} - media-queries
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const styles = StyleSheet.create({
    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red'
        }
    }
});
    
const Component = () => (
    <div>
        <span className={css(styles.small)}>
            Turns red when the browser is < 600px width.
        </span>
    </div>
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Enhanced styling with Aphrodite')} - keyframe animations
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const translateKeyframes = {
    '0%': {
        transform: 'translateX(0)'
    },
    '50%': {
        transform: 'translateX(100px)'
    },
    '100%': {
        transform: 'translateX(0)'
    }
};

const opacityKeyframes = {
    'from': {
        opacity: 0
    },
    'to': {
        opacity: 1
    }
};

const styles = StyleSheet.create({
    customAnimation: {
        animationName: [translateKeyframes, opacityKeyframes],
        animationDuration: '3s, 1200ms',
        animationIterationCount: 'infinite'
    }
});`}>
                <LiveEditor readOnly={true} style={{ fontSize: 18 }} />
            </LiveProvider>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Styling (CSS-in-JS)": "Styling (CSS-in-JS)",
            "Design beautiful applications in React": "Design beautiful applications in React",
            "Use CSS classes": "Use CSS classes",
            "Apply inline styles": "Apply inline styles",
            "Enhanced styling with Aphrodite": "Enhanced styling with Aphrodite"
        }
    },
    fr: {
        translation: {
            "Styling (CSS-in-JS)": "Styling (CSS-in-JS)",
            "Design beautiful applications in React": "Des applications web stylisées avec React",
            "Use CSS classes": "Utiliser des classes CSS",
            "Apply inline styles": "Appliquer un style inline",
            "Enhanced styling with Aphrodite": "Styles avancés avec Aphrodite"
        }
    }
};