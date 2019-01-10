import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { PresentationWithI18n as BeginningPresentation } from './01-beginning';

const presentations = [
    {
        key: 'introduction',
        name: 'Introduction',
        component: BeginningPresentation
    },
    {
        key: 'virtual-dom',
        name: 'Virtual DOM'
    },
    {
        key: 'state-management-with-redux',
        name: 'State management with Redux'
    },
    {
        key: 'routing',
        name: 'Routing'
    },
    {
        key: 'rxjs-react',
        name: 'rxjs + react'
    },
    {
        key: 'react-and-web-api',
        name: 'React & web API'
    },
    {
        key: 'styling',
        name: 'Styling (CSS-in-JS)',
        displayName: <div>Styling <br /> (CSS-in-JS)</div>
    },
    {
        key: 'sharing-ui-libraries',
        name: 'Sharing UI libraries (Storybook)'
    },
    {
        key: 'advanced-and-preview-features',
        name: 'Advanced & preview features'
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