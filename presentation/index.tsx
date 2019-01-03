import * as React from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

const {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} = require('react-live');

import createTheme from 'spectacle/lib/themes/default';

const images = {
  reactLogo: require('../assets/react-logo.png'),
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

require('normalize.css');

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

export const Presentation = () => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    theme={theme}
  >
    <Slide transition={['zoom']} bgColor="primary">
      <Image src={images.reactLogo} height={250} />
      <Heading margin="60px 0 0" size={1} fit caps lineHeight={1} textColor="secondary">
        React for beginners
      </Heading>
      <Text margin="40px 0 0" textColor="tertiary">
        An introduction to web development with React
      </Text>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        What you will learn
      </Heading>
      <List>
        <ListItem margin="20px 0" textSize="40px">What is React?</ListItem>
        <ListItem margin="20px 0" textSize="40px">DEMO #1 - Hello World!</ListItem>
        <ListItem margin="20px 0" textSize="40px">
          A deeper introduction
          <List margin="0 100px">
            <ListItem margin="10px 0" textSize="30px">jsx</ListItem>
            <ListItem margin="10px 0" textSize="30px">Functional component</ListItem>
            <ListItem margin="10px 0" textSize="30px">Functional vs class component</ListItem>
            <ListItem margin="10px 0" textSize="30px">Stateful components</ListItem>
            <ListItem margin="10px 0" textSize="30px">Component lifecycle</ListItem>
            <ListItem margin="10px 0" textSize="30px">Event handling</ListItem>
          </List>
        </ListItem>
        <ListItem margin="20px 0" textSize="40px">DEMO #2 - Todo List</ListItem>
      </List>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        What is React?
      </Heading>
      <List>
        <ListItem margin="20px 0" textSize="40px">Developed by Facebook since 2013</ListItem>
        <ListItem margin="20px 0" textSize="40px">Open Source</ListItem>
        <ListItem margin="20px 0" textSize="40px">
          1 simple goal: 
          <Cite margin="20px 40px">A JavaScript library for building user interfaces</Cite>
        </ListItem>
      </List>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        DEMO #1 - Hello World!
      </Heading>
      <div style={{ margin: '80px 0' }}>
        <LiveProvider code="render(<div>Hello World!</div>)" noInline={true}>
          <LiveEditor />
          <div style={{ margin: '20px 0 0 0' }}>
            <LiveError />
            <LivePreview />
          </div>
        </LiveProvider>
      </div>
    </Slide>

    <Slide bgColor="secondary">
      <Image src={images.formidagon} width={800} />
    </Slide>

    <Slide transition={['fade']} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Typography
      </Heading>
      <Heading size={1} textColor="secondary">
        Heading 1
      </Heading>
      <Heading size={2} textColor="secondary">
        Heading 2
      </Heading>
      <Heading size={3} textColor="secondary">
        Heading 3
      </Heading>
      <Heading size={4} textColor="secondary">
        Heading 4
      </Heading>
      <Heading size={5} textColor="secondary">
        Heading 5
      </Heading>
      <Text textColor="secondary">
        Standard text
      </Text>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Standard List
      </Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>

    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite margin="10px 0 0 30px">Author</Cite>
      </BlockQuote>
    </Slide>

    <Slide>
      <Image src={images.goodWork} width={500} />
      <Notes>gifs work too</Notes>
    </Slide>
  </Deck>
);