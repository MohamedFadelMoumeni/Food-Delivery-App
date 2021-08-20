import React, {useState} from 'react';
import {Drop, TextForDropdown, DropdownContainer, TopDrop, Content,EmptyText} from './Dropdown.styles';
import Close from '../../assets/close.svg';
import Cart from '../../assets/cart.svg';


const Dropdown = () => {
    const [open, setOpen] = useState(false);
    return (
        <DropdownContainer>
            <TextForDropdown onClick={() => setOpen(!open)}><img src={Cart} /> <span>0</span></TextForDropdown>
            <Drop open={open}>
                      <TopDrop>
                          <img src={Close} onClick={() => setOpen(false)}/>
                      </TopDrop>
                      <Content>
                      <EmptyText>Add items from a restaurant or store to start a new cart
</EmptyText>
                      </Content>
                  </Drop>
        </DropdownContainer>

    )
}

export default Dropdown;

 