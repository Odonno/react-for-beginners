import * as React from 'react';
import { PresentationWithI18n as BeginningPresentation } from './01-beginning';

const presentations = [
    {
        name: 'Introduction',
        component: BeginningPresentation
    },
    {
        name: 'Virtual DOM'
    },
    {
        name: 'State management with Redux'
    },
    {
        name: 'Routing'
    },
    {
        name: 'rxjs + react'
    },
    {
        name: 'React & web API'
    },
    {
        name: 'Styling (CSS-in-JS)',
        displayName: <div>Styling <br /> (CSS-in-JS)</div>
    },
    {
        name: 'Sharing UI libraries (Storybook)'
    },
    {
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
                    <div 
                        key={p.name}
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
                            cursor: 'pointer'
                        }}
                    >
                        {p.displayName || p.name}
                    </div>
                );
            })}
        </div>
    </div>
);

export const Presentations = () => (
    <PresentationSelector />
);