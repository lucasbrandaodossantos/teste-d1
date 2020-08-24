import React from "react";
import { Divprincipal } from "./styles";
import SideMenuBar from "../../components/SideMenuBar/index.js";
import MenuBar from "../../components/MenuBar/index.js";

function App() {
  return (
    <Divprincipal>
      <SideMenuBar></SideMenuBar>
      <MenuBar></MenuBar>
    </Divprincipal>
  );
}

export default App;
