import React from 'react';
import {useHistory} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination
  } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import styled from 'styled-components';
import Item from '../Item/Item.component';

SwiperCore.use([Pagination]);
const Collection = () => {
    const history = useHistory();
    return (
        <CollectionContainer>
        <CollectionTop>
        <CollectionTopLeft>
        <CollectionTitle>Pizza</CollectionTitle>
        <CollectionDesc>Here’s the fastest delivery for you</CollectionDesc>
        </CollectionTopLeft>
        <CollectionTopRight onClick={() => history.push('/products')}>See ll</CollectionTopRight>
        </CollectionTop>
        
           <Directory>
           <Item img="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lMGM4NGIwZS1iNTE1LTRmZjgtYWU5Mi1mM2UxZGE0YWNiNjcuanBlZw=="/>
           <Item img="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hZTM1MzFkYS0yMTE4LTQ1NGMtODc0Zi1iNjJjNmNjNGY4MWEuanBlZw=="/>
           <Item img="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTUyMTU0ODM4MzgxNC13NTUwLThmLmpwZw=="/>
           <Item img="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81MDFmNmYyNC1lMWRiLTQwYzktOGI4MC0wNDI1YTMyNjQyMWQuanBlZw=="/>

           </Directory>
  
        </CollectionContainer>

    )
}
export default Collection;

const CollectionContainer = styled.div`
max-width: 1200px;
margin: 3rem auto;
display: flex;
flex-direction: column;



@media screen and (max-width: 1200px) {
  width: 95%;
  
}

`;
const CollectionTop = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;
const CollectionTopLeft = styled.div`
display: flex;
flex-direction:column;
`;
const CollectionTopRight = styled.span`
font-size: 1.7rem;
font-family : 'Barlow-Regular', sans-serif;
padding: .5rem 1.7rem;
background: #000;
border-radius: 20px;
color: #fff;
cursor: pointer;
user-select: none;
&:hover{
    filter: brightness(0.9);
}

`;
const CollectionTitle = styled.span`
font-size :3.5rem;
font-family : 'Barlow-Bold', sans-serif;
text-transform: uppercase;
`;
const CollectionDesc = styled.span`
font-size: 2rem;
color: #545454;
font-family : 'Barlow-Light', sans-serif;
`;
const Directory = styled.div`
max-width: 1200px;
display: flex;
margin-top: 1.8rem;
@media screen and (max-width: 700px){
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}


`;