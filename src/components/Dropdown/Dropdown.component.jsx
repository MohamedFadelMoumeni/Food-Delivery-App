import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Drop, TextForDropdown, DropdownContainer, TopDrop, Content,EmptyText, Button} from './Dropdown.styles';
import Close from '../../assets/close.svg';
import Cart from '../../assets/cart.svg';


const Dropdown = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const handleCheckout = () => {
        history.push("/checkout");
        setOpen(false);
    }
    return (
        <DropdownContainer>
            <TextForDropdown onClick={() => setOpen(!open)}><img src={Cart} /> <span>0</span></TextForDropdown>
            <Drop open={open}>
                      <TopDrop>
                          <img src={Close} onClick={() => setOpen(false)}/>
                      </TopDrop>
                      <Content>
                      <EmptyText>Add items from a restaurant or store to start a new cart</EmptyText>
                      </Content>
                      <Button onClick={handleCheckout}>Checkout</Button>
                  </Drop>
        </DropdownContainer>

    )
}

export default Dropdown;

 