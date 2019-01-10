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
    Text
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
    dom: require('../../assets/dom.png'),
    virtualDom: require('../../assets/virtual-dom.png'),
};

const theme = createTheme(
    {
        primary: '#282c34',
        secondary: '#61DAFB',
        tertiary: 'white',
        quaternary: '#CECECE'
    },
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
            <Heading margin="60px 0 0" size={1} fit caps lineHeight={1} textColor="secondary">
                {t('Virtual DOM')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('How to create a dynamic web page')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What you will learn')}
            </Heading>
            <List>
                <ListItem margin="20px 0" textSize="40px">{t('What is DOM?')}</ListItem>
                <ListItem margin="20px 0" textSize="40px">DOM vs Virtual DOM</ListItem>
                <ListItem margin="20px 0" textSize="40px">(Virtual) DOM nodes</ListItem>
                <ListItem margin="20px 0" textSize="40px">diff & patch</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                {t('What is DOM?')}
            </Heading>
            <Image margin="40px auto" src={images.dom} height={450} />
            <Text textSize="20px" textColor="tertiary">
                <span>* Source</span>
                <span> - </span>
                <a
                    href="http://cs.wellesley.edu/~cs110/reading/DOM-JQ.html"
                    target="_blank"
                    style={{ color: 'white' }}
                >
                    http://cs.wellesley.edu/~cs110/reading/DOM-JQ.html
                </a>
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                DOM vs Virtual DOM
            </Heading>
            <Image margin="40px auto" src={images.virtualDom} height={450} />
            <Text textSize="20px" textColor="tertiary">
                <span>* Source</span>
                <span> - </span>
                <a
                    href="https://mfrachet.github.io/create-frontend-framework/vdom/intro.html"
                    target="_blank"
                    style={{ color: 'white' }}
                >
                    https://mfrachet.github.io/create-frontend-framework/vdom/intro.html
                </a>
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                (Virtual) DOM nodes - {t('node creation')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`h(type: string, props: {}, children: [])
    -> VTree`}>
                <LiveEditor />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                (Virtual) DOM nodes - {t('simple nodes')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`h(
    'h1', // type
    { className: 'heading-strong' } // props
);`}>
                <LiveEditor />
            </LiveProvider>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`<h1 className="heading-strong" />`}>
                <LiveEditor />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps fit>
                (Virtual) DOM nodes - {t('nodes with children')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`h(
    'ul', // type
    { className: 'list' }, // props
    [ // children
        h('li', {}, ['Task #1']),
        h('li', {}, ['Task #2'])
    ]
);`}>
                <LiveEditor />
            </LiveProvider>
            <LiveProvider style={{ margin: '40px 0' }} readOnly={true} code={`<ul className="list">
    <li>Task #1</li>
    <li>Task #2</li>
</ul>`}>
                <LiveEditor />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                diff & patch - {t('the diff function')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`diff(previous: VTree, current: VTree)
    -> PatchObject`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                diff & patch - {t('the patch function')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`patch(root: DOMNode, patches: PatchObject)
    -> DOMNode`}>
                <LiveEditor readOnly={true} />
            </LiveProvider>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>
                diff & patch - {t('updating the DOM')}
            </Heading>
            <LiveProvider style={{ margin: '40px 0' }} code={`h > diff > patch`}>
                <LiveEditor readOnly={true} style={{ textAlign: 'center' }} />
            </LiveProvider>
            <Image margin="40px auto" src={images.virtualDom} height={450} />
        </Slide>
    </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);

export const resources = {
    en: {
        translation: {
            "Virtual DOM": "Virtual DOM",
            "How to create a dynamic web page": "How to create a dynamic web page?",
            "What you will learn": "What you will learn",
            "What is DOM?": "What is DOM?",
            "node creation": "node creation",
            "simple nodes": "simple nodes",
            "nodes with children": "nodes with children",
            "the diff function": "the diff function",
            "the patch function": "the patch function",
            "updating the DOM": "updating the DOM"
        }
    },
    fr: {
        translation: {
            "Virtual DOM": "Virtual DOM",
            "How to create a dynamic web page": "La création de pages web dynamiques",
            "What you will learn": "Objectif",
            "What is DOM?": "C'est quoi le DOM ?",
            "node creation": "la création d'un node",
            "simple nodes": "un node simple",
            "nodes with children": "nodes avec enfants",
            "the diff function": "la fonction diff",
            "the patch function": "la fonction patch",
            "updating the DOM": "rafraîchir le DOM"
        }
    }
};