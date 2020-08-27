import React from "react";
import {
  MenuTitle,
  MenuDivPrincipal,
  MenuDivItem,
  ItemIcon,
  ItemName,
  ItemQt,
  TableIcon,
  PlaneIcon,
  PlayButtonIcon,
  PenIcon,
  BedIcon,
  CheckIcon
} from "./styles";
class Menu extends React.Component {
  render() {
    return (
      <MenuDivPrincipal>
        <MenuTitle>Jornadas</MenuTitle>

        <MenuDivItem>
          <TableIcon src="/assets/icons/table.svg"></TableIcon>
          <ItemName>Todas</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PlaneIcon src="/assets/icons/paper-plane.svg"></PlaneIcon>
          <ItemName>Enviando</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PlayButtonIcon src="/assets/icons/play-circle.svg"></PlayButtonIcon>
          <ItemName>Ativadas</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PenIcon src="/assets/icons/pen.svg"></PenIcon>
          <ItemName>Configurando</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <BedIcon src="/assets/icons/bed.svg"></BedIcon>
          <ItemName>Ociosa</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <CheckIcon src="/assets/icons/check.svg"></CheckIcon>
          <ItemName>Concluída</ItemName>
          <ItemQt>12</ItemQt>
        </MenuDivItem>
      </MenuDivPrincipal>
    );
  }
}
export default Menu;
