import {render} from '@testing-library/react';
import React from 'react'
import {Label} from "../../../components/Label/Label";

const labelText = 'Label Text'

test('renders Label', () => {
    const {asFragment} = render(<Label>{labelText}</Label>);

    expect(asFragment(<Label>{labelText}</Label>)).toMatchSnapshot();
});
