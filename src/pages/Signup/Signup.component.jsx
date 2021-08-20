import React from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import FormInput from "../../components/Forminput/Forminput.component";
import GoogleButton from "../../components/Google/Google.component";

const SignUp = () => {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <SignInContainer>
            <SignInForm onSubmit={handleSubmit}>
                <Welcome>Create a free acoount</Welcome>
                <CustomInput type="text" placeholder="Full name" required/>
                <CustomInput type="email" placeholder="Email" required/>
                <CustomInput type="password" placeholder="*****" required/>
                <Button type="submit">Sign up</Button>
                <GoogleButton signup/>
                <LinkContainer>
                <Link onClick={() => history.push("/sign-in")}>Sign in</Link>
                </LinkContainer>
            </SignInForm>

        </SignInContainer>

    )
}
export default SignUp;

const SignInContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
`;
const SignInForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 60%;
@media screen and (max-width: 900px){
    width: 90%;
}
`;
const Welcome = styled.span`
font-weight: bold;
color: #000;
font-size: 3rem;
margin-bottom: 3rem;
font-family : 'Barlow-Medium', sans-serif;
`
const CustomInput = styled(FormInput)`
width: 60%;
outline: none;
height: 5rem;
line-height: 24px;
color: #262626;
border: 1px solid #E0E0E0;
padding: 0 1rem;
margin-bottom: 2rem;
font-size: 1.7rem;
font-family : 'Barlow-Medium', sans-serif;
@media screen and (max-width: 900px){
    width: 100%;
   
}
`;
const Button = styled.button`
width: 60%;
height: 6rem;
background: #262626;;
display: flex;
justify-content:center;
align-items: center;
color: #fff;
font-size: 2rem;
cursor: pointer;
font-family : 'Barlow-Medium', sans-serif;
border:0;
@media screen and (max-width: 900px){
    width: 100%;
   
}
`;
const LinkContainer = styled.div`
width: 60%;
display: flex;
justify-content:space-between;
align-items: center;
margin-top: 1rem;
@media screen and (max-width: 900px){
    width: 100%;
   
}
`;
const Link = styled.span`
color: #262626;
text-decoration: underline;
font-size: 1.5rem;
font-family : 'Barlow-Medium', sans-serif;
cursor: pointer;
`;