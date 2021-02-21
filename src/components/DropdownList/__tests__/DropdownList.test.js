import React from 'react';
import {render} from '@testing-library/react'
import {DropdownList} from '../DropdownList';


describe('dropdown list', () => {
    it('render dropdown list',() => {
        const onCheckboxChange = jest.fn()

        const {getByDisplayValue} = render(<DropdownList
            options={['Drama', 'Romance', 'Comedy']}
            name='genres'
            value={['Drama']}
            onCheckboxChange={onCheckboxChange}
        />)

        expect(getByDisplayValue('Drama')).toBeInTheDocument()
        expect(getByDisplayValue('Drama').checked).toBeTruthy()
        expect(getByDisplayValue('Romance')).toBeInTheDocument()
        expect(getByDisplayValue('Comedy')).toBeInTheDocument()
    })
})