import React, {useState} from 'react';
import styled from 'styled-components';
import Down from '../../assets/down.svg';


const More = () =>{
    const [open, setOpen] = useState(false);
    return (
        <MoreContainer>
            <DownMenu onClick={() => setOpen(!open)}>
                <span>More</span>
                <ImgDown open={open} src={Down} />
            </DownMenu>
            <MDropdown open={open}>
                     <NavItem>Contact Us</NavItem>
                     <NavItem>About Us</NavItem>
                     <NavItem>Contact Us</NavItem>
                 </MDropdown>
        </MoreContainer>

    )
}
export default More;
export const MoreContainer = styled.div`
position: relative;
user-select: none;
@media screen and (max-width: 300px){
    display: none;
}
`;

export const DownMenu = styled.div`
display: flex;
align-items:center;
cursor: pointer;
height: 100%;
span{
    font-size: 1.5rem;
}

@media screen and (max-width: 900px) {
  display: none;
  
}
`
const ImgDown = styled.img`
    width: 2rem;
    height: 2rem;
    margin-left: .5rem;
    transition: all .1s;
    transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};

`;
const MDropdown = styled.div`
opacity: ${props => props.open ? '1' : '0'};
position :absolute;
display: flex;
flex-direction: column;
margin-top: 1.5rem;
background:#fff;
box-shadow: 0px 0px 3px 0px #c9ced6;
border-radius: 10px;
width: 13rem;
padding: 2rem 1rem;
transition: opacity .3s;
@media screen and (max-width: 300px){
    display: none;
}
`;
const NavItem = styled.a`
font-size: 1.7rem;
margin: 1rem 0;
font-family: 'Barlow-Medium', sans-serif;
cursor: pointer;
&:hover{
    color: #F9A826;
}

`;