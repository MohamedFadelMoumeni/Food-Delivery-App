import styled from 'styled-components';

export const DropdownContainer = styled.li`
margin-left: 5rem;
list-style: none;
position: relative;
background: #333333;
padding: .7rem 1.2rem;
color: #fff;
border-radius: 20px;


`;
export const TextForDropdown = styled.span`
display: flex;
justify-content: space-between;
align-items: center;
font-family : 'Barlow-Medium', sans-serif;
list-style: none;
font-size: 1.5rem;
cursor: pointer;
cursor: pointer;
user-select: none;
img{
    width: 1.7em;
    height: 2.3rem;
}


`;

export const Drop = styled.div`
opacity: ${props => props.open ? '1': '0'};
position: absolute;
transform: translate(-70%, 4%);
background-color:#fff;
height: 40rem;
width: 30rem;
border-radius: 10px;
box-shadow:  0px 0px 3px 0px  #C9CED6;
overflow-y: scroll;
transition: opacity .3s;

`;
export const TopDrop = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
img{
    width: 3rem;
    height: 3rem;
    margin: .9rem .3rem ;
    cursor: pointer;
    outline: none;
}
`;
export const Content = styled.div`
width : 100%;
padding: 4rem 1rem;
text-align:center;

`;
export const EmptyText =styled.span`
color: #000;
font-size: 1.8rem;
text-align:center;
font-family : 'Barlow-Regular', sans-serif;
`;

