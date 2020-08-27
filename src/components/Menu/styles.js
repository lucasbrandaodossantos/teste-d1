import styled from "styled-components";

export const MenuTitle = styled.p`
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  align-self: flex-start;
  justify-self: flex-start;
  margin-top: 65px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: flex-start;
  font: normal normal bold 16px/18px Gotham;
  color: #3e4157;
`;

export const MenuDivPrincipal = styled.div`
  opacity: 1;
  width: fit-content;
  height: fit-content;
`;

export const MenuDivItem = styled.div`
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  &:hover {
    cursor: pointer;
  }
`;

export const ItemName = styled.text`
  flex: 2;
  font-size: 13px;
  text-align: left;
  margin-left: 15px;
  margin-right: 10px;
  font: normal normal normal 13px/19px Gotham;
  &:hover {
    cursor: pointer;
    color: #117eff;
  }
`;

export const ItemIcon = styled.img`
  height: 16px;
  width: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const ItemQt = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  justify-items: center;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: #e4e6f1 0% 0% no-repeat padding-box;
  border: 1px solid #ebeef6;
  opacity: 1;
  border-radius: 50%;
  font: normal normal normal 13px/19px Gotham;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #117eff;
  }
`;

export const TableIcon = styled(ItemIcon)`
  filter: invert(90%) sepia(68%) saturate(4865%) hue-rotate(256deg)
    brightness(91%) contrast(88%);
`;

export const PlaneIcon = styled(ItemIcon)`
  filter: invert(86%) sepia(15%) saturate(1620%) hue-rotate(14deg)
    brightness(92%) contrast(87%);
`;

export const PlayButtonIcon = styled(ItemIcon)`
  filter: invert(69%) sepia(80%) saturate(437%) hue-rotate(81deg)
    brightness(84%) contrast(83%);
`;

export const PenIcon = styled(ItemIcon)`
  filter: invert(72%) sepia(42%) saturate(5154%) hue-rotate(178deg)
    brightness(96%) contrast(98%);
`;

export const BedIcon = styled(ItemIcon)`
  filter: invert(72%) sepia(53%) saturate(583%) hue-rotate(357deg)
    brightness(103%) contrast(84%);
`;

export const CheckIcon = styled(ItemIcon)`
  filter: invert(82%) sepia(4%) saturate(5180%) hue-rotate(190deg)
    brightness(90%) contrast(84%);
`;
