import React from "react";
import {render} from '@testing-library/react'
import {CloseButton} from "../../../components/CloseButton/CloseButton";


describe('close button', () => {
    it('render close button', () => {
        const onClick = jest.fn()

        const {asFragment} = render(<CloseButton
            onClick={onClick}
        />)

        expect(asFragment(<CloseButton
            onClick={onClick}
        />)).toMatchSnapshot()
    })
})