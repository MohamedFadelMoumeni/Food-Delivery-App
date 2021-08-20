import React from 'react';
import {useHistory} from 'react-router-dom';
import { HeroContainer, Wrapper, HeroText, HeroTitle, HeroHeadLine, ButtonHero, ImgContainer, ImgHero } from './Hero.styles';
import Heroimg from '../../assets/Hamburger.svg';

const Hero = () => {
    const history = useHistory();
    return (
        <HeroContainer>
            <Wrapper>
            <HeroText>
                <HeroTitle>Crave it? Get it. 😋</HeroTitle>
                <HeroHeadLine>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Ratione architecto doloremque eligendi deleniti  <br/>voluptas dicta excepturi odio reprehenderit provident <br/> accusamus.</HeroHeadLine>
                <ButtonHero onClick={() => history.push('/products')}>see all</ButtonHero>
            </HeroText>
            <ImgContainer>
            <ImgHero src={Heroimg} onDragStart={(e) =>e.preventDefault()}/>
            </ImgContainer>
            </Wrapper>
        </HeroContainer>

    )
}

export default Hero;
