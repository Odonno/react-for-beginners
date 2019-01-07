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
  reactLogo: require('../assets/react-logo.png'),
  reactLifecycle1: require('../assets/react-lifecycle-1.png'),
  reactLifecycle2: require('../assets/react-lifecycle-2.png')
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

const Presentation = ({ t }) => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    theme={theme}
  >
    <Slide transition={['zoom']} bgColor="primary">
      <Image src={images.reactLogo} height={250} />
      <Heading margin="60px 0 0" size={1} fit caps lineHeight={1} textColor="secondary">
        {t('React for beginners')}
      </Heading>
      <Text margin="40px 0 0" textColor="tertiary">
        {t('An introduction to web development with React')}
      </Text>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        {t('What you will learn')}
      </Heading>
      <List>
        <ListItem margin="20px 0" textSize="40px">{t('What is React?')}</ListItem>
        <ListItem margin="20px 0" textSize="40px">DEMO #1 - Hello World!</ListItem>
        <ListItem margin="20px 0" textSize="40px">
          {t('A deeper introduction')}
          <List margin="0 100px">
            <ListItem margin="10px 0" textSize="30px">jsx</ListItem>
            <ListItem margin="10px 0" textSize="30px">Functional components</ListItem>
            <ListItem margin="10px 0" textSize="30px">Functional vs class components</ListItem>
            <ListItem margin="10px 0" textSize="30px">Stateful components</ListItem>
            <ListItem margin="10px 0" textSize="30px">{t('Component lifecycle')}</ListItem>
            <ListItem margin="10px 0" textSize="30px">{t('Event handling')}</ListItem>
          </List>
        </ListItem>
        <ListItem margin="20px 0" textSize="40px">DEMO #2 - Todo List</ListItem>
      </List>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
      {t('What is React?')}
      </Heading>
      <List>
        <ListItem margin="20px 0" textSize="40px">{t('Developed by Facebook since 2013')}</ListItem>
        <ListItem margin="20px 0" textSize="40px">Open Source</ListItem>
        <ListItem margin="20px 0" textSize="40px">
          {t('1 simple goal')}
          <Cite margin="20px 40px">A JavaScript library for building user interfaces</Cite>
        </ListItem>
      </List>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        DEMO #1 - Hello World!
      </Heading>
      <LiveProvider style={{ margin: '80px 0' }} code="render(<div>Hello World!</div>);" noInline={true}>
        <LiveEditor />
        <div style={{ margin: '20px 0 0 0' }}>
          <LiveError />
          <LivePreview />
        </div>
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps fit>
        jsx - {t('combining HTML and JS together')}
      </Heading>
      <LiveProvider style={{ margin: '40px 0' }} code={`const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);`}>
        <LiveEditor />
      </LiveProvider>
      <LiveProvider style={{ margin: '40px 0' }} code={`const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);`}>
        <LiveEditor />
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Functional components
      </Heading>
      <LiveProvider style={{ margin: '80px 0' }} code={`const HelloWorld = 
  (props) => <div>Hi {props.name}!</div>;

render(<HelloWorld name="world" />);`} noInline={true}>
        <LiveEditor />
        <div style={{ margin: '20px 0 0 0' }}>
          <LiveError />
          <LivePreview />
        </div>
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Functional vs class components
      </Heading>
      <LiveProvider style={{ margin: '40px 0' }} code={`const HelloWorld = 
  (props) => <div>Hi {props.name}!</div>;`}>
        <LiveEditor />
      </LiveProvider>
      <LiveProvider style={{ margin: '40px 0' }} noInline={true} code={`class HelloWorld extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}`}>
        <LiveEditor />
        <div style={{ margin: '20px 0 0 0' }}>
          <LiveError />
          <LivePreview />
        </div>
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Stateful components
      </Heading>
      <LiveProvider style={{ margin: '40px 0' }} code={`class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    
    this.increment = () => {
      this.setState({ count: this.state.count + 1 });
    }    
    this.decrement = () => {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <center>  
        <button onClick={this.decrement}>-1</button>      
        <span style={{ fontWeight: 'bold', margin: 20 }}>{this.state.count}</span>       
        <button onClick={this.increment}>+1</button> 
      </center>
    );
  }
}`}>
        <LiveEditor style={{ fontSize: 18 }} />
        <div style={{ margin: '20px 0 0 0' }}>
          <LiveError />
          <LivePreview />
        </div>
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        {t('Component lifecycle')}
      </Heading>
      <Image margin="40px auto" src={images.reactLifecycle1} height={450} />
      <Text textSize="20px" textColor="tertiary">
        <span>* Source</span>
        <span> - </span>
        <a 
          href="https://www.codevoila.com/post/57/reactjs-tutorial-react-component-lifecycle" 
          target="_blank"
          style={{ color: 'white' }}
        >
          https://www.codevoila.com/post/57/reactjs-tutorial-react-component-lifecycle
        </a>
      </Text>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        {t('Component lifecycle')}
      </Heading>
      <Image margin="40px auto" src={images.reactLifecycle2} height={450} />
      <Text textSize="20px" textColor="tertiary">
        <span>* Source</span>
        <span> - </span>
        <a 
          href="https://medium.com/@kartikagarwal01/react-component-lifecycle-old-vs-new-32757aee5850" 
          target="_blank"
          style={{ color: 'white' }}
        >
          https://medium.com/@kartikagarwal01/react-component-lifecycle-old-vs-new-32757aee5850
        </a>
      </Text>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        {t('Event handling')}
      </Heading>
      <LiveProvider style={{ margin: '40px 0' }} code={`class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    
    this.increment = (e) => {
      this.setState({ count: this.state.count + 1 });
    }    
    this.decrement = (e) => {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <center>  
        <button onClick={this.decrement}>-1</button>      
        <span style={{ fontWeight: 'bold', margin: 20 }}>{this.state.count}</span>       
        <button onClick={this.increment}>+1</button> 
      </center>
    );
  }
}`}>
        <LiveEditor style={{ fontSize: 18 }} />
        <div style={{ margin: '20px 0 0 0' }}>
          <LiveError />
          <LivePreview />
        </div>
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        DEMO #2 - Todo List
      </Heading><LiveProvider style={{ margin: '40px 0' }} code={`class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
    
    this.addTask = (task) => {
      this.setState({ tasks: tasks.concat(task) });
    }
  }

  render() {
    return (
      <div>  
        <Tasks tasks={this.state.tasks} />      
        <AddTodoForm handleAddTask={this.addTask} /> 
      </div>
    );
  }
}`}>
        <LiveEditor style={{ fontSize: 18 }} />
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        DEMO #2 - Todo List
      </Heading><LiveProvider style={{ margin: '40px 0' }} code={`const Tasks = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => 
        <li key={index}>{task.content}</li>
      )}
    </ul>
  );
}`}>
        <LiveEditor style={{ fontSize: 18 }} />
      </LiveProvider>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        DEMO #2 - Todo List
      </Heading><LiveProvider style={{ margin: '40px 0' }} code={`class AddTodoForm extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
    
    this.handleChange = (e) => {
      this.setState({ text: e.target.value });
    }
    this.handleSubmit = () => {
      this.props.handleAddTask({ content: this.state.text });
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.text} 
          onChange={this.handleChange} 
          placeholder="Add a new task" 
        />
      </form>
    );
  }
}`}>
        <LiveEditor style={{ fontSize: 18 }} />
      </LiveProvider>
    </Slide>

<Slide transition={['fade']} bgColor="primary" textColor="tertiary">
  <Heading size={6} textColor="secondary" caps>
    DEMO #2 - Todo List
  </Heading><LiveProvider style={{ margin: '40px 0' }} noInline={true} code={`const Tasks = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => 
        <li key={index}>{task.content}</li>
      )}
    </ul>
  );
}

class AddTodoForm extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };

    this.handleChange = (e) => {
      this.setState({ text: e.target.value });
    }
    this.handleSubmit = () => {
      this.props.handleAddTask({ content: this.state.text });
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.text} 
          onChange={this.handleChange} 
          placeholder="Add a new task" 
        />
      </form>
    );
  }
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
    
    this.addTask = (task) => {
      this.setState({ tasks: this.state.tasks.concat(task) });
    }
  }

  render() {
    return (
      <div>  
        <Tasks tasks={this.state.tasks} />      
        <AddTodoForm handleAddTask={this.addTask} /> 
      </div>
    );
  }
}

render(<TodoList />);`}>
        <div style={{ margin: '20px 0 0 0' }}>
          <LiveError />
          <LivePreview />
        </div>
      </LiveProvider>
    </Slide>
  </Deck>
);

export const PresentationWithI18n = withI18n()(Presentation);