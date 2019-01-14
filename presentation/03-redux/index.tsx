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
    reduxLogo: require('../../assets/redux-logo.png'),
    reduxArchitecture: require('../../assets/redux-architecture.png'),
    reduxVirtualDom: require('../../assets/redux-virtual-dom.png'),
};

const colors = {
    primary: '#282c34',
    secondary: '#61DAFB',
    tertiary: 'white',
    quaternary: '#CECECE',
    quinary: '#764ABC'
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
                <Image src={images.reactLogo} height={250} />
                <Image src={images.reduxLogo} height={250} />
            </div>

            <Heading margin="60px 0 0" size={1} fit caps lineHeight={1} textColor="secondary">
                {t('State management with')}
                <span> </span>
                <span style={{ color: '#764ABC' }}>Redux</span>
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
            <BlockQuote>
                <Quote textColor="quinary">A predictable state container for JavaScript apps</Quote>
            </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                {t('What is Redux?')}
            </Heading>
            <Image margin="40px auto" src={images.reduxArchitecture} height={450} />
            <Text textSize="20px" textColor="tertiary">
                <span>* Source</span>
                <span> - </span>
                <a
                    href="https://hackernoon.com/lessons-learned-implementing-redux-on-android-cba1bed40c41"
                    target="_blank"
                    style={{ color: 'white' }}
                >
                    https://hackernoon.com/lessons-learned-implementing-redux-on-android-cba1bed40c41
                </a>
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                Global State
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`{
    users: [...],
    orders: [...],
    currentUser: {
        id: '1234',
        name: 'John Doe'
    }
}`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                Actions
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`const Increment = () => {
    type: 'INCREMENT'
}`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`const AddTask = (task) => {
    type: 'ADD_TASK',
    task
}`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                Reducers
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`(state: State, action: Action) -> State`}>
                <LiveEditor readOnly={true} style={{ textAlign: 'center' }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                Reducers
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        default: 
            return state;
    }
}`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps fit>
                {t('Connecting state to')}
                <span> </span>
                <span style={{ color: colors.secondary }}>components</span>
            </Heading>
            <Image margin="40px auto" src={images.reduxVirtualDom} height={450} />
            <Text textSize="20px" textColor="tertiary">
                <span>* Source</span>
                <span> - </span>
                <a
                    href="https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/"
                    target="_blank"
                    style={{ color: 'white' }}
                >
                    https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/
                </a>
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps fit>
                {t('Connecting state to')}
                <span> </span>
                <span style={{ color: colors.secondary }}>components</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const App = ({ count, increment }) => (
    <div>
        <button>Decrement</button>
        {count}
        <button onClick={increment}>Increment</button>
    </div>
);

const mapStateToProps = state => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' })
    };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 18 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                DEMO - Counter
            </Heading>
            <LiveProvider style={{ margin: '20px 0' }} code={`const App = ({ count, increment, decrement }) => (
    <div>
        <button onClick={decrement}>Decrement</button>
        {count}
        <button onClick={increment}>Increment</button>
    </div>
);

const mapStateToProps = state => {
    return {
        count: state.count
    };
};
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    };
};
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        default: 
            return state;
    }
};

const initialState = { count: 0 };
const store = createStore(reducer, initialState);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 16 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                DEMO - Counter
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
)`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                {t('What is Redux?')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`connect |> dispatch |> reducer |> connect`}>
                <LiveEditor readOnly={true} style={{ textAlign: 'center' }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="quinary" caps>
                {t('What is Redux?')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`connect(state, dispatch)
    |> dispatch(action)
    |> reducer(state, action)
    |> connect(newState, dispatch)`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "State management with": "State management with",
            "An architecture that scale": "An architecture that scale",
            "What you will learn": "What you will learn",
            "What is Redux?": "What is Redux?",
            "Connecting state to": "Connecting state to"
        }
    },
    fr: {
        translation: {
            "State management with": "State management with",
            "An architecture that scale": "An architecture that scale",
            "What you will learn": "Objectif",
            "What is Redux?": "C'est quoi Redux ?",
            "Connecting state to": "Connexion entre state &"
        }
    }
};