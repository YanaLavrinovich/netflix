import React from "react";
import {render} from '@testing-library/react'
import {GenreButton} from "../../../components/GenreButton/GenreButton";


describe('genre button', () => {
    it('render nonActive genre button', () => {
        const onClick = jest.fn()

        const {asFragment} = render(<GenreButton
            onClick={onClick}
            isActive={false}
        >
            DRAMA
        </GenreButton>)

        expect(asFragment(<GenreButton
            onClick={onClick}
            isActive={true}
        >
            DRAMA
        </GenreButton>)).toMatchSnapshot()
    })
})