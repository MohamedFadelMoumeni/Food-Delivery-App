import styled from "styled-components";


export const HeaderContainer = styled.div`
width: 100%;
background-color: #fff;
box-shadow: 0px 0px 3px 0px  #C9CED6;
padding: 1rem 0;
font-family : 'Balrow', sans-serif;
position: sticky;
top:0%;
z-index:45;

`;
export const Wrapper = styled.div`
max-width: 1200px;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
margin: auto;
position: relative;
@media screen and (max-width: 1200px) {
  width: 95%;
  
}
`;

export const List = styled.ul`
display: flex;
justify-content: flex-end;
align-items: center;
flex: .25;
@media screen and (max-width: 900px) {
  display: none;
  
}

`;
export const Logotext = styled.span`
font-size: 2.8rem;
font-family : 'Barlow-Bold', sans-serif;
flex: .15;
cursor: pointer;
user-select: none;
`;

export const Item = styled.li`
font-family : 'Barlow-Medium', sans-serif;
list-style: none;
font-size: 1.7rem;
margin-left: 2rem;
cursor: pointer;
user-select: none;
`;


export const DownMenu = styled.div`
display: flex;
align-items:center;
cursor: pointer;
height: 100%;
span{
    font-size: 1.5rem;
}
img{
    width: 2rem;
    height: 2rem;
    margin-left: .5rem;

}
@media screen and (max-width: 900px) {
  display: none;
  
}
`