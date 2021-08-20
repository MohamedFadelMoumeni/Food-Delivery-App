import React, {useState} from 'react';
import {HeaderContainer, Item, MenuImg} from './HeaderMobile.styles';
import Menu from '../../assets/Menu.svg';
const HeaderMobile = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <MenuImg src={Menu} onClick={() => setOpen(!open)}/>
        {
            open ?
            (
                <HeaderContainer>
                    <Item>Hello</Item>
                    <Item>Sign in</Item>
                    <Item>Sign up</Item>
                </HeaderContainer>

            ) : null
        }
        </>


    )
}

export default HeaderMobile;

