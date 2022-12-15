import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux"

import {CartArea, CartHeader, CartBody, CartIcon, CartText, ProductInfoArea, ProductItem, ProductPhoto, ProductName, ProductsArea, ProductPrice, ProductQuantityArea, ProductQtText, ProductQtIcon} from './styled'

const Cart =({})=>{
    const dispatch = useDispatch();
    const products = useSelector(state =>state.cart.products);

    const [show, setShow] = useState(true)

    const handleCartClick = ()=>{
        setShow(!show);
      
    };

    const handleProductChange =(key, type)=>{
       dispatch({
            type:'CHANGE_PRODUCT',
            payload:{key, type}
        });

    };

    return(
    <CartArea>
        <CartHeader onClick={handleCartClick}>
            <CartIcon src="/Assets/cart.png"/>
            <CartText>Meu Carrinho ({products.length})</CartText>
            {show &&
                <CartIcon src='/Assets/down.png'/>
            }
        </CartHeader>

        <CartBody show={show}>
            <ProductsArea>
            
                {products.map((item, index)=>(
                    
                    <ProductItem key={index}>
                            
                        <ProductPhoto src={item.image}/>
                        <ProductInfoArea>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>R$ {(item.price).toFixed(2)}</ProductPrice>
                            
                        </ProductInfoArea>
                        <ProductQuantityArea>
                                <ProductQtIcon src='/Assets/minus.png' onClick={()=>handleProductChange(index,'-')}/>
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon src='/Assets/minus.png'onClick={()=>handleProductChange(index,'+')}/>
                            </ProductQuantityArea>
                    </ProductItem>

                ))}

                
            </ProductsArea>
        </CartBody>
    </CartArea>
   


    
       
    );

};

export default Cart;