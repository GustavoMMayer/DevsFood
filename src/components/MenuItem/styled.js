import styled from 'styled-components'



export const LinkArea = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  background-color:${props=>props.active ? '#0b4d0b' : 'transparent'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

`;
export const LinkIcon = styled.img`
    width: 34px;
    height: auto;
    
`;