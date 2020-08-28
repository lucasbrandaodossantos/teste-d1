import React from "react";
import { TableComponent } from "./styles";
import api from "../../services/api.js";

class Table extends React.Component {
  state = {
    journeys: [],
  };

  async componentDidMount() {
    const response = await api.get("filter");
    this.setState({ journeys: response.data });
  }
  render() {
    const { journeys } = this.state;
    return (
      <TableComponent>
        <tr>
          <th>Nome</th>
          <th>Destinatário</th>
          <th>Sucesso</th>
          <th>Status</th>
        </tr>

        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>5</td>
        </tr>
        
      </TableComponent>
    );
  }
}
export default Table;
