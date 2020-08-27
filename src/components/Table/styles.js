import styled from "styled-components";

export const DivTable = styled.div`
  margin-top: 90px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 10px;
  margin-right:100px;
  display: flex;
  align-self: right;
  justify-content: center;
  flex-direction: column;
`;

export const DivHeader = styled.div`
  width: 800px;
  height: fit-content;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  padding: 0px 10px 0 10px;
`;

export const DivLines = styled.div`
  width: 800px;
  height: fit-content;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  padding: 0px 10px 0 10px;
`;

export const HeaderName = styled.p`
  width: 39px;
  height: 13px;
  font: normal normal normal 13px/19px Gotham;
  color: #9196ab;
  opacity: 1;
`;

export const HeaderRecipient = styled.p`
  width: 39px;
  height: 13px;
  font: normal normal normal 13px/19px Gotham;
  color: #9196ab;
  opacity: 1;
`;

export const HeaderSuccess = styled.p`
  width: 39px;
  height: 13px;
  font: normal normal normal 13px/19px Gotham;
  color: #9196ab;
  opacity: 1;
`;

export const HeaderStatus = styled.p`
  width: 39px;
  height: 13px;
  font: normal normal normal 13px/19px Gotham;
  color: #9196ab;
  opacity: 1;
`;

export const TableLine = styled.div`
  width: 800px;
  height: 45px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  align-self: left;
  justify-self: center;
  justify-content: space-between;
  padding: 0px 10px 0 10px;
`;

export const ColumnName = styled.p``;

export const ColumnRecipient = styled.p``;

export const ColumnSuccess = styled.p``;

export const DivStatus = styled.div`
  display: flex;
  flex-direction: row;
  margin-right:0;
  align-content: flex-end;
  justify-content: flex-end;
`;

export const ColumnStatus = styled.p`
`;

export const IconStatus = styled.p`
  width: 14px;
  height: 14px;
  background-color: #002002;
`;
