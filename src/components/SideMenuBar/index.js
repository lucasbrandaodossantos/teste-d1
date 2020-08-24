import React from "react";
import { Sidebar, SidebarButton, Logo, TopContainer, BottomContainer } from "./styles.js";
class SideMenuBar extends React.Component {
  render() {
    return (
      <Sidebar>
        <Logo></Logo>
        <TopContainer>
          {/* grafico de pizza */}
          <SidebarButton></SidebarButton>
          {/* foguete */}
          <SidebarButton></SidebarButton>
          {/* pessoas */}
          <SidebarButton></SidebarButton>
          {/* nuvem */}
          <SidebarButton></SidebarButton>
          {/*seta pra cima */}
          <SidebarButton></SidebarButton>
        </TopContainer>

        <BottomContainer>
          {/* diamante */}
          <SidebarButton></SidebarButton>
          {/* ferramentas */}
          <SidebarButton></SidebarButton>
          {/* setas contrarias */}
          <SidebarButton></SidebarButton>
          {/* logout */}
          <SidebarButton></SidebarButton>
        </BottomContainer>
      </Sidebar>
    );
  }
}

export default SideMenuBar;
