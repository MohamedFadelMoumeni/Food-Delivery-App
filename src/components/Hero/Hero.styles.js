import styled, { keyframes } from 'styled-components';


export const HeroContainer = styled.div`
width: 100%;
height: 50rem;
padding-top: 1rem;
@media screen and (max-width: 900px) {
    height: 60vh;
  
}
`
export const HeroText = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

`;
export const HeroTitle= styled.span`
font-family: 'Barlow-Bold', sans-serif;
font-size: 4.6rem;
text-transform: uppercase;
margin-bottom: 1.3rem;
@media screen and (max-width: 350px) {
    font-size: 3.5rem;
    padding-top: 4.5rem;
  
}

`;
export const HeroHeadLine= styled.span`
font-family: 'Barlow-Regular', sans-serif;
font-size: 2.2rem;
text-transform: uppercase;
line-height: 3rem;
@media screen and (max-width: 350px) {
    font-size: 2srem;
  
}
`;
export const Wrapper = styled.div`
max-width: 1200px;
height: 100%;
display: flex;
justify-content:space-between;
align-items: center;
margin: auto;
@media screen and (max-width: 1200px) {
  width: 95%;
  
}

`;
export const ImgContainer = styled.div`
height: 90%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 6rem;
@media screen and (max-width: 800px){
    display: none;
}
`;

export const tr = keyframes`
    0%{
        transform: translateY(0%);
    }
    50%{
        transform: translateY(-5%);
    }
    100%{
        transform: translateY(0%);
    }
`;

export const ImgHero = styled.img`
height: 90%;
animation: ${tr} 2s infinite;
`;
export const ButtonHero = styled.a`
margin-top: 2rem;
padding: 1rem 4rem;
border: none;
background: #333333;
border-radius: 20px;
cursor: pointer;
font-size: 2rem;
text-transform: uppercase;
color: #fff;
font-family: 'Barlow-Medium', sans-serif;
text-decoration: underline;

`;
