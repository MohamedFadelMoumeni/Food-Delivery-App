import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/hermes.jpg';

const Category = () => {
    return (
        <CategoryContainer>
            <CategoryWrapper>
            <CategoryTitlte>Need some more options ?</CategoryTitlte>
            <List>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>
                <Item>lorem</Item>


            </List>
            </CategoryWrapper>

        </CategoryContainer>

    )
}
export default Category;

const CategoryContainer = styled.div`
max-width: 100%;
margin:6rem auto;
background: #fdfdfd;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding: 3.6rem 0;
@media screen and (max-width: 1200px){
    padding: 0 2rem;
}

`;
const CategoryWrapper = styled.div`
max-width: 1200px;
margin: auto;
`;
const CategoryTitlte = styled.span`
font-size: 3.8rem;
font-family: 'Barlow-Bold', sans-serif;
`;
const List = styled.div`
margin-top: 3.6rem;
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;

`;
const Item = styled.span`
font-size: 2.4rem;
margin-right: 3rem;
font-family: 'Barlow-Medium', sans-serif;
cursor: pointer;
user-select: none;
background: #333333;
color: #fff;
border-radius: 20px;
padding: .5rem 1.5rem;
transition: all .2s;
margin-bottom: 2.5rem;

&:hover{
    opacity: .8;
}
`;