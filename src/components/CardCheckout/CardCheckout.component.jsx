import React from 'react';
import styled from 'styled-components';
import H from "../../assets/hermes.jpg";

const CardCheckout = () => {
    return (
        <CardCheckoutContainer>
            <ImgContainer>
            <img src={H} />
            </ImgContainer>
            <Item>Hello</Item>
            <Item>Hello</Item>
            <Item>Hello</Item>
            <Item>Hello</Item>

        </CardCheckoutContainer>

    )
}

export default CardCheckout;

const CardCheckoutContainer = styled.div`
width: 100%;
margin: 1rem 0;
display: flex;
align-items: center;
`;
const ImgContainer = styled.div`
width: 25%;
display: flex;
align-items: center;
img{
    width: 80%;
    height: 100%;
    

}
`;
const Item = styled.span`
font-size:1.3rem;
width:25%;
margin-right: 20px;
text-align:center;
font-family : 'Barlow-Regular', sans-serif;
`;
