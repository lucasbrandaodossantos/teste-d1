import styled from "styled-components";

export const MenuTitle = styled.p`
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  align-self: left;
  margin-bottom: 30px;
  display: flex;
  flex-direction: table;
`;

export const MenuDivPrincipal = styled.div`
  opacity: 1;
  border: solid;
  width: fit-content;
  height: fit-content;
`;

export const MenuDivItem = styled.div`
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ItemName = styled.text`
  font-size: 13px;
  margin-left: 10px;
`;

export const ItemIcon = styled.img`
  height: 16px;
  width: 16px;
`;

export const ItemQt = styled.div`
  display: table;
  width: fit-content;
  height: fit-content;
  align-self: right;
  background: #e4e6f1 0% 0% no-repeat padding-box;
  border: 1px solid #ebeef6;
  opacity: 1;
  border-radius: 50%;
`;
