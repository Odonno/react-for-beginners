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
            <LiveProvider style={{ margin: '40px 0' }} code={`const AppRouter = (props) => {
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
            <LiveProvider style={{ margin: '40px 0' }} code={`const AppRouter = (props) => {
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
            <LiveProvider style={{ margin: '40px 0' }} code={`const AppRouter = () => (
    <Router>
        <div>
            <NavBar />

            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
        </div>
    </Router>
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('React Router Components')}</span>
                <span> - </span>
                <span>Switch</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const AppRouter = () => (
    <Router>
        <div>
            <NavBar />

            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/:name" component={Other} />
            </Switch>
        </div>
    </Router>
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                <span>{t('React Router Components')}</span>
                <span> - </span>
                <span>(Nav)Link</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <NavLink 
                    to="/users" 
                    activeClassName="selected"
                >
                    Users
                </Link>
            </li>
        </ul>
    </nav>
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                <span>{t('React Router Components')}</span>
                <span> - </span>
                <span>{t('initialization')}</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('Redux integration')}</span>
                <span> - </span>
                <span>navigate to</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const Component = (props) => (
    <nav>
        <ul>
            <li>
                <div onClick={() => props.push('/home')}>
                    Home
                </div>
            </li>
            <li>
                <div onClick={() => props.push('/about')}>
                    About
                </div>
            </li>
        </ul>
    </nav>
);

connect(null, { push })(Component);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 18 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                <span>{t('Redux integration')}</span>
                <span> - </span>
                <span>go back</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const OtherComponent = (props) => (
    <div onClick={() => props.goBack()}>
        Go back
    </div>
);

connect(null, { goBack })(OtherComponent);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                <span>{t('Redux integration')}</span>
                <span> - </span>
                <span>{t('initialization')}</span>
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>
    </Deck>
);

export default withI18n()(Presentation);