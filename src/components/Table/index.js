import React from "react";
import {
  DivTable,
  DivHeader,
  DivLines,
  HeaderName,
  HeaderRecipient,
  HeaderSuccess,
  HeaderStatus,
  TableLine,
  ColumnName,
  ColumnRecipient,
  ColumnSuccess,
  DivStatus,
  ColumnStatus,
  IconStatus,
} from "./styles";
class Table extends React.Component {
  render() {
    return (
      <DivTable>
        <DivHeader>
          <HeaderName>Nome</HeaderName>
          <HeaderRecipient>Destinatários</HeaderRecipient>
          <HeaderSuccess>Sucesso</HeaderSuccess>
          <HeaderStatus>Status</HeaderStatus>
        </DivHeader>

        <DivLines>
          <TableLine>
            <ColumnName>Divulgação novos serviços</ColumnName>
            <ColumnRecipient>20.210.000</ColumnRecipient>
            <ColumnSuccess>30%</ColumnSuccess>

            <DivStatus>
            {/* ADICIONAR CONCIDICIONAL PARA TRATAR ICONES DE ACORDO COM O STATUS */}
              <IconStatus></IconStatus>
              <ColumnStatus>Enviando</ColumnStatus>
            </DivStatus>
          </TableLine>
        </DivLines>
      </DivTable>
    );
  }
}
export default Table;
