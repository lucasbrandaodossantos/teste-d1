import React from "react";
import { Divprincipal, DivMenuLogo, DivSearchTable } from "./styles";
import SideMenuBar from "../../components/SideMenuBar/index.js";
import Menu from "../../components/Menu/index.js";
import Search from "../../components/Search/index.js";
import HomeLogo from "../../components/HomeLogo/index.js";
import Table from "../../components/Table/index.js";
import api from '../../services/api.js'

function App() {
  return (
    <Divprincipal>
      <SideMenuBar></SideMenuBar>
      <DivMenuLogo>
        <HomeLogo></HomeLogo>
        <Menu></Menu>
      </DivMenuLogo>

      <DivSearchTable>
        <Search></Search>
        <Table></Table>
      </DivSearchTable>
    </Divprincipal>
  );
}

export default App;
