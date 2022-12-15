import { Tooltip } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {LinkArea, LinkIcon} from './styled'

const MenuIntem =({link, icon, title})=>{
    const location = useLocation();

    let isActive = location.pathname === link;
    

    return(
        <Tooltip title={title} placement='right' arrow>
        <LinkArea active={isActive}>
        <Link  to={link}>
            <LinkIcon src={icon}/>
        </Link>
        </LinkArea>
        </Tooltip>
    );

};

export default MenuIntem;