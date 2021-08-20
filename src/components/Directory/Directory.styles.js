import styled from "styled-components";

export const DirectoryContainer = styled.div`
max-width: 1200px;
margin: 7rem auto 4rem auto;
display: flex;
justify-content:space-between;
align-items: center;
padding:1rem 0;
@media screen and (max-width : 700px){
    flex-direction: column;
}
`;
