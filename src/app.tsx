import { MantineProvider } from '@mantine/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/layout/Layout';

function render() {
    const root = createRoot(document.getElementById("root"));
    root.render(
        <MantineProvider withGlobalStyles withNormalizeCSS
            theme={{
                colorScheme: 'dark',
                // colors: {
                //     // Add your color
                //     deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
                //     // or replace default theme color
                //     blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
                // },

                // shadows: {
                //     md: '1px 1px 3px rgba(0, 0, 0, .25)',
                //     xl: '5px 5px 3px rgba(0, 0, 0, .25)',
                // },

                // headings: {
                //     fontFamily: 'Roboto, sans-serif',
                //     sizes: {
                //         h1: { fontSize: 30 },
                //     },
                // },
            }}
        >
            <Layout />
        </MantineProvider>
    );
}

render();