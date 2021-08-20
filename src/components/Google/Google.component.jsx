import React from "react";
import styled from "styled-components";
import GoogleSvg from "../../assets/google.svg";


const GoogleButton = ({signup}) => {
    return (
        <GoogleContainer type="button">
            <img src={GoogleSvg} />
            <GoogleTitle>{signup ?"Sign up with Google" : "Sign in with Google"}</GoogleTitle>
        </GoogleContainer>

    )
}

export default GoogleButton;

const GoogleContainer = styled.button`
margin-top: 1rem;
width: 60%;
height: 6rem;
background: #fff;;
display: flex;
justify-content:center;
align-items: center;
padding: 0 1rem;
align-items: center;
font-size: 2rem;
cursor: pointer;
font-family : 'Barlow-Medium', sans-serif;
border:0;
border: 1px solid #E0E0E0;
@media screen and (max-width: 900px){
    width: 100%;
   
}
img{
    width: 3rem;
    height: 3rem;
}
`;
const GoogleTitle = styled.span`
color: #000;
padding-left: 2rem;
`;