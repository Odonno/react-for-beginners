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
            <Image src={images.reactLogo} height={250} />
            <Heading margin="60px 0 0" size={1} caps fit lineHeight={1} textColor="secondary">
                {t('Calling Web API')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('Create a dynamic web app working with Cloud services')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('Fetching data with axios')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Executing HTTP requests')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">{t('Handling side effects with redux-observable')}</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Fetching data with axios')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/tasks')
            .then(res => {
                this.setState({ tasks: res.data });
            });
    }

    render() {
        /* ... */
    }
}`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('Executing HTTP requests')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };
    }

    handleAddTask = (content) => {
        axios.post('http://localhost:8000/api/tasks/add', { content })
            .then(res => {
                this.setState({ 
                    tasks: this.state.tasks.concat([res.data]) 
                });
            });
    }
}`}>
                <LiveEditor readOnly={true} style={{ fontSize: 20 }} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Handling side effects with redux-observable')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const loadTasks = () => {
    type: 'LOAD_TASKS'
};

const loadTasksFulfilled = (tasks) => {
    type: 'LOAD_TASKS_FULFILLED',
    tasks
};

const loadTasksFailed = (error) => {
    type: 'LOAD_TASKS_FAILED',
    error
};`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                {t('Handling side effects with redux-observable')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`const loadTasksEpic = (action$) => action$.pipe(
    ofType('LOAD_TASKS'),
    mergeMap(_ => 
        ajax.getJSON('/api/tasks').pipe(
            map(response => loadTasksFulfilled(response)),
            catchError(error => of(loadTasksFailed(error))
        )
    )
);`}>
                <LiveEditor readOnly={true} style={{ fontSize: 26 }} />
            </LiveProvider>
        </Slide>
    </Deck>
);

export default withI18n()(Presentation);