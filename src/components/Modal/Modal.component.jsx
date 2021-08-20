import React from 'react';
import Close from '../../assets/close.svg';
import Minus from '../../assets/minus.svg';
import Plus from '../../assets/plus.svg';


import {ModalContainer, ModalWrapper, ModalTop, ModalProductImg, 
    ProductTitle, ModalDown, OrderButton, Content, Details, 
    DetailsTitle, CustomizeInput, Count, ItemCount} from './Modal.styles';
const Modal = ({setOpen}) => {
    return (
        <ModalContainer >
            <ModalWrapper>
                <ModalTop>
                    <img src={Close} onClick={() => setOpen(false)}/>
                </ModalTop>
                <Content>
                <ProductTitle>Cheesecake</ProductTitle>
                <ModalProductImg src="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lNTJmOTNjOC1hNTJjLTRhNmItOTFlYi03ZWQwNGVjOTlhMDYuanBlZw==" />
                <Details>
                    <DetailsTitle>Special Instructions</DetailsTitle>
                    <CustomizeInput placeholder="Add any special requests . 500 characters left" type="text" />
                    
                </Details>
                </Content>
                <ModalDown>
                    <Count>
                    <img src={Minus} />
                    <ItemCount>2</ItemCount>
                    <img src={Plus} />
                    </Count>
                    <OrderButton>Add to cart</OrderButton>
                </ModalDown>
            </ModalWrapper>
            

        </ModalContainer>

    )
}
export default Modal;

