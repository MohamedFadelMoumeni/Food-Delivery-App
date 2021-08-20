import React from 'react';
import styled from 'styled-components';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Linkedin from '../../assets/linkedin.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <Brand>&copy; 2021 FoodDelivery, Inc</Brand>
            <SocialContainer>
                <img src={Facebook} />
                <img src={Linkedin} />
                <img src={Instagram} />
            </SocialContainer>
        </FooterContainer>

    )
}
export default Footer;

const FooterContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background: #f1f1f1;
padding: 2rem;
margin-top: 3rem;
justify-self: flex-end;

`;
const Brand  =styled.span`
font-size: 1.6rem;
font-family: 'Barlow-Regular', sans-serif;
`;
const SocialContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
img{
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1rem;
    cursor: pointer;
}
`;
