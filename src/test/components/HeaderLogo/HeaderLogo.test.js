import React from "react";
import {render} from '@testing-library/react'
import {HeaderLogo} from "../../../components/HeaderLogo/HeaderLogo";
import {NETFLIX, ROULETTE} from "../../../layouts/common/constants";


describe('header logo', () => {
    it('render header logo', () => {
        const {getByText} = render(<HeaderLogo>
            <b>{NETFLIX}</b>{ROULETTE}
        </HeaderLogo>)

        expect(getByText('netflix')).toBeInTheDocument()
        expect(getByText('roulette')).toBeInTheDocument()
    })
})