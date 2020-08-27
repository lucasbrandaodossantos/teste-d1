import styled from "styled-components";

export const DivButtonsHome = styled.div`
  margin-top: 32px;
  width: fit-content;
  height: 30px;
  display: flex;
  justify-content: center;
`;

export const HomeButton = styled.img`
  width: 90px;
  height: 30px;
  opacity: 1;
  align-self: center;
  justify-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const AContainer = styled.div`
  background-color: #117eff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 28px;
  display: flex;
  justify-self: flex-start;
  align-self: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const LetterA = styled.p`
  color: #f7f7f7;
  opacity: 1;
  width: 12px;
  height: 15px;
  text-align: center;
  font: normal normal bold 13px/14px Gotham;
`;
