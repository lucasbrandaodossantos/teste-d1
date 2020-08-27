import React from "react";
import {
  MenuTitle,
  MenuDivPrincipal,
  MenuDivItem,
  ItemIcon,
  ItemName,
  ItemQt,
} from "./styles";
class Menu extends React.Component {
  render() {
    return (
      <MenuDivPrincipal>
        <MenuTitle>Jornadas</MenuTitle>

        <MenuDivItem>
          <ItemIcon src="/assets/icons/table.svg"></ItemIcon>
          <ItemName>Todas</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <ItemIcon src="/assets/icons/paper-plane.svg"></ItemIcon>
          <ItemName>Enviando</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <ItemIcon src="/assets/icons/play-circle.svg"></ItemIcon>
          <ItemName>Ativadas</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <ItemIcon src="/assets/icons/pen.svg"></ItemIcon>
          <ItemName>Configurando</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <ItemIcon src="/assets/icons/bed.svg"></ItemIcon>
          <ItemName>Ociosa</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <ItemIcon src="/assets/icons/check.svg"></ItemIcon>
          <ItemName>Concluída</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>
      </MenuDivPrincipal>
    );
  }
}
export default Menu;
