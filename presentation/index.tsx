import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BeginningPresentation from './01-beginning';
import VirtualDomPresentation from './02-virtual-dom';
import ReduxPresentation from './03-redux';
import RoutingPresentation from './04-routing';
import RxjsReactPresentation from './05-rxjs-react';
import ReactAndWebApiPresentation from './06-web-api';
import StylingPresentation from './07-styling';
import StorybookPresentation from './08-storybook';
import AdvancedAndPreviewFeaturesPresentation from './09-advanced-preview-features';

const presentations = [
    {
        key: 'introduction',
        name: 'Introduction',
        component: BeginningPresentation
    },
    {
        key: 'virtual-dom',
        name: 'Virtual DOM',
        component: VirtualDomPresentation
    },
    {
        key: 'state-management-with-redux',
        name: 'State management with Redux',
        component: ReduxPresentation
    },
    {
        key: 'routing',
        name: 'Routing',
        component: RoutingPresentation
    },
    {
        key: 'rxjs-react',
        name: 'rxjs + react',
        component: RxjsReactPresentation
    },
    {
        key: 'react-and-web-api',
        name: 'React & web API',
        component: ReactAndWebApiPresentation
    },
    {
        key: 'styling',
        name: 'Styling (CSS-in-JS)',
        displayName: <div>Styling <br /> (CSS-in-JS)</div>,
        component: StylingPresentation
    },
    {
        key: 'sharing-ui-components',
        name: 'Sharing UI components (Storybook)',
        component: StorybookPresentation
    },
    {
        key: 'advanced-and-preview-features',
        name: 'Advanced & preview features',
        component: AdvancedAndPreviewFeaturesPresentation
    }
];

const PresentationSelector = () => (
    <div style={{
        backgroundColor: '#282c34',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }}
    >
        <div
            style={{
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '40px',
                gridAutoRows: '1fr'
            }}
        >
            {presentations.map(p => {
                const isAvailable = !!p.component;
                return (
                    <Link
                        to={'/' + p.key}
                        key={p.key}
                        style={{
                            backgroundColor: 'white',
                            padding: '40px',
                            color: isAvailable ? '#61DAFB' : '#CECECE',
                            fontWeight: 'bold',
                            fontSize: 40,
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            fontFamily: 'Montserrat',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        {p.displayName || p.name}
                    </Link>
                );
            })}
        </div>
    </div>
);

export const Presentations = () => (
    <Router>
        <div>
            <Route path="/" exact component={PresentationSelector} />

            {presentations.map(p => 
                <Route key={p.key} path={'/' + p.key} component={p.component} />
            )}
        </div>
    </Router>
);