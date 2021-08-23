import React, {useState} from 'react';
import styled from 'styled-components';
import  Down from '../../assets/down.svg';
import Up from '../../assets/up.svg';

const ItemFilterComponent = ({title, children, column}) => {
    const [open, setOpen] = useState(false);
    return(
        <ItemFilter onClick={() => setOpen(!open)}>
        <ItemFilterType>
        <ItemFilterTitle>{title}</ItemFilterTitle>
        <ItemFilterImg open={open} src={Down}  onDragStart={(e) => e.preventDefault()} />
        
        </ItemFilterType>
        {
            open ? 
            (
                <FilterContent column={column}>{children}</FilterContent>
            ) : null
        }
    </ItemFilter>
   

    )
}
export default ItemFilterComponent;

const ItemFilter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem 0;
outline: none;
`;
const ItemFilterType = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
cursor: pointer;

img{
    width: 2.5rem;
    height: 2.5rem;
    user-select: none;
}
`;
const ItemFilterTitle = styled.span`
font-size: 1.7rem;
font-family: 'Barlow-Medium', sans-serif;

`;
const ItemFilterImg = styled.img`
transform:${props => props.open ? "rotate(180deg)" : null};

`
const FilterContent = styled.div`
width: 100%;
display: flex;
${props => props.column && `flex-direction: column`};
margin-top: 1rem;
`;
