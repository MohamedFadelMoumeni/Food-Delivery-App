import React from 'react';
import styled from 'styled-components';
import ItemFilterComponent from '../../components/Filter/ItemFilter.component';
import Item from '../../components/Item/Item.component';

const Product = () => {
    return (
      <>
        <ProductsContainer>
            <MenuProducts>
                <MenuProductsTitle>All stores</MenuProductsTitle>
                <DirectoryFilter>
                    <ItemFilterComponent title='Price range'>
                    <PriceRange>2-5 </PriceRange>
                    <PriceRange>5-20 </PriceRange>
                    <PriceRange>&#62; 20</PriceRange>
                    </ItemFilterComponent>
                </DirectoryFilter>

            </MenuProducts>
            <ProductsDirectory>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
                        <Item key={el} full img="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lNTJmOTNjOC1hNTJjLTRhNmItOTFlYi03ZWQwNGVjOTlhMDYuanBlZw=="/>

                    ))
                }
            </ProductsDirectory>  
                    

        </ProductsContainer>
        </>
      
        
    )
}
export default Product;

const ProductsContainer = styled.div`
max-width: 1200px;
margin:2rem  auto  ;
padding-top: 6rem;
display: flex;
justify-content: space-between;
align-items: flex-start;





`;
const MenuProducts = styled.div`
flex: .20;
padding: 1rem;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
position: sticky;
top:9%;
@media screen and (max-width: 900px){
  display: none;
}

`;
const MenuProductsTitle = styled.span`
font-size:3rem;
font-family: 'Barlow-Bold', sans-serif;
margin-bottom: 2.6rem;
`;
const DirectoryFilter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
`;
const ProductsDirectory = styled.div`
flex: .80;
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding-left: 3rem;
padding-top: 2.5rem;
@media screen and (max-width: 900px){
  flex: 1;
  padding:0 2em;
}


&::-webkit-scrollbar {
  width: 1em;
}
 
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(209, 209, 209, 0.3);
}
 
&::-webkit-scrollbar-thumb {
  background-color: #d6d6d6;
  outline: 1px solid #fff;
}

`;
const PriceRange = styled.span`
background: #333333;
color: #fff;
font-family: 'Barlow-Light', sans-serif;
padding: .4rem 1rem;
border-radius: 20px;
font-size: 1.5rem;
margin-right: 2rem;
cursor: pointer;
`;
