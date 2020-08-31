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

  render() {

    
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
              <TbTdCompName>..........................</TbTdCompName>
              <TbTdCompRecipients>..........................</TbTdCompRecipients>
              <TbTdCompSuccess>..........................</TbTdCompSuccess>
              <TbTdCompStatus>
                <CustomIcon /* src = {setIconStatus} */></CustomIcon>
                ..........................
              </TbTdCompStatus>
            </TbTrComponent>
          </TbBodyComponent>
        
      </TableComponent>
    );
  }
}
export default Table;
