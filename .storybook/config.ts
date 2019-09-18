import { configure, addParameters } from '@storybook/react';
import oh from 'output-helpers';
import { dictionary } from '../src/text';

if (!(window as any).has_run) {
    oh.setConfig({
        lang: 'sv-SE',
    });
    oh.addDictionary(dictionary);

    (window as any).has_run = true;
}

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

addParameters({
    backgrounds: [{ name: 'white', value: '#ffffff', default: true }],
});

configure(loadStories, module);
