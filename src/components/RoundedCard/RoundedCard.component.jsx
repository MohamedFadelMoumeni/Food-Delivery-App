import React from 'react';
import styled from 'styled-components';

const RoundedCard = ({img}) => {
    return (

        <RoundedCardContainer>
            <ImgRounded onDragStart={(e) =>e.preventDefault()} type="image/webp" src={img}/>
            <RoundedCardTitle>hello</RoundedCardTitle>
        </RoundedCardContainer>
    )
}
export default RoundedCard;

const RoundedCardContainer = styled.div`
width: 50%;
margin: 0 .9rem;
display: flex;
justify-content: center;
position: relative;
cursor: pointer;
@media screen and (max-width : 700px){
    margin: 1.6rem 0;
    width:90%;
}
`;
const ImgRounded = styled.img`
width: 80%;
height:80%;

margin-bottom: .5rem;
border-radius: 50%;
@media screen and (max-width : 700px){
    width:100%;
}
`;
const RoundedCardTitle = styled.span`
font-size: 1.9rem;
font-family : 'Barlow-Light', sans-serif;
position: absolute;
z-index: 3;
background: #333333;
left:35px;
top: 20px;
padding: .4rem .9rem;
border-radius: 0 20px  0 20px;
color: #fff;
@media screen and (max-width : 700px){
    left:0;
}
`;
