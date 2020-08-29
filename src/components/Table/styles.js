import styled from "styled-components";
import { ItemIcon } from "../Menu/styles.js";

export const TableComponent = styled.table`
  width: 800px;
  margin-right: 195px;
  margin-top: 107px;
  margin-left: 196px;
`;

export const TbHeadComponent = styled.thead``;
export const TbBodyComponent = styled.tbody``;

export const TbThComponent = styled.th`
  text-align: left;
  font: normal normal normal 13px/19px Gotham;
  color: #9196ab;
`;

export const TbTrComponent = styled.tr`
  width: 699px;
  height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-bottom: 10px;
`;

export const TbTdCompName = styled.td`
  text-align: left;
  font: normal normal bold 13px/14px Gotham;
`;
export const TbTdCompRecipients = styled.td`
  color: #3e4157;
  font: normal normal normal 13px/19px Gotham;
  align-content: center;
  justify-content:center;
  text-align:center;
`;
export const TbTdCompSuccess = styled.td`
  color: #3e4157;
  font: normal normal normal 13px/19px Gotham;
  text-align:center;
`;
export const TbTdCompStatus = styled.td`
  color: #3e4157;
  font: normal normal normal 13px/19px Gotham;
  align-content: center;
  justify-content:center;
  text-align: left;
  margin:0;
  padding-left:10px;
`;

export const CustomIcon = styled(ItemIcon)`
  padding-right:5px;
  &:hover {
    cursor: auto;
  }
`;
