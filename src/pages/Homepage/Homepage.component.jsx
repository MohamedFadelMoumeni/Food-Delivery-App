import React from 'react';
import styled from 'styled-components';
import HeroContainer from '../../components/Hero/Hero.component';
import Collection from '../../components/Collection/Collection.component';
import Category from '../../components/Category/Category.component';
import Modal from '../../components/Modal/Modal.component';
import Download from '../../components/Download/Download.component';
const Homepage = () => {
    return (
        <HomepageContainer>
        <HeroContainer />
        <Collection />
        <Collection />
        <Collection />
        <Category />
        <Download />
        </HomepageContainer>
        
        )
}

const HomepageContainer = styled.div`
width: 100%;
`;

export default Homepage;