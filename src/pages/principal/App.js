import React from "react";
import { Divprincipal, DivMenuLogo } from "./styles";
import SideMenuBar from "../../components/SideMenuBar/index.js";
import Menu from "../../components/Menu/index.js";
import Search from "../../components/Search/index.js";
import HomeLogo from "../../components/HomeLogo/index.js";
import Table from "../../components/Table/index.js";

function App() {
  return (
    <Divprincipal>
      <SideMenuBar></SideMenuBar>
      <DivMenuLogo>
        <HomeLogo></HomeLogo>
        <Menu></Menu>
      </DivMenuLogo>
      
      <Search></Search>

      <Table></Table>
    </Divprincipal>
  );
}

export default App;
