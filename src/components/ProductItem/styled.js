import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0,0,0, .16) ;
  padding: 10px;
  align-items: center;
  color: #176416;
  cursor: pointer;

  &:hover{
    background-color: #ddd;
  }
`;
export const ProductPhotoArea = styled.div`
 width: 100px;
`;
export const ProductInforArea = styled.div`

flex: 1;
margin-left: 10px;
margin-right: 10px;

`;
export const ProductButtonArea = styled.div`
  width: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ProductPhoto = styled.img`
  width: 100%;
  height: 70px;
  border-radius: 10px;
`;

export const ProductName = styled.div`
font-size: 20px;
font-weight: bold;

`;
export const ProductPrice = styled.div`
font-size: 14px;

`;
export const ProductIngredientes = styled.div`
font-size: 11px;

`;

export const ProductButton = styled.img`
  width:15px;
  
`;

