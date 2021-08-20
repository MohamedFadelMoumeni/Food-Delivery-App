import React from "react";
import styled from "styled-components";

const Checkout = () => {
    return (
        <CheckoutContainer>
            <Title>Checkout</Title>

        </CheckoutContainer>

    )
}

export default Checkout;

const CheckoutContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title = styled.span`
font-weight: bold;
color: #000;
font-size: 3rem;
margin-bottom: 3rem;
font-family : 'Barlow-Medium', sans-serif;
`;