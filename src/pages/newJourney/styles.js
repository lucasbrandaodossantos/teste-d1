import styled from "styled-components";
import { HeaderName } from "../../components/Table/styles.js";
import { Input } from "../../components/Search/styles.js";

export const PopUPDiv = styled.div`
  display: flex;
  width: 382px;
  height: 215px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 1px 1px 10px #1a173134;
  border: 1px solid #e4e6f1;
  border-radius: 7px;
  opacity: 1;
  align-self:center;
  justify-self:center;
`;
export const PopUPDivContent = styled.div`
  top: 142px;
  left: 554px;
  width: 322px;
  height: 125px;
  opacity: 1;
`;

export const Head = styled.p`
  width: 91px;
  height: 14px;
  text-align: left;
`;

export const BorderBottom = styled.div`
  width: 321px;
  height: 0px;
  border: 1px solid #e4e6f1;
  opacity: 1;
`;

export const Title = styled.p`
  width: 204px;
  height: 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #3e4157;
  opacity: 1;
`;

export const InputNJ = styled(Input)`
  width: 322px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #cccfde;
  border-radius: 5px;
  opacity: 1;
`;

export const Description = styled.p`
  width: 286px;
  height: 13px;
  text-align: left;
  font: normal normal normal 13px/19px Gotham;
  letter-spacing: 0px;
  color: #9196ab;
  opacity: 1;
`;

export const Continue = styled.p`
  width: 64px;
  height: 14px;
  text-align: center;
  font: normal normal bold 13px/14px Gotham;
  letter-spacing: 0px;
  color: #117eff;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }
`;
export const Cancel = styled.p`
  width: 58px;
  height: 14px;
  text-align: center;
  font: normal normal bold 13px/14px Gotham;
  letter-spacing: 0px;
  color: #9196ab;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }
`;
/* 
width: 1400px;
height: 768px;
background: #1A1731 0% 0% no-repeat padding-box;
border: 1px solid #707070;
opacity: 0.5; */
