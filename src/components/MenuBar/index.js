import React from "react";
import { MenuTitle, MenuDiv, ItemIcon, ItemName, ItemQt } from './styles';

class MenuBar extends React.Component{
    render() {
        return (    
            <MenuDiv>
            <MenuTitle></MenuTitle>
                <ItemIcon></ItemIcon>
                <ItemName></ItemName>
                <ItemQt></ItemQt>
            </MenuDiv>
        );
    }
}
export default MenuBar;