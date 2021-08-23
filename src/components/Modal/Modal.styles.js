import styled from 'styled-components';
import Forminput from '../Forminput/Forminput.component';


export const ModalContainer = styled.div`
position: fixed;
top:0px;
bottom:0px;
left: 0;
right:0;
background: rgba(0, 0, 0, .8);
display: flex;
justify-content: center;
align-items: center;
z-index: 46;

`;
export const ModalWrapper = styled.div`
width: 40%;
display: flex;
flex-direction: column;
background:#fff;
z-index: 44;
overflow-y: auto;
position: relative;
padding: 1rem 2rem;
border-radius: 20px;
@media screen and (min-width: 1700px){
    width: 30%;
}
@media screen and (max-width: 700px){
    width: 80%;
}


`
export const ModalTop = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
padding-bottom: 1rem;
img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
}

`;
export const ProductTitle = styled.span`
font-size: 3rem;
font-family: 'Barlow-Medium', sans-serif;
font-weight: bold;
color: #000;
padding-bottom: 2rem;
`;
export const ModalProductImg = styled.img`
width: 100%;
height: 80%;
object-fit: cover;
`;
export const ModalDown = styled.div`
position: sticky;
bottom:0;
left: 0;
right:0;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background: #fff;
padding: 1rem;
img{
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    @media screen and (max-width: 450px){
    width: 2rem;
    height: 2rem;
}
}


`;
export const OrderButton = styled.a`
color: #fff;
font-family:'Barlow-Regular', sans-serif;
font-size: 1.8rem;
border-radius: 20px;
background: #000;
padding: .5rem 2rem;
cursor: pointer;
`;

export const Content = styled.div`
width: 100%;
height: 40rem;
display: flex;
flex-direction: column;
padding-bottom: 3rem;
padding-right: 1rem;
overflow:auto;
&::-webkit-scrollbar {
  width: .5em;
}
 
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #EEEEEE;
}
 
&::-webkit-scrollbar-thumb {
    background-color: #DDDDDD;
  outline: 1px solid #EEEEEE;
}
`;
export const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 20rem;
padding-top: 2rem;
`;
export const DetailsTitle = styled.span`
color: #000;
font-size: 1.7rem;
font-family:'Barlow-Bold', sans-serif;
`;
export const CustomizeInput = styled(Forminput)`
width: 100%;
margin-top: 1rem;
height: 12rem;
border: none;
border-radius: 10px;
background-color: #EEEEEE;
outline: none;
padding: 1rem;
color: #000;
&::placeholder{
    color: #000;
}

`;
export const Count = styled.div`
flex: .5;
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 1rem;
@media screen and (max-width: 450px){
    flex: .8;
}

`;
export const ItemCount = styled.span`
font-size: 1.5rem;
padding: 1rem 2rem;
border-radius: 10px;
background: #EEEEEE;
font-family:'Barlow-Bold', sans-serif;
`;

export const Description = styled.span`
font-size: 1.7rem;
font-family: 'Barlow-Regular', sans-serif;
color: #000;
padding-top: 1rem;
`;