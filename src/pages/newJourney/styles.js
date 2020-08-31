import styled from "styled-components";
import { Input } from "../../components/Search/styles.js";

export const PopUPDiv = styled.div`
  width: 1400px;
  height: 100vw;
  display: flex;
  justify-content: center;
  align-self: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10; 
  opacity: 1;
  background-color:rgba(0, 0, 0, 0.6);
  visibility:hidden; /* MUDAR A VISIBILIDADE */
`;
export const PopUPDivContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: left;
  align-items: left;
  justify-content: left;
  align-content: left;
  width: 382px;
  height: 215px;
  background: #ffffff 0% 0% no-repeat padding-box;
  background-color: rgba(0, 0, 0 0.8);
  box-shadow: 1px 1px 10px #1a173134;
  border: 1px solid #e4e6f1;
  border-radius: 7px;
  opacity: 1;
  justify-self: center;
  margin-top: 117px;
`;

export const HeadTitle = styled.p`
  width: fit-content;
  margin: 0;
  padding-bottom: 25px;
  height: 14px;
  text-align: left;
  flex-direction: flex-start;
  margin-top: 25px;
  margin-left: 31px;
  margin-bottom:10px;
`;

export const LineBottomTitle = styled.div`
  flex-direction: flex-start;
  width: 321px;
  height: 0px;
  border-bottom: 1px solid #e4e6f1;
  opacity: 1;
  margin-top:15px;
`;

export const Title = styled.p`
  width: fit-content;
  height: 14px;
  text-align: left;
  font: normal normal bold 13px/14px Gotham;
  letter-spacing: 0px;
  color: #9196ab;
  opacity: 1;
  margin: 0;
`;

export const JourneyNameTitle = styled.p`
  width: fit-content;
  height: 14px;
  text-align: left;
  font: normal normal normal 13px/14px Gotham;
  letter-spacing: 0px;
  color: #3E4157;
  opacity: 1;
`;



export const InputNJ = styled(Input)`
  width: 322px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #cccfde;
  border-radius: 5px;
  opacity: 1;
  justify-self: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 0;
`;

export const Description = styled.p`
  width: fit-content;
  height: fit-content;
  margin: 0;
  text-align: left;
  font: normal normal normal 13px/19px Gotham;
  letter-spacing: 0px;
  color: #9196ab;
  opacity: 1;
  margin-left: 30px;
  margin-top:-10px;
`;

export const Continue = styled.button`
  width: fit-content;
  height: fit-content;
  text-align: center;
  font: normal normal bold 13px/14px Gotham;
  letter-spacing: 0px;
  color: #117eff;
  border:none;
  background:none;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }&:focus{
    outline-style: none!important;
  }
  
`;
export const Cancel = styled.button`
  width: fit-content;
  height: fit-content;
  border:none;
  background:none;
  text-align: center;
  margin-left: 21px;
  font: normal normal bold 13px/14px Gotham;
  letter-spacing: 0px;
  color: #9196ab;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }&:focus{
    outline-style: none!important;
  }
`;

export const DivButtonsModal = styled.div`
  display: flex;
  justify-self: center;
  align-self: flex-end;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-bottom:26px;
`;
