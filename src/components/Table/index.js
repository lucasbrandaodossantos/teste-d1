/* eslint-disable no-unreachable */
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
import api from "../../services/api.js";
class Table extends React.Component {
  state = {
    journeys: [],
    filters: [],
  };

  async componentDidMount() {
    const response = await api.get("journey");
    this.setState({ journeys: response.data });
  }
  render() {
    const { journeys } = this.state;

    function setCustomIcon(jstatus) {
      var icon;
      if (jstatus === 0) {
        icon = "/assets/icons/table.svg";
      } else if (jstatus === 1) {
        icon = "/assets/icons/paper-plane.svg";
      } else if (jstatus === 2) {
        icon = "/assets/icons/play-circle.svg";
      } else if (jstatus === 3) {
        icon = "/assets/icons/pen.svg";
      } else if (jstatus === 4) {
        icon = "/assets/icons/bed.svg";
      } else if (jstatus === 5) {
        icon = "/assets/icons/check.svg";
      }
      console.log(icon.toString());
      return icon.toString();
    }

    function statusName(jstatus) {
      var statusName;
      if (jstatus === 0) {
        statusName = "Todos";
      } else if (jstatus === 1) {
        statusName = "Em Execução";
      } else if (jstatus === 2) {
        statusName = "Ativa";
      } else if (jstatus === 3) {
        statusName = "Configurando";
      } else if (jstatus === 4) {
        statusName = "Ociosa";
      } else if (jstatus === 5) {
        statusName = "Concluída";
      }
      return statusName.toString();
    }

    return (
      <TableComponent>
        <TbHeadComponent>
          <TbThComponent>Nome</TbThComponent>
          <TbThComponent>Destinatários</TbThComponent>
          <TbThComponent>Sucesso</TbThComponent>
          <TbThComponent>Status</TbThComponent>
        </TbHeadComponent>

        {journeys.map((journey) => {
          return (
            <TbBodyComponent>
              <TbTrComponent>
                <TbTdCompName>{journey.name}</TbTdCompName>
                <TbTdCompRecipients>{journey.recipients}</TbTdCompRecipients>
                <TbTdCompSuccess>{journey.success}</TbTdCompSuccess>
                <TbTdCompStatus>
                  <CustomIcon src={setCustomIcon(journey.status)}></CustomIcon>
                  {statusName(journey.status)}
                </TbTdCompStatus>
              </TbTrComponent>
            </TbBodyComponent>
          );
        })}
      </TableComponent>
    );
  }
}
export default Table;
