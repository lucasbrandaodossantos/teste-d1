import React from "react";
import { Divprincipal } from "./styles";
import SideMenuBar from "../../components/SideMenuBar/index.js";
import MenuBar from "../../components/MenuBar/index.js";
import Search from "../../components/Search/index.js"

function App() {
  return (
    <Divprincipal>
      <SideMenuBar></SideMenuBar>
      <MenuBar></MenuBar>
      <Search></Search>
    </Divprincipal>
  );
}

export default App;
