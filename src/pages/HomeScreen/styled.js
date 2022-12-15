import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    width: 100%;
   
    
`;

export const Titulo = styled.h1``;

export const CategoryArea = styled.div`
    color:#fff;
    margin-top: 20px;

`;

export const CategoryList = styled.div`
    display:flex;
    margin-top: 10px;
    
`;
export const ProductArea = styled.div`
    color:#fff;
    margin-top: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

`;

export const ProductList = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    
`;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;

`;

export const ProductPaginationItem = styled.div`
    background-color: ${props=>props.active == props.current ? '#ccc' : '#FFF'};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    cursor: pointer;
    margin-right: 10px;
`;