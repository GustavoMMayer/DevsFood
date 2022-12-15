import React, { useState } from "react";

import {Container, Logo, SearchInput} from './styled'


const Header =({search, onSearch})=>{
    const [inputActive, setInputActive] = useState(search==''? false: true);

    const handleInputFocus =()=>{
        setInputActive(true)
    };

    const handleInputBlur =()=>{
       if(!search || search==""){
        setInputActive(false)
       }
        
    };

    const handleChange = (e)=>{
        onSearch(e.target.value);

    };

    return(
        <Container>
           <Logo src='/Assets/logo.png'/>
           <SearchInput 
            type='text' 
            placeholder="Digite um Produto..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            active={inputActive}
            value = {search}
            onChange={handleChange}/>

        </Container>
      
       
    );

};

export default Header;