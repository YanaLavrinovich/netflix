import React from 'react';
import {render} from '@testing-library/react'
import {Footer} from '../Footer';
import {NETFLIX, ROULETTE} from '../../../layouts/common/constants';
import {FooterLogo} from '../../FooterLogo/FooterLogo';


describe('footer', () => {
    it('render footer', () => {
        const {asFragment} = render(<Footer>
            <FooterLogo>
                <b>{NETFLIX}</b>{ROULETTE}
            </FooterLogo>
        </Footer>)

        expect(asFragment()).toMatchSnapshot()
    })
})