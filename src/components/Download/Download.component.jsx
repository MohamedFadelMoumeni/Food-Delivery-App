import React from 'react';
import styled, {keyframes} from 'styled-components';
import Downloadimg from '../../assets/download.svg';
import Store from '../../assets/Store.svg';

const Download = () => {
    return (
        <DownloadContainer >
            <DownloadContent>
                <DownloadTitle>Download the app</DownloadTitle>
                <DownloadDesc>For speedy ordering, get the free Menulog app on iOS or Android.
</DownloadDesc>
                <BtnContainer>
                    <img onDragStart={(e) =>e.preventDefault()} src={Store} />
                    <img onDragStart={(e) =>e.preventDefault()} src={Store} />
                </BtnContainer>
            </DownloadContent>
            <Imgwrapper>
            <img onDragStart={(e) =>e.preventDefault()} src={Downloadimg} />
            </Imgwrapper>
        </DownloadContainer>

    )
}
export default Download;

const tr = keyframes`
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

const DownloadContainer = styled.div`
max-width: 1200px;
display: flex;
justify-content: space-between;
align-items:center;
margin: 7rem auto 4rem auto;
@media screen and (max-width: 1200px){
    padding: 0 2rem;
}
`;
const Imgwrapper = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items:center;
@media screen and (max-width: 700px){
        display: none;
    }
img{
    width: 70%;
    animation: ${tr} 2s infinite;
}
`;
const DownloadContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:flex-start;
width: 50%;
align-self: stretch;
padding-top: 5rem;
@media screen and (max-width: 700px){
    width: 100%;
    justify-content: center;
    align-items:center;
    margin-bottom:4rem;
    }
`;
const DownloadTitle = styled.span`
color: #000;
font-family: 'Barlow-Bold', sans-serif;
font-size: 3.8rem;
text-transform: uppercase;
margin-bottom: 1.3rem;
`;
const DownloadDesc = styled.span`
color: #000;
font-family: 'Barlow-Regular', sans-serif;
text-transform: uppercase;
margin-bottom: 1.3rem;
font-size: 2rem;
text-align:justify;
@media screen and (max-width: 400px){
    text-align:center;
    }
`;
const BtnContainer = styled.div`
width: 40%;
margin-top: .9rem;
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 400px){
    width: 100%;
    }
    @media screen and (max-width: 250px){
    flex-direction: column;
    }
img{
    cursor: pointer;
    width: 13rem;
    margin-right: 2rem;
}
`;