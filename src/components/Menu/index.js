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

  render(props) {
    return (
      <MenuDivPrincipal>
        <MenuTitle>Jornadas</MenuTitle>

        <MenuDivItem>
          <TableIcon src="/assets/icons/table.svg"></TableIcon>
          <ItemName>Todas</ItemName>
          <ItemQt>{this.props.filterId}</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PlaneIcon src="/assets/icons/paper-plane.svg"></PlaneIcon>
          <ItemName>Enviando</ItemName>
          <ItemQt>{this.props.filterId}</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PlayButtonIcon src="/assets/icons/play-circle.svg"></PlayButtonIcon>
          <ItemName>Ativadas</ItemName>
          <ItemQt>{this.props.filterId}</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <PenIcon src="/assets/icons/pen.svg"></PenIcon>
          <ItemName>Configurando</ItemName>
          <ItemQt>{this.props.filterId}</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <BedIcon src="/assets/icons/bed.svg"></BedIcon>
          <ItemName>Ociosa</ItemName>
          <ItemQt>{this.props.filterId}</ItemQt>
        </MenuDivItem>

        <MenuDivItem>
          <CheckIcon src="/assets/icons/check.svg"></CheckIcon>
          <ItemName>Concluída</ItemName>
          <ItemQt>{this.props.filterId}</ItemQt>
        </MenuDivItem>
      </MenuDivPrincipal>
    );
  }
}
export default Menu;
