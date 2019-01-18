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
    storybookLogo: require('../../assets/storybook-logo.svg'),
    storybookIntroduction: require('../../assets/storybook-introduction.gif')
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
                {t('Sharing UI components')}
            </Heading>
            <Text margin="40px 0 0" textColor="tertiary">
                {t('A storybook of your components')}
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Image src={images.storybookLogo} />
            <BlockQuote style={{ marginTop: 60 }}>
                <Quote textColor="tertiary" style={{ fontSize: 46, textAlign: 'center' }}>
                    The UI Development Environment<br /><br />
                    You'll ♥️ to use
                </Quote>
            </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <Image src={images.storybookIntroduction} height={500} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <iframe
                src="https://release-3-4--storybooks-official.netlify.com/?knob-Dollars=12.5&knob-Name=Storyteller&knob-Text=Menu%20link%20item&knob-Years%20in%20NY=9&knob-background=%23ffff00&knob-Age=70&knob-Items%5B0%5D=Laptop&knob-Items%5B1%5D=Book&knob-Items%5B2%5D=Whiskey&knob-Color=%23ffff00&knob-Other%20Fruit=lime&knob-Container%20width=90&knob-Account%20Balance=12.5&knob-Birthday=1484870400000&knob-Nice=true&knob-Styles=%7B%22border%22%3A%223px%20solid%20%23ff00ff%22%2C%22padding%22%3A%2210px%22%7D&knob-Fruit=apple&knob-Active=true&selectedKind=ui%2FSearchBox&selectedStory=with%20stories&full=1&addons=0&stories=0&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel"
                style={{ width: 1000, maxWidth: 'none', height: 600, border: 0, borderRadius: 4, overflow: 'hidden' }}
            />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <iframe
                src="https://release-3-4--storybooks-official.netlify.com/?knob-Dollars=12.5&knob-Name=Storyteller&knob-Text=Menu%20link%20item&knob-Years%20in%20NY=9&knob-background=%23ffff00&knob-Age=70&knob-Items%5B0%5D=Laptop&knob-Items%5B1%5D=Book&knob-Items%5B2%5D=Whiskey&knob-Color=%23ffff00&knob-Other%20Fruit=lime&knob-Container%20width=90&knob-Account%20Balance=12.5&knob-Birthday=1484870400000&knob-Nice=true&knob-Styles=%7B%22border%22%3A%223px%20solid%20%23ff00ff%22%2C%22padding%22%3A%2210px%22%7D&knob-Fruit=apple&knob-Active=true&selectedKind=ui%2FSearchBox&selectedStory=with%20stories&full=0&addons=1&stories=0&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel"
                style={{ width: 1000, maxWidth: 'none', height: 600, border: 0, borderRadius: 4, overflow: 'hidden' }}
            />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
            <iframe
                src="https://release-3-4--storybooks-official.netlify.com/?knob-Dollars=12.5&knob-Name=Storyteller&knob-Text=Menu%20link%20item&knob-Years%20in%20NY=9&knob-background=%23ffff00&knob-Age=70&knob-Items%5B0%5D=Laptop&knob-Items%5B1%5D=Book&knob-Items%5B2%5D=Whiskey&knob-Color=%23ffff00&knob-Other%20Fruit=lime&knob-Container%20width=90&knob-Account%20Balance=12.5&knob-Birthday=1484870400000&knob-Nice=true&knob-Styles=%7B%22border%22%3A%223px%20solid%20%23ff00ff%22%2C%22padding%22%3A%2210px%22%7D&knob-Fruit=apple&knob-Active=true&selectedKind=ui%2FSearchBox&selectedStory=with%20stories&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Fstories%2Fstories-panel"
                style={{ width: 1000, maxWidth: 'none', height: 600, border: 0, borderRadius: 4, overflow: 'hidden' }}
            />
        </Slide>
    </Deck>
);

export default withI18n()(Presentation);