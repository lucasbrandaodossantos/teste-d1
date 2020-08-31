import React from "react";
import {
  TableComponent,
  TbBodyComponent,
  TbHeadComponent,
  TbThComponent,
  TbTrComponent,
  TbTdCompName,
  TbTdCompRecipients,
  TbTdCompSuccess,
  TbTdCompStatus,
  CustomIcon,
} from "./styles";
class Table extends React.Component {
  async componentDidMount (){
    const urlJourney = "https://api-d1-test.herokuapp.com/api/journey"
    const responseJourney = await fetch (urlJourney);
    const dataJourney = responseJourney.json();

    this.setState({
      journeyArray: dataJourney
    })
  }
  render(props) {
    function setCustomIcon(num) {
      num = 0;
      var icon;
      if (num === 0) {
        icon = "/assets/icons/table.svg";
      } else if (num === 1) {
        icon = "/assets/icons/paper-plane.svg";
      } else if (num === 2) {
        icon = "/assets/icons/play-circle.svg";
      } else if (num === 3) {
        icon = "/assets/icons/pen.svg";
      } else if (num === 4) {
        icon = "/assets/icons/bed.svg";
      } else if (num === 5) {
        icon = "/assets/icons/check.svg";
      }
      return icon.toString();
    }   

    return (
      <TableComponent>
        <TbHeadComponent>
          <TbThComponent>Nome</TbThComponent>
          <TbThComponent>Destinatários</TbThComponent>
          <TbThComponent>Sucesso</TbThComponent>
          <TbThComponent>Status</TbThComponent>
        </TbHeadComponent>

        <TbBodyComponent>
          <TbTrComponent>
            <TbTdCompName></TbTdCompName>
            <TbTdCompRecipients></TbTdCompRecipients>
            <TbTdCompSuccess></TbTdCompSuccess>
            <TbTdCompStatus>
              <CustomIcon src={setCustomIcon()}></CustomIcon>
            </TbTdCompStatus>
          </TbTrComponent>
        </TbBodyComponent>
      </TableComponent>
    );
  }
}
export default Table;
