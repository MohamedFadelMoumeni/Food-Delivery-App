import React from 'react';
import {useHistory} from 'react-router-dom';
import {HeaderContainer,Wrapper, 
  Logotext, List, Item} from './Header.styles';
import Dropdown from '../Dropdown/Dropdown.component';
import SearchBox from '../Searchbox/Searchbox.component';
import HeaderMobile from '../HeaderMobile/HeaderMobile.component';
import More from '../More/More.component';


const Header = ()=> {
  const history = useHistory();
    return (
      <HeaderContainer>
          <Wrapper>
              <Logotext onClick={() => history.push('/')}>FoodDelevery</Logotext>
             <More />
              <SearchBox />
              <List>
                  <Item onClick={() => history.push("/sign-in")}>Sign in</Item>
                  <Item>Blog</Item>
                  <Dropdown />

              </List>
              <HeaderMobile />
          </Wrapper>
      </HeaderContainer>
    )
}



export default Header;