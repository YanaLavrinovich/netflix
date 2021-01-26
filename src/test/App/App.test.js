import {render} from '@testing-library/react';
import React from 'react'
import App from "../../App";


test('render App', () => {
    const {asFragment} = render(<App/>);

    expect(asFragment(<App/>)).toMatchSnapshot();
});
