import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const BeginningPresentation = React.lazy(() => import('./01-beginning'));
const VirtualDomPresentation = React.lazy(() => import('./02-virtual-dom'));
const ReduxPresentation = React.lazy(() => import('./03-redux'));
const RoutingPresentation = React.lazy(() => import('./04-routing'));
const RxjsReactPresentation = React.lazy(() => import('./05-rxjs-react'));
const ReactAndWebApiPresentation = React.lazy(() => import('./06-web-api'));
const StylingPresentation = React.lazy(() => import('./07-styling'));
const StorybookPresentation = React.lazy(() => import('./08-storybook'));
const AdvancedAndPreviewFeaturesPresentation = React.lazy(() => import('./09-advanced-preview-features'));

const presentations = [
    {
        key: 'introduction',
        name: 'Introduction',
        component: BeginningPresentation,
        isAvailable: true
    },
    {
        key: 'virtual-dom',
        name: 'Virtual DOM',
        component: VirtualDomPresentation,
        isAvailable: true
    },
    {
        key: 'state-management-with-redux',
        name: 'State management with Redux',
        component: ReduxPresentation,
        isAvailable: true
    },
    {
        key: 'routing',
        name: 'Routing',
        component: RoutingPresentation,
        isAvailable: true
    },
    {
        key: 'rxjs-react',
        name: 'rxjs + react',
        component: RxjsReactPresentation,
        isAvailable: true
    },
    {
        key: 'react-and-web-api',
        name: 'React & web API',
        component: ReactAndWebApiPresentation,
        isAvailable: true
    },
    {
        key: 'styling',
        name: 'Styling (CSS-in-JS)',
        displayName: <div>Styling <br /> (CSS-in-JS)</div>,
        component: StylingPresentation,
        isAvailable: true
    },
    {
        key: 'sharing-ui-components',
        name: 'Sharing UI components (Storybook)',
        component: StorybookPresentation,
        isAvailable: true
    },
    {
        key: 'advanced-and-preview-features',
        name: 'Advanced & preview features',
        component: AdvancedAndPreviewFeaturesPresentation,
        isAvailable: true
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
                return (
                    <Link
                        to={'/' + p.key}
                        key={p.key}
                        style={{
                            backgroundColor: 'white',
                            padding: '40px',
                            color: p.isAvailable ? '#61DAFB' : '#CECECE',
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
        <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path="/" exact component={PresentationSelector} />

                {presentations.map(p =>
                    <Route
                        key={p.key}
                        path={'/' + p.key}
                        component={p.component}
                    />
                )}
            </Switch>
        </React.Suspense>
    </Router>
);