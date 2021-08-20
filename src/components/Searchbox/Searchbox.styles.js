import styled from "styled-components";
import FormInput from '../Forminput/Forminput.component';

export const SearchBoxContainer = styled.div`
display: flex;
align-items: center;
position: relative;
background: #EEEEEE;
border-radius:10px ;
height: 4rem;
flex: .5;
padding: 1rem 1.2rem;
@media screen and (max-width: 900px) {
  display: none;
  
}
`;
export const SearchIcon = styled.img`
width: 2rem;
height: 2rem;

`;
export const ForminputText = styled(FormInput)`
background: inherit;
height: 100%;
width: 100%;
outline: none;
border: none;
color: #000;
font-size: 1.7rem;
font-family : 'Barlow-Regular', sans-serif;
padding-left: 1.7rem;
`