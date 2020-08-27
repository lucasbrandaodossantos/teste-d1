import styled from "styled-components";

export const Sidebar = styled.div`
  flex-direction: column;
  top: 0px;
  left: 0px;
  width: 71px;
  height: 768px;
  background-color: #1a1731;
  align-items: center;
  margin-right:-90px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 240px;
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 35px;
  margin-right: 35px;
  width: 30px;
  height: 20px;
  margin-left: 18px;
  margin-bottom:67px;
  opacity: 1;
`;

export const SidebarButton = styled.img`
  top: 595px;
  left: 26px;
  width: 20px;
  height: 21px;
  text-align: left;
  font: normal normal normal 20px/25px la-solid-900;
  letter-spacing: 0px;
  opacity: 1;
  margin-top: 20px;
  -webkit-filter: invert(100%);

  &:hover{
    cursor:pointer;
    filter: invert(30%) sepia(90%) saturate(2168%) hue-rotate(204deg) brightness(105%) contrast(101%);
  }
`;
