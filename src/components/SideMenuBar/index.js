import React from "react";
import {
  Sidebar,
  SidebarButton,
  Logo,
  TopContainer,
  BottomContainer,
  HorizontalLineBottom,
  HorizontalLineTop
} from "./styles.js";
class SideMenuBar extends React.Component {
  render() {
    return (
      <Sidebar>
        <HorizontalLineTop></HorizontalLineTop>
        <Logo src="/assets/images/logotipo-branco.png"></Logo>
        <TopContainer>
          {/* grafico de pizza */}
          <SidebarButton
            src="/assets/icons/chart-pie.svg"
            title="Análises"
          ></SidebarButton>
          {/* foguete */}
          <SidebarButton
            src="/assets/icons/rocket.svg"
            title="Jornadas"
          ></SidebarButton>
          {/* pessoas */}
          <SidebarButton
            src="/assets/icons/user-friends.svg"
            title="Clientes"
          ></SidebarButton>
          {/* nuvem */}
          <SidebarButton
            src="/assets/icons/ccm-cloud.svg"
            title="CCM Cloud"
          ></SidebarButton>
          {/*seta pra cima */}
          <SidebarButton
            src="/assets/icons/external-link-alt-solid.svg"
            title="Versão 01"
          ></SidebarButton>
        </TopContainer>

        <BottomContainer>
          {/* diamante */}
          <SidebarButton
            src="/assets/icons/gem.svg"
            title="Administração"
          ></SidebarButton>
          {/* ferramentas */}
          <SidebarButton
            src="/assets/icons/tools.svg"
            title="Help Desk"
          ></SidebarButton>
          {/* setas contrarias */}
          <SidebarButton
            src="/assets/icons/exchange-alt.svg"
            title="Trocar Conta"
          ></SidebarButton>
          {/* logout */}
          <SidebarButton
            src="/assets/icons/sign-out-alt.svg"
            title="Sair"
          ></SidebarButton>          
        </BottomContainer>
        <HorizontalLineBottom></HorizontalLineBottom>
      </Sidebar>
      
    );
  }
}

export default SideMenuBar;
