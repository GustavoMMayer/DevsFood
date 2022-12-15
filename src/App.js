import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import Tooltip from "@material-ui/core/Tooltip";
import 'tippy.js/dist/tippy.css';


import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import {Container, Menu, PageBody } from './AppStyled';

import MenuItem from './components/MenuItem'
import Cart from './components/Cart'
import { useState } from 'react';

export default () => {
    const name = useSelector(state => state.user.name);
    const token = useSelector(state =>state.user.token);
    

    return (
        <BrowserRouter>
        
            <Container>
            
                <Menu>                 
                      
                    <MenuItem  icon ='/assets/store.png' link='/' title ='Loja'/>                 
                    <MenuItem icon ='/assets/order.png' link='/orders' title ='Pedidos'/>
                    <MenuItem icon ='/assets/profile.png' link='/profile' title ='Meu Perfil'/>
                </Menu>
                 
                
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <Route path='/orders'>
                            if(!token || token=''){
                                <Redirect to='/login'/>
                            }else{
                            <div>Tela de pedidos</div>
                            }
                        </Route>

                        <Route path="/profile">
                        if(!token || token=''){
                                <Redirect to='/login'/>
                            }else{
                            <div> tela do usuario</div>
                            }
                        </Route>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>

                </PageBody>
                <Cart></Cart>
                
                  
            </Container>
                     
        </BrowserRouter>
    );
}