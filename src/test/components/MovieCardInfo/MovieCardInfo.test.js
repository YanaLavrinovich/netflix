import React from "react";
import {render} from '@testing-library/react'
import {MovieCardInfo} from "../../../components/MovieCardInfo/MovieCardInfo";
import {MOVIE} from "../../utils/constants";

describe('movie card info', () => {
    it('render movie card info', () => {
        const {getByText} = render(<MovieCardInfo
            movie={MOVIE}
        />)

        expect(getByText(MOVIE.title)).toBeInTheDocument()
        expect(getByText('2018')).toBeInTheDocument()
        expect(getByText(MOVIE.tagline)).toBeInTheDocument()
    })
})