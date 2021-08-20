import styled from 'styled-components';


export const MenuImg = styled.img`
width: 3rem;
height: 3rem;
display: none;
@media screen and (max-width: 900px){
    display: flex;
    cursor: pointer;
}
`;

export const HeaderContainer = styled.div`
position: absolute;
width: 100%;
transform: translateY(64%);
display: flex;
flex-direction: column;
box-shadow: 0px 0px 5px 0px #b3b3b3;
background:#FFF;
z-index: 30;
`;
export const Item = styled.span`
font-family : 'Barlow-Medium', sans-serif;
list-style: none;
font-size: 2.2rem;
padding: 2rem 0;
cursor: pointer;
text-align: center;
`;