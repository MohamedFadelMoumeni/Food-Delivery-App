import React from "react";
import H from "../../assets/hermes.jpg";
import styled from "styled-components";

const CardSearch = () =>{
    return (
        <CardContainer >
            <ImgContainer>
            <img src={H} />
            </ImgContainer>
            <Details>
            <Title>Lorem ipsum dolor sit amet.</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Description>
            </Details>

        </CardContainer>

    )
}
export default CardSearch;

const CardContainer = styled.div`
width: 100%;
display: flex;
cursor: pointer;
align-items: center;
padding: 1rem;
margin-bottom: 2rem;
`;
const Details = styled.div`
display: flex;
flex-direction: column;
flex: .7;
`;
const Title = styled.span`
color: #000;
font-size: 1.5rem;
font-family : 'Barlow-Medium', sans-serif;
margin-bottom: 5px;
`;
const ImgContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin-right: 3rem;
flex :.3;
img{
    width: 90%;
    height: 100%;
    border-radius: 20px;
    
}
`;
const Description = styled.span`
color: #000;
font-size: 1.3rem;
font-family : 'Barlow-Medium', sans-serif;
`;