import { Tooltip } from "@material-ui/core";
import React from "react";

import { Container, CategoriImage } from './styled'

const CategoryItem =({data, activeCategory,setActiveCategory})=>{
    const handleCategoryClick =()=>{
        setActiveCategory(data.id);
    };


    return(
       <Tooltip title={data.name} placement="top">
       <Container
             active ={activeCategory} 
             id={data.id}
             onClick={handleCategoryClick}>

            <CategoriImage src={data.image} />

        </Container>
        </Tooltip>
        
       
    );

};

export default CategoryItem;