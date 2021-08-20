import React ,{useState} from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal.component';


const Item = ({img, full}) => {
    const [open, setOpen] = useState(false);
    if(open){
        document.body.style.overflow="hidden"
    }else{
      document.body.style.overflow="visible"

    }
    return (
        <>
        {
            open ?
            (<Modal setOpen={setOpen}/>) : null
        }
        <ItemContainer full={full} onClick={() =>setOpen(true)}>
            <ImgWrapper>
            <Itemimg onDragStart={(e) =>e.preventDefault()} src={img}/>
            </ImgWrapper>
            {
                !full ? 
                (
                    <ItemForimg >Lorem, ipsum dolor.</ItemForimg>
                ) : null
            }
            <ItemTitle full={full}>Lorem ipsum dolor .</ItemTitle>
            <ItemDesc>22.22$ </ItemDesc>
            <ItemTime>  40-50 min</ItemTime>
 
        </ItemContainer>
        </>

    )
}

export default Item;

const ItemContainer = styled.div`
width: 30%;
height: 20rem;
margin-right: .9rem;
position: relative;
cursor: pointer;
margin-bottom: 2.5rem;
@media screen and (max-width: 900px){
    margin-top: 2rem
}

@media screen and (max-width: 700px){
    width: 45%;
    margin-bottom: .9rem;
}
@media screen and (max-width: 575px){
    width: 100%;
}

`;
const ImgWrapper = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom :1rem;

`;
const Itemimg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;;
`;
const ItemTitle = styled.span`
font-size: ${props => props.full ? '1.7rem' : '2rem'};
font-family: "Barlow-Meduim", sans-serif;
margin-left: .5rem;
display: block;
`;
const ItemDesc = styled.span`
font-size: 1.7rem;
font-family: "Barlow-Light", sans-serif;
color: #545454;
font-weight:bold;
margin-left: .5rem;
`;
const ItemTime = styled.span`
font-size: 1.4rem;
font-family: "Barlow-Light", sans-serif;
font-weight:bold;
margin-left: .5rem;
`;
const ItemForimg = styled.div`
position: absolute;
top: 20px;
z-index: 4;
font-size: 1.5rem;
padding: .5rem .9rem;
color: #fff;
background: #3edb7a;
border-radius: 0 20px 20px 0;
font-family: "Barlow-Meduim", sans-serif;
cursor: pointer;
`;