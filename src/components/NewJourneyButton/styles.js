import styled from "styled-components";

export const NewJourneyBt = styled.button`
  width: 150px;
  height: 35px;
  background: #117eff;
  opacity: 1;
  padding:0;
  border-radius: 5px;
  justify-self: flex-end;
  align-self:center;
  display:inline-flex;
  justify-content:space-between;
  align-items:center;
  align-content:center;  
  border: none;
  color:white;
  
  &:hover {
    background: linear-gradient(90deg, #00e1ff, #117eff);
    outline-style: none!important;
    cursor:pointer;
  }
  &:focus{
    outline-style: none!important;
  }
`;

export const TextButton = styled.p`
  font: normal normal bold 13px/14px Gotham;
  margin-left:35px;
`;
