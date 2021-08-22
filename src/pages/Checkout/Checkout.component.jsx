import React from "react";
import styled from "styled-components";
import CardCheckout from "../../components/CardCheckout/CardCheckout.component";

const Checkout = () => {
    return (
        <CheckoutContainer>
             <TableContainer>
            <Title>Checkout</Title>
           
                <Top>
                    <Topspan>Product</Topspan>
                    <Topspan>Description</Topspan>
                    <Topspan>Quantity</Topspan>
                    <Topspan>Price</Topspan>
                    <Topspan>Remove</Topspan>
                </Top>
                <CardCheckout />
                <CardCheckout />
            </TableContainer>

        </CheckoutContainer>

    )
}

export default Checkout;

const CheckoutContainer = styled.div`
width: 100%;

`;
const Title = styled.span`
font-weight: bold;
color: #000;
font-size: 3rem;
font-family : 'Barlow-Medium', sans-serif;
`;
const TableContainer =styled.div`
max-width:1200px;
margin: auto;

`;
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: .5px solid #000;
padding-bottom:8px;
font-family : 'Barlow-Regular', sans-serif;
margin-top: 3rem;
`;
const Topspan= styled.span`
font-size:1.3rem;
width:25%;
margin-right:20px;
text-align:center;
`;