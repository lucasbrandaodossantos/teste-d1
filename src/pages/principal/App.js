import React from "react";
import {
  Divprincipal,
  DivMenuLogo,
  DivSearchTable,
  DivTable,
  DivSearch,
} from "./styles";
import SideMenuBar from "../../components/SideMenuBar/index.js";
import Menu from "../../components/Menu/index.js";
import Search from "../../components/Search/index.js";
import HomeLogo from "../../components/HomeLogo/index.js";
import Table from "../../components/Table/index.js";
import NewJourneyButton from "../../components/NewJourneyButton/index.js";

class App extends React.Component {
 

  render() {
    return (
      <Divprincipal>
        <SideMenuBar></SideMenuBar>
        <DivMenuLogo>
          <HomeLogo></HomeLogo>
          <Menu></Menu>
        </DivMenuLogo>

        <DivSearchTable>
          <DivSearch>
            <Search></Search>
            <NewJourneyButton></NewJourneyButton>
          </DivSearch>
          <DivTable>
            <Table></Table>
          </DivTable>
        </DivSearchTable>
      </Divprincipal>
    );
  }
}

export default App;
