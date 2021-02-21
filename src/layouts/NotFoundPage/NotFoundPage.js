import React, {useCallback} from 'react';
import {FooterLogo} from '../../components/FooterLogo/FooterLogo';
import {NETFLIX, ROULETTE} from '../common/constants';
import {Footer} from '../../components/Footer/Footer';
import {HeaderLogo} from '../../components/HeaderLogo/HeaderLogo';
import {NavBar} from '../../components/NavBar/NavBar';
import './styles.css'
import {BorderButton} from '../../components/BorderButton/BorderButton';
import {useHistory} from 'react-router-dom';
import {GO_BACK_TO_HOME, PAGE_NOT_FOUND} from './constants';

export default function NotFoundPage() {
    const history = useHistory()

    const handleClickBack = useCallback(() => {
        history.push('/')
    }, [history])

    return (
        <div className='not-found-layout'>
            <NavBar>
                <HeaderLogo><b>{NETFLIX}</b>{ROULETTE}</HeaderLogo>
            </NavBar>
            <div className='not-found-container'>
                <p className='not-found-label'>{PAGE_NOT_FOUND}</p>
                <div className='not-found-image'/>
                <BorderButton onClick={handleClickBack}>
                    {GO_BACK_TO_HOME}
                </BorderButton>
            </div>
            <Footer className='not-found-footer'>
                <FooterLogo>
                    <b>{NETFLIX}</b>{ROULETTE}
                </FooterLogo>
            </Footer>
        </div>
    )
}