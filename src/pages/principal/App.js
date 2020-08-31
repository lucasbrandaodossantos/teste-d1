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
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeyArr: {},
      filterArr: {},
    };    
  }
  async componentDidMount(){
    const urlFilter = "https://api-d1-test.herokuapp.com/api/filter"

    const responseFilter = await fetch (urlFilter);

    const dataFilter = responseFilter.json();
  }

  render() {
    return (
      <Divprincipal>
        <SideMenuBar></SideMenuBar>
        <DivMenuLogo>
          <HomeLogo></HomeLogo>
          <Menu filterArray={this.state.filterArr}></Menu>
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
