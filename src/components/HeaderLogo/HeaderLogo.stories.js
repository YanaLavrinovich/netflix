import React from 'react';
import {array, withKnobs} from '@storybook/addon-knobs';
import {HeaderLogo} from "./HeaderLogo";

const HeaderLogoStory =  {
    title: 'Components/HeaderLogo',
    component: HeaderLogo,
    decorators: [withKnobs],
}

export default HeaderLogoStory

export const Primary = () => (
    <HeaderLogo>
        {array('Children', ['Hello Storybook'])}
    </HeaderLogo>
);