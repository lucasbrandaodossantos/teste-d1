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
  };

  async componentDidMount() {
    const response = await api.get("journey");
    this.setState({ journeys: response.data });
  }
  render() {
    const { journeys } = this.state;
    return (
      <TableComponent>
        <TbHeadComponent>
          <TbThComponent>Nome</TbThComponent>
          <TbThComponent>Destinatários</TbThComponent>
          <TbThComponent>Sucesso</TbThComponent>
          <TbThComponent>Status</TbThComponent>
        </TbHeadComponent>
        {journeys.map((journey) => (
          <TbBodyComponent>
            <TbTrComponent>
              <TbTdCompName>{journey.name}</TbTdCompName>
              <TbTdCompRecipients>{journey.recipients}</TbTdCompRecipients>
              <TbTdCompSuccess>{journey.success}</TbTdCompSuccess>
              <TbTdCompStatus>
                <CustomIcon /* src={icone} */></CustomIcon>
                {journey.status}
              </TbTdCompStatus>
            </TbTrComponent>
          </TbBodyComponent>
        ))}
      </TableComponent>
    );
  }
}
export default Table;
