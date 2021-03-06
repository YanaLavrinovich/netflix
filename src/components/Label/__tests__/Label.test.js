import {render} from '@testing-library/react';
import React from 'react'
import {Label} from '../Label';

const labelText = 'Label Text'

test('render Label', () => {
    const {asFragment} = render(<Label>{labelText}</Label>);

    expect(asFragment()).toMatchSnapshot();
});
