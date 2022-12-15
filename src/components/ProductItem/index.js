
import React from "react";

import { Container, 
        ProductButtonArea,
        ProductInforArea,
        ProductPhoto,
        ProductPhotoArea, 
        ProductButton, 
        ProductName,
        ProductPrice,
        ProductIngredientes
        } from './styled'

const ProductItem =({data, onClick})=>{
    
    const handleClick=()=>{
        onClick(data);

    };

    return(
       
       <Container onClick={handleClick}>
        <ProductPhotoArea>
            <ProductPhoto src ={data.image}/>

        </ProductPhotoArea>
        <ProductInforArea>
            <ProductName>{data.name}</ProductName>
            <ProductPrice>R$ {data.price}</ProductPrice>
            <ProductIngredientes>{data.ingredients}</ProductIngredientes>

        </ProductInforArea>
        <ProductButtonArea>
            <ProductButton src="/Assets\next.png"/>

        </ProductButtonArea>
             

        </Container>
       
        
       
    );

};

export default ProductItem;