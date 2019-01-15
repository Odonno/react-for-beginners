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
    rxjsReactRelation: require('../../assets/rxjs-react-relation.png'),
    reduxObservableLogo: require('../../assets/redux-observable-logo.gif')
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
                <ListItem margin="20px 0" textSize="40px">{t('Handling UI events with observable')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Combining Redux and rxjs')}</ListItem>
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
            <LiveProvider style={{ margin: '40px 0' }} code={`class SearchComponent extends React.Component {
    private search$: Subject<string>;

    constructor(props) {
        super(props);

        this.search$ = new Subject();

        this.state = {
            results: []
        };
    }

    componentDidMount() {
        this.search$.pipe(
            debounceTime(300),
            distinctUntilChanged()
        ).subscribe(search => {
            if (!search) {
                this.setState({ results: [] });
            }
            this.setState({
                results: this.props.values.filter(value => value.includes(search))
            });
        });
    }

    componentWillUnmount() {
        this.search$.unsubscribe();
    }
};`}>
                <LiveEditor readOnly={true} style={{ fontSize: 16 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Handling UI events')} - {t('Using observables')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`class SearchComponent extends React.Component {
    private search$: Subject<string>;
    
    render() {
        return (
            <div>
                <input 
                    type="text"
                    onChange={e => this.search$.next(e.target.value)}
                />

                <ul className="resultList">
                    {this.state.results.map((result, index) =>
                        <li key={index}>{result}</li>
                    )}
                </ul>
            </div>
        );
    }
};`}>
                <LiveEditor readOnly={true} style={{ fontSize: 18 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" textColor="tertiary">
            <Image src={images.reduxObservableLogo} />

            <BlockQuote style={{ width: 1100, marginTop: 60 }}>
                <Quote textColor="quinary">
                    Compose and cancel async actions to create side effects and more.
                </Quote>
            </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Combining Redux and rxjs')} - Epic function
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`(
    action$: Observable<Action>, 
    state$: StateObservable<State>
)
    -> Observable<Action>`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Combining Redux and rxjs')} - A basic example
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const pingEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    mapTo({ type: 'PONG' })
);

dispatch({ type: 'PING' });`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Combining Redux and rxjs')} - Side effects
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const pingEpic = action$ => action$.pipe(
    ofType('PING'),
    delay(1000), // wait 1s then continue
    mapTo({ type: 'PONG' })
);`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Combining Redux and rxjs')} - {t('initialization')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const epics = []; // all epic functions

const configureStore = () => {
    const epicMiddleware = createEpicMiddleware(
        combineEpics(...epics)
    );

    const store = createStore(
        reducers,
        applyMiddleware(epicMiddleware)
    );

    return store;
};`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Create fully reactive applications by combining react & rxjs": "Create fully reactive applications by combining react & rxjs",
            "What you will learn": "What you will learn",
            "Handling UI events with observable": "Handling UI events with observable",
            "Combining Redux and rxjs": "Combining Redux & rxjs",
            "Creating observables": "Creating observables",
            "Using observables": "Using observables",
            "initialization": "initialization"
        }
    },
    fr: {
        translation: {
            "Create fully reactive applications by combining react & rxjs": "Créer des applications 100% réactives à l'aide de react & rxjs",
            "What you will learn": "Objectif",
            "Handling UI events with observable": "Gestion des UI events avec des observables",
            "Combining Redux and rxjs": "Combiner Redux & rxjs",
            "Creating observables": "Création des observables",
            "Using observables": "Utilisation des observables",
            "initialization": "initialisation"
        }
    }
};