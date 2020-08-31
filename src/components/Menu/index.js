import React from "react";
import {
  MenuTitle,
  MenuDivPrincipal,
  MenuDivItem,
  ItemName,
  ItemQt,
  TableIcon,
  PlaneIcon,
  PlayButtonIcon,
  PenIcon,
  BedIcon,
  CheckIcon,
} from "./styles";
class Menu extends React.Component {

  render() {
    return (
      <MenuDivPrincipal>
        <MenuTitle>Jornadas</MenuTitle>

        <MenuDivItem>
          <TableIcon src="/assets/icons/table.svg"></TableIcon>
          <ItemName>Todas</ItemName>
          <ItemQt></ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PlaneIcon src="/assets/icons/paper-plane.svg"></PlaneIcon>
          <ItemName>Enviando</ItemName>
          <ItemQt></ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PlayButtonIcon src="/assets/icons/play-circle.svg"></PlayButtonIcon>
          <ItemName>Ativadas</ItemName>
          <ItemQt></ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PenIcon src="/assets/icons/pen.svg"></PenIcon>
          <ItemName>Configurando</ItemName>
          <ItemQt></ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <BedIcon src="/assets/icons/bed.svg"></BedIcon>
          <ItemName>Ociosa</ItemName>
          <ItemQt></ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <CheckIcon src="/assets/icons/check.svg"></CheckIcon>
          <ItemName>Concluída</ItemName>
          <ItemQt></ItemQt>
        </MenuDivItem>
      </MenuDivPrincipal>
    );
  }
}
export default Menu;
